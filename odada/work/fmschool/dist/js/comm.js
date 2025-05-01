$(function () {
    // slideani
    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

    // tab
    $(".tab-wrap").each(function () {
        let $tabWrap = $(this);

        $(".tab-btn > button").click(function () {
            let $this = $(this),
                index = $this.index();

            $this.addClass("active");
            $this.siblings("button.active").removeClass("active");

            let $outer = $this.closest(".tab-wrap"),
                $current = $outer.find(" > .tab-cont > .tab-lst.active"),
                $post = $outer.find(" > .tab-cont > .tab-lst").eq(index),
                videoSrc = $("#playerid").attr("src");

            $current.removeClass("active");
            $current.find("iframe").attr("src", "");
            $post.addClass("active");
            $post.find("iframe").attr("src", videoSrc);
            // 위의 코드는 탭메뉴 코드입니다.

            $(".slider").slick("setPosition");
            // 탭 페이지 안에서 slick 사용시 – slick이 첫페이지에 있지 않으면 slick의 첫번째 이미지가 보이지 않고 2번째 부터 도는것을 확인 할 수 있다. 해당 문제는 탭이 active가 된 후 그 페이지에 slick이 있다면 = slick의 위치를 수동으로 새로 고쳐줘야 한다.
        });
    });

    // Q&A
    $(".lst-qna").each(function () {
        let $this = $(this),
            $question = $this.find(".question"),
            $answer = $this.find(".answer");

        $question.click(function () {
            if ($(this).parent().hasClass("on") === true) {
                $(this).parent().removeClass("on");
            } else {
                $this.find("li").removeClass("on");
                $(this).parent().addClass("on");
            }
        });
    });
});
