jQuery(document).ready(function ($) {
    $('#corporate-adventure .container-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev slick-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next slick-arrow"></i>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
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

    $('#our-gids .container-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev slick-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next slick-arrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    arrows: false,
                    autoplay: true,
                }
            },
        ]
    });

    $('#response .container-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev slick-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next slick-arrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            },
        ]
    });
});
