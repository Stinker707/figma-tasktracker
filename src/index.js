const btn = document.querySelector('#close-btn');
const menuMobi = document.querySelector('#menu-mobi');
btn.onclick = () => {
    btn.classList.toggle('header-mobi-close-btn--is-active');
    menuMobi.classList.toggle('header-mobi__menu--is-visible');
}