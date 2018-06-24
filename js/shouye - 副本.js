
//固定导航栏
        /*$(function() {});*/
    $(window).load(function() {
        //var H = $(".top").height();
        var H = $(".top-banner").offset().top;
        $(window).scroll(function() {
            var docSccrollTop = $(document).scrollTop();
            if (docSccrollTop > H) {
                $(".top-banner").css({
                    "position": "fixed",
                    "top": 0
                });
                // 此时 nav的位置固定，如果不设置 main部分的margin-top的话，将有一部分内容被挡住 nav的高度
                $(".banner").css("margin-top", $(".top-banner").height());
            } else {
                $(".top-banner").css({
                    "position": "static"
                }); /*静态定位*/
                $(".banner").css("margin-top", 0);
            }
        });
    });

$(function() {
    $(".submenu-bottom").children("div").mouseenter(function(){
        $(this).children("p").css("display","block");
    });
    $(".submenu-bottom").children("div").mouseleave(function(){
        $(this).children("p").css("display","none");
    });
});
   //banner图片轮播图
$(function () {
    var bannercenter = $(".banner-center");
    var timer = null;



    timer = setInterval(function() {
        clearInterval(timer);
        var width = bannerli.eq(0).css("width");


    },1000);
})

//设计师之突出显示
    var stylisttop = $(".stylist .stylist-top");

    $(stylisttop).find("img").css("opacity",0.4);
    $(stylisttop).find("img").eq(2).css("opacity",1);
    var stylistTopOpacity = null;
    $(stylisttop).find("img").mouseenter(function () {
        stylistTopOpacity = $(this).css("opacity");
        $(this).css("opacity",1);
        $(this).parent("div").siblings("div").children("img").css("opacity",0.4);
    });
    $(stylisttop).find("img").mouseleave(function () {
        $(this).css("opacity",stylistTopOpacity);
        $(stylisttop).find("img").eq(2).css("opacity",1);
    });
