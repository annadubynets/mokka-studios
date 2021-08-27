if ($('.owl-carousel').length > 0) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: false,
        dotsContainer: '.tech-carousel-dots',
        responsive: {
            0: {
                items: 2,
                stagePadding: 20,
                nav: false
            },
            768: {
                items: 8,
                nav: false,
                loop: false
            }
        }
    })
}