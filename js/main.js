
$(document).ready(function () {
    // Banner slider
    $('.slider').slick({
        dots: true,
        arrows: false,
        autplay: true,
        autoplaySpeed: 2000
    });

    // Testimonials slider
    $('.testimonials__slider').slick({
        dots: true,
        arrows: false,
        autplay: true,
        autoplaySpeed: 2000
    });

    // Fancybox
    $('[data-fancybox="images"]').fancybox({
    });


    // Tabs

    $('.tabs-nav a').on('click', function (event) {
        event.preventDefault();
        const num = $(this).attr('href');
        $('.tab-active').removeClass('tab-active');
        $(this).parent().addClass('tab-active');
        $(num).slideDown().siblings().slideUp();
    });
});


// Mini navbar
const nav = document.querySelector('.miniNav');
const menu = document.querySelector('.miniNav__menu');
const close = document.querySelector('.closeMenu');

nav.addEventListener('click', e => {
    menu.classList.add('showMenu');
});

close.addEventListener('click', e => {
    menu.classList.remove('showMenu');
});

