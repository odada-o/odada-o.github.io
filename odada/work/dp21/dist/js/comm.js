$(function () {
    // load
    // ("use strict");
    // $("#u_skip").load("./layout/u_skip.html");
    // $("#header").load("./layout/header.html");
    // $("#footer").load("./layout/footer.html");

    //gnb
    var $header = $("#header"),
        $gnb = $header.find("#gnb"),
        $navDepth1 = $header.find(".gnb-wrap"),
        $window = $(window);

    //초기화
    $navDepth1.removeClass("active");

    $gnb.on("focusin mouseenter", function () {
        $(this).parent(".gnb-wrap").addClass("active");
        $header.addClass("sticky");
    });
    $gnb.on("focusout mouseleave", function () {
        if ($window.scrollTop() < 50) {
            $(this).parent(".gnb-wrap").removeClass("active");
            $header.removeClass("sticky");
        } else {
            $(this).parent(".gnb-wrap").removeClass("active");
        }
    });

    // mobile menu
    $(".nav-depth1> li > a").click(function () {
        $(".nav-depth1> li ").removeClass("active");
        $(this).parent("li").addClass("active");
    });

    // header sticky
    $window
        .scroll(function () {
            if ($(this).scrollTop() > 50) {
                $header.addClass("sticky");
            } else {
                $header.removeClass("sticky");
            }
        })
        .trigger("scroll");

    // scrollUp
    $.scrollUp({
        scrollName: "scrollUp", // Element ID
        topDistance: "300", // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: "fade", // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: "페이지 위로 이동", // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // 스크롤시 오브젝트 애니메이션
    $(window).scroll(function () {
        $(".ani-slide").each(function () {
            let pos = $(this).offset().top,
                winscroll = $(window).scrollTop();

            if (winscroll + 700 > pos) {
                $(this).addClass("ani-top");
            }
        });
    });
});
