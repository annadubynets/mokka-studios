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

document.getElementById("menu-icon").addEventListener('click',

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

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar.fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
    });
});