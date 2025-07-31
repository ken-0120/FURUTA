document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".scroll_up, .scroll_left, .scroll_right");
    const scrollAnimation = () => {
        scrollElements.forEach((el) => {
            const triggerMargin = 200;
            const rect = el.getBoundingClientRect();
            if (window.innerHeight > rect.top + triggerMargin) {
                el.classList.add("on");
            }
        });
    };
    window.addEventListener("load", scrollAnimation);
    window.addEventListener("scroll", scrollAnimation);
});
