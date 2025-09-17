document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
    const navigationDotsContainer = document.querySelector('.navigation-dots');

    // ドットの生成
    carouselItems.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === getActiveItemIndex()) { // 初期アクティブアイテムに合わせてドットもアクティブに
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            scrollToItem(index);
        });
        navigationDotsContainer.appendChild(dot);
    });

    const navigationDots = Array.from(document.querySelectorAll('.dot'));

    // 現在アクティブなアイテムのインデックスを取得する関数
    function getActiveItemIndex() {
        const activeItem = document.querySelector('.carousel-item.active');
        return carouselItems.indexOf(activeItem);
    }

    // アイテムまでスクロールする関数
    function scrollToItem(index) {
        const targetItem = carouselItems[index];
        const scrollPosition = targetItem.offsetLeft - (carouselTrack.offsetWidth - targetItem.offsetWidth) / 2;
        carouselTrack.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }

    // アクティブなアイテムとドットを更新する関数
    function updateActiveState() {
        const trackScrollLeft = carouselTrack.scrollLeft;
        const trackCenter = trackScrollLeft + carouselTrack.offsetWidth / 2;

        let closestItemIndex = 0;
        let minDistance = Infinity;

        carouselItems.forEach((item, index) => {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(trackCenter - itemCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestItemIndex = index;
            }
        });

        // アイテムのアクティブクラスを更新
        carouselItems.forEach((item, index) => {
            if (index === closestItemIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // ドットのアクティブクラスを更新
        navigationDots.forEach((dot, index) => {
            if (index === closestItemIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // スクロールイベントを監視
    carouselTrack.addEventListener('scroll', () => {
        // スクロール終了時にアクティブ状態を更新するために、debounceを利用すると良い
        // 簡単のためここでは直接呼び出すが、パフォーマンスを考慮するならdebounceを推奨
        updateActiveState();
    });

    // 初期状態のアクティブアイテムまでスクロール
    scrollToItem(getActiveItemIndex());
    updateActiveState(); // 初期表示で確実にアクティブ状態を更新
});
