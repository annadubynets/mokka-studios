if ($('.technologies .owl-carousel').length > 0) {
    $('.technologies .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: false,
        dotsContainer: '.tech-carousel-dots',
        responsive: {
            0: {
                items: 2,
                stagePadding: 40,
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

if ($('.reviews .owl-carousel').length > 0) {
    $('.reviews .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        autoplay: false,
        dots: false,
        navContainer: '.reviews .tech-carousel-nav',
        responsive: {
            0: {
                items: 1,
                stagePadding: 70,
                nav: true
            },
            768: {
                items: 2,
                stagePadding: 70,
                nav: true,
                loop: false
            },
            992: {
                items: 2,
                stagePadding: 120,
                nav: true,
                loop: false,
            }
        }
    })
}

if ($('.product .owl-carousel').length > 0) {
    $('.product .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        autoplay: false,
        dots: false,
        navContainer: '.product .tech-carousel-nav',
        responsive: {
            0: {
                items: 1,
                stagePadding: 50,
                nav: true
            },
            767: {
                items: 2,
                stagePadding: 70,
                nav: true,
                loop: false
            },
            1400: {
                items: 3,
                stagePadding: 120,
                nav: true,
                loop: false,
            }
        }
    })
}

if ($('.team .owl-carousel').length > 0) {
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 60,
        responsiveClass: true,
        autoplay: false,
        dots: false,
        navContainer: '.team .tech-carousel-nav',
        responsive: {
            0: {
                items: 1,
                stagePadding: 90,
                nav: false
            },
            768: {
                items: 3,
                stagePadding: 90,
                nav: true,
                loop: false
            },
            992: {
                items: 5,
                stagePadding: 90,
                nav: true,
                loop: false
            }
        }
    })
}

$(function() {
    const menuIcon = document.getElementById("menu-icon");
    if (!menuIcon) return;
    menuIcon.addEventListener('click',
        function() {
            var allClasses = this.classList;
            var l = allClasses.length;
            var className = "btn-menu-active";

            while (l--) {
                if (allClasses[l] == className) {
                    allClasses.remove(allClasses[l]);
                    // hide menu 
                    showMenu(false);
                    return;
                }
                allClasses.add(className);
                // show menu
                showMenu(true);
            }
        });

    function showMenu(modeBool) {

        var modeStr = function(m) {
            return m ? "show" : "hide";
        }

        var menuContainer = document.getElementById("menu-container");
        menuContainer.classList.remove(modeStr(!modeBool));
        menuContainer.classList.add(modeStr(modeBool));
    }
});



$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar.fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
    });
});

/**
 * File picker
 */

$(function() {
    $('#attachment-file-input').on('change', function(e) {
        $('.attachment-file-name').text(this.files[0].name)
    });

    $('.chose-attachment-file-btn').on('click', function(e) {
        e.preventDefault();
        $("#attachment-file-input").click();
    })
})