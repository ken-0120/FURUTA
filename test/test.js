 // CircularTextクラス
        class CircularText {
            constructor(element, options = {}) {
                this.element = element;
                this.text = options.text || 'FURUTA*SPECIAL*SEWING*';
                this.spinDuration = options.spinDuration || 20;
                this.onHover = options.onHover || 'speedUp';
                this.init();
            }

            init() {
                this.render();
                this.setupEvents();
            }

            render() {
                const letters = Array.from(this.text);
                this.element.innerHTML = '';
                
                letters.forEach((letter, i) => {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    
                    const rotationDeg = (360 / letters.length) * i;
                    const radius = this.element.offsetWidth / 3;
                    const x = Math.cos((rotationDeg - 90) * Math.PI / 180) * radius;
                    const y = Math.sin((rotationDeg - 90) * Math.PI / 180) * radius;
                    
                    span.style.transform = `translate(${x}px, ${y}px) rotate(${rotationDeg}deg)`;
                    this.element.appendChild(span);
                });
            }

            setupEvents() {
                this.element.addEventListener('mouseenter', () => {
                    if (this.onHover === 'speedUp') {
                        this.element.style.animationDuration = '5s';
                    }
                });
                
                this.element.addEventListener('mouseleave', () => {
                    this.element.style.animationDuration = `${this.spinDuration}s`;
                });
            }
        }

        // ハンバーガーメニュー
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        hamburgerBtn.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // メニューリンククリック時にメニューを閉じる
        navMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // スクロールアニメーション
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('on');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll_up').forEach(el => {
            observer.observe(el);
        });

        // 円形テキストの初期化
        document.addEventListener('DOMContentLoaded', () => {
            const circularTextElement = document.getElementById('circularText');
            if (circularTextElement) {
                new CircularText(circularTextElement, {
                    text: 'FURUTA*SPECIAL*MACHINE*',
                    spinDuration: 20
                });
            }
        });

        // スムーススクロール
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });