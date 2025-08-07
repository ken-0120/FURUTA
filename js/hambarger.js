const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const hamback = document.querySelector('.hamback');
hamback.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
