//Navbar transparente a Navbar color

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 720) {
            $('#navscroll').addClass("gris");
        } else {
            $('#navscroll').removeClass("gris");
            $('#navscroll').addClass("azul");
        }
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 720) {
            $('#navscroll').addClass("azul");
        } else {
            $('#navscroll').removeClass("azul");
            $('#navscroll').addClass("gris");
        }
    });
});



