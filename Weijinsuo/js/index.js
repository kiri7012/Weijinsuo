/**
 * Created by Gary on 2017/6/18.
 */
$(function () {
   var items = $(".carousel-inner .item");
   $(window).on("resize",function () {
        var width = $(window).width();
        if(width >= 768){
            $(items).each(function (index,val) {
                var item = $(this);
                // console.log(item);
                var imgSrc = item.data('largeImage');
                // console.log(imgSrc);
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));

            })
        }else {
            $(items).each(function (index,val) {
                var item = $(this);
                var imgSrc = item.data("smallImage");
                item.html($('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>'));
            })
        }
   }).trigger("resize");
   var startX,endX;
   var banner = $(".carousel-inner")[0];
//   获取当前轮播图
    var carousel = $(".carousel");
    banner.addEventListener("touchstart",function (e) {
        // console.log(e);
        startX = e.targetTouches[0].clientX;
        console.log(startX);
    });
    banner.addEventListener("touchend",function (e) {
        // console.log(e);
        endX = e.changedTouches[0].clientX;
        // console.log(endX);
        var moveX = endX - startX;
        if(moveX > 0){
            carousel.carousel('prev');
        }else {
            carousel.carousel('next');
        }
    });
//    计算产品导航项的原始宽度
    var ul = $("#productsNav");
    var lis = ul.find("li");
    var total = 0;
    lis.each(function (index,val) {
       total += $(val).innerWidth();

});
    console.log(total);
    ul.width(total);
    /*使用插件实现导航条的滑动操作*/
    var myScroll = new IScroll('.tabs_parents',{
        //设置水平滑动，不允许垂直滑动
    scrollX: true, scrollY: false
});
    //北和宝提示
    $('[data-toggle="tooltip"]').tooltip();
});
