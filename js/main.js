// Banner slider
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autplay: true,
        autoplaySpeed: 2000
    });
});
// Testimonials slider
$(document).ready(function () {
    $('.testimonials__slider').slick({
        dots: true,
        arrows: false,
        autplay: true,
        autoplaySpeed: 2000
    });
});
// Mini navbar
const nav = document.querySelector('.miniNav');
const menu = document.querySelector('.miniNav__menu');

nav.addEventListener('click', e => {
    menu.classList.toggle('d-block');
});