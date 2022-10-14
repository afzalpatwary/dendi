/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // testimonial-active
    $(function () {
        if ($('.our-client-slider').length) {
            $(".our-client-slider").owlCarousel({
                items: 2,
                margin: 30,
                nav: false,
                stagePadding: 150,
                loop: true,
                autoplay: true,
                smartSpeed: 2500,
                navText: ["", ""],
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 50,
                    },
                    400: {
                        items: 1,
                        stagePadding: 120,
                    },
                    575: {
                        items: 2,
                        stagePadding: 50,
                    },
                    767: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    },
                    1400: {
                        items: 4
                    },
                    1650: {
                        items: 6
                    },
                }
            });
        }
    });


    // resources-wrapper
    $(function () {
        if ($('.resources-wrapper').length) {
            $(".resources-wrapper").owlCarousel({
                items: 2,
                margin: 30,
                nav: false,
                loop: true,
                autoplay: true,
                smartSpeed: 2500,
                navText: ["", ""],
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });



    $(function () {
        if ($('.testimonials-slider').length) {
            $(".testimonials-slider").owlCarousel({
                items: 2,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                smartSpeed: 2500,
                navText: ["<img src='assets/img/prev-arrow.svg'>", "<img src='assets/img/next-arrow.svg'>"],
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }
    });






    // meet-slider
    $(function () {
        if ($(window).width() < 975) {
            $('#meet-slider').addClass('owl-carousel owl-theme');
            if ($('.meet-slider').length) {
                $(".meet-slider").owlCarousel({
                    items: 3,
                    margin: 30,
                    nav: false,
                    loop: true,
                    autoplay: true,
                    dots: true,
                    autoplayTimeout: 2500,
                    smartSpeed: 1500,
                    autoplayHoverPause: true,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            items: 1
                        },
                        767: {
                            items: 2
                        },
                        1024: {
                            items: 3
                        }
                    }
                });
            }
        }
    })





    // force-multiplier
    $(function () {
        if ($(window).width() < 975) {
            $('#force-multiplier-slider').addClass('owl-carousel owl-theme');
            if ($('.force-multiplier-slider').length) {
                $(".force-multiplier-slider").owlCarousel({
                    items: 3,
                    margin: 30,
                    nav: false,
                    loop: true,
                    autoplay: true,
                    dots: true,
                    autoplayTimeout: 2500,
                    smartSpeed: 1500,
                    autoplayHoverPause: true,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            items: 1
                        },
                        767: {
                            items: 2
                        },
                        1024: {
                            items: 3
                        }
                    }
                });
            }
        }
    })








    // Video popup
    $('.video-popup').magnificPopup({
        type: 'iframe'
      });





    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });



    // Back to top

    var btn = $('#Back-to-Top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

});
