jQuery(document).ready(function ($) {
    $('#corporate-adventure .container-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev slick-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next slick-arrow"></i>'
    });


    $('#tours .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('#tours .slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev slick-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next slick-arrow"></i>'
    });

});
