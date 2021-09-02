/* global Typed */
// eslint-disable-next-line no-console
console.log('Common All Page');
$(() => {
    function ui_slider() {
        $('.ui-cardList:not(".small")').slick({
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                        dots: true,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    },
                },
            ],
        });
        $('.ui-cardList.small').slick({
            dots: true,
            speed: 300,
            slidesToShow: 2,
            autoplay: true,
            slidesToScroll: 1,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    },
                },
            ],
        });
    }
    function typed_text() {
        // Typed Initiate
        if ($('.hero .hero-text h2').length == 1) {
            const typed_strings = $('.hero .hero-text .typed-text').text();
            new Typed('.hero .hero-text h2', {
                strings: typed_strings.split(', '),
                typeSpeed: 50,
                backSpeed: 10,
                smartBackspace: false,
                loop: true,
            });
        }
    }
    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) $('.navbar').addClass('nav-sticky');
        else $('.navbar').removeClass('nav-sticky');
    });

    //invoke function
    ui_slider();
    typed_text();
});
