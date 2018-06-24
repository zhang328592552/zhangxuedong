//固定导航栏
$(window).ready(function() {
    //var H = $(".top").height();
    var H = $(".header").offset().top;
    $(window).scroll(function() {
        var docSccrollTop = $(document).scrollTop();
        if (docSccrollTop > H) {
            $(".header").css({
                "position": "fixed",
                "top": 0
            });
            // 此时 nav的位置固定，如果不设置 main部分的margin-top的话，将有一部分内容被挡住 nav的高度
            $(".box").css("margin-top", $(".header").height());
        } else {
            $(".header").css({
                "position": "static"
            }); /*静态定位*/
            $(".box").css("margin-top", 0);
        }
    });
});
