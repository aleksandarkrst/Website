var $window = $(window);
$window.scroll(function () {
    var $scroll = $window.scrollTop();
    var $navbar = $(".navbar");
    if ($scroll > 300) {
        $navbar.addClass("after-scroll");
        $(".logo-img").css("width", "40px");
    } else {
        $navbar.removeClass("after-scroll");
        $(".logo-img").css("width", "80px");
    }
});

$("body").append("<button class='btn btn-outline-secondary button-circle button-top' style='border-radius: 50%; box-shadow: 0px 5px  5px rgba(0,0,0,0.2);''><a href='#'><i class='fas fa-angle-up fas-x3' style='color: white'></i></a></button>");

$window.on("scroll", function () {
    var $scroll = $window.scrollTop();
    var backBtn = $("button.button-top");
    if ($(window).scrollTop() > 600) {
        backBtn.addClass("button-top-visible");
    }
    else {
        backBtn.removeClass("button-top-visible");
    }
});

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function myFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}
