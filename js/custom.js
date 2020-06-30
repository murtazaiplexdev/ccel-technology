$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        dots: true,
        // autoWidth: true,
        loop: true,
        responsive:{
            1:{
                items: 1,
                margin: 6
            },
            991:{
                items: 2,
                margin: 15
            },
            1200:{
                items: 2,
                margin: 30
            }
        }
    });
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $("header").addClass("header-dark");
    }
    else {
      $("header").removeClass("header-dark");
    }
});

$("header .navbar form a.btn-search").click(function() {
    $("header .navbar form .search-bar").fadeIn();
});

$("header .navbar form .search-bar i.fa").click(function() {
    $("header .navbar form .search-bar").fadeOut();
});
