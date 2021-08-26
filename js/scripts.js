if ($('.owl-carousel').length > 0) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 3,
                nav: false,
                loop: false
            }
        }
    })
}