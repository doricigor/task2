$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autplay: true,
        autoplaySpeed: 2000
    });
});

$(document).ready(function () {
    $('.testimonials__slider').slick({
        dots: true,
        arrows: false,
        autplay: true,
        autoplaySpeed: 2000
    });
});

$(document).on('show', '.accordion', function (e) {
    $('.accordion-heading i').toggleClass(' ');
    $(e.target).prev('.accordion-heading').addClass('accordion-opened');
});

$(document).on('hide', '.accordion', function (e) {
    $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
    // $('.accordion-heading a').toggleClass('fa-chevron-right fa-chevron-down');
});