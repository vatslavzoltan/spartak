$(function () {
    //HAMBURGER
    $('.hamburger ').click(function () {
        $(this).toggleClass('is-active');
        $('.top_line nav').toggleClass('active');
    });
    //PHOTO GALLERY
    $('.gallery_container').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    //VIDEO GALLERY
    $('.video_gallery').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }
        }
    });
    //LAST NEWS
    $('.last_news').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }
        }
    });

    //POPUPS
    $('.owl-carousel.gallery_container .gallery_item a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});