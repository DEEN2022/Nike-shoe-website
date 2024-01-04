$(document).ready(function () {

    $(".one").on('click', function () {
        $("body").css({color: '#000', background: "#fff"});
        $(".product-img").attr("src", "./assets/nike1/1.png");

        $(".logo-img img").attr("src", "./assets/logo2.png");

        $(".btn").css({color: "#fff", background: "#000"});

        $(".variant").removeClass("active");

        $(this).addClass("active");

        $(".images").html("");

        for (var i = 1; i <= 6;i++){
            $(".images").append(`<img src='./assets/nike1/${i}.png' />`);
        }
    });

    $(".two").on('click', function () {
        $("body").css({color: '#000', background: "coral"});
        $(".product-img").attr("src", "./assets/nike2/1.png");

        $(".logo-img img").attr("src", "./assets/logo2.png");

        $(".btn").css({color: "#fff", background: "#000"});

        $(".variant").removeClass("active");

        $(this).addClass("active");

        $(".images").html("");

        for (var i = 1; i <= 6; i++){
            $(".images").append(`<img src='./assets/nike2/${i}.png'/>`);
        }
    });

    $(".three").on('click', function () {
        $("body").css({color: '#fff', background: "#000"});
        $(".product-img").attr("src", "./assets/nike3/6.png");

        $(".logo-img img").attr("src", "./assets/logo1.png");

        $(".btn").css({color: "#000", background: "#fff"});

        $(".variant").removeClass("active");

        $(this).addClass("active");

        $(".images").html("");

        for (var i = 1; i <= 6;i++){
            $(".images").append(`<img src='./assets/nike3/${i}.png' />`);
        }
    });

});