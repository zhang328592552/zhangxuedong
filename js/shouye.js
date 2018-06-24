
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
    var bannercenter_ul = $(".banner-center ul");
    var timer = null;
    var bannerspan =bannercenter_ul.next("div").children();
    for(var i=0; i<bannerspan.length; i++) {
        //bannerspan[i].bannerspan_index = i;
        //
        //$(bannerspan).on("mouseenter", function () {
        //    $(this).css("color", "#00f").siblings("span").css("color", "#eee");
        //    bannerspan_key = this.bannerspan_index;
        //    $(bannercenter_ul).stop(true, false).animate({"left": -this.bannerspan_index * bannercenter_ul.children("li")[0].offsetWidth}, 1000);
        //});
        bannerspan[i].index = i;
        bannerspan[i].onclick = function () {
            for(var j=0; j<bannerspan.length; j++) {
                bannerspan[j].className = "";
            }
            this.className = "current";
            key = index = this.index;
            animate1(bannercenter_ul[0],-this.index*bannercenter_ul.children("li")[0].offsetWidth);
        }
    }
        var index1 = 0;
        var bannerspan_key = 0;
        timer = setInterval(aotoPlay,5000);
        function aotoPlay(){
            index1++;
            bannerspan_key++;
            if(index1>5){
                index1 = 1;
                bannercenter_ul[0].style.left = 0 + "px";
            }
            animate1( bannercenter_ul[0],-index1*bannercenter_ul.children("li")[0].offsetWidth);
            bannerspan_key = bannerspan_key > bannerspan.length-1? 0:bannerspan_key;
            for(var i=0;i<bannerspan.length;i++){
                bannerspan[i].className = "";
            }
            bannerspan[bannerspan_key].className = "current";
        }

    function animate1(obj,target) {
        clearInterval(obj.timer);

        var speed = obj.offsetLeft < target ? 15 : -15;

        obj.timer = setInterval(function () {
            var result = target - obj.offsetLeft;

            obj.style.left = obj.offsetLeft + speed + "px";
            if(Math.abs(result) <= 10 ){
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            }

        },10);
    }
        //$(bannerspan).on("mouseleave", function () {
        //    clearInterval(timer);
        //    timer = setInterval(function () {
        //        $(bannercenter_ul).stop(true, false).animate({"left": $(bannercenter_ul)[0].offsetLeft - $(bannercenter_ul).children("li")[0].offsetWidth}, 1000);
        //        $(bannerspan.eq(bannerspan_key)).css("color", "#eee");
        //        $(bannerspan.eq(bannerspan_key)).next().css("color", "#00f");
        //    }, 2000);
        //
        //});
        //$(bannercenter_ul.parent(".banner-center")).on("mouseout", function () {
        //
        //    $(this.children("div").children("span").eq(bannerspan_key)).stop(true,false).animate({"left":this.children("div").children("span").eq(bannerspan_key).offsetLeft-bannercenter_ul.children("li")[0].offsetWidth},2000);
        //});
        //bannerspan[i].onmouseover=function () {
        //    for(var j=0; j<bannerspan.length; j++){
        //        bannerspan[j].css("color","#fff");
        //    }
        //        bannerspan[this.index].css("color","#00f");
        //
        //};



        //var width = bannerli.eq(0).css("width");


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

    //官方微信点击出现
