
document.body.style.overflow = "hidden";

window.addEventListener("load", () => {
    const parent = document.querySelector(".pageloader");

  // 親のアニメーションが終わったらスクロール解除
    parent.addEventListener("animationend", () => {
        document.body.style.overflow = "auto";
    });
});
