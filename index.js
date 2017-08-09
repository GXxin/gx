  /**
 * Created by Administrator on 2017/05/06.
 */
//var index = 0;
var semp = 0;//代表下标
var index = 0;
var s = 0;
$(function(){
    //顶部的图片，鼠标移上事件
    $("#ost-r").mouseenter(function(e){
        e.stopPropagation();    //阻止事件冒泡
        $("#top-bg").css("display","block")
    })
    $("#top-bg").mouseleave(function(e){
        e.stopPropagation();    //阻止事件冒泡
        $(this).css("display","none")
    })
    //中间导航栏鼠标移上
    //$(".cd").each(function(){
        $(".cd").mouseenter(function(){
            $(this).find(".xian").slideDown(500)
            //$(".xian").css("display","block")
        }).mouseleave(function(){
            $(this).find(".xian").slideUp(500)
        })
    //})


    //微信，QQ小图标滑上事件
    $("#s1").mouseenter(function(e){
        e.stopPropagation();    //阻止事件冒泡
        $(".wx").css("display","block")
    }).mouseleave(function(e){
        e.stopPropagation();    //阻止事件冒泡
        $(".wx").css("display","none")
    })
    $("#s2").mouseenter(function(e){
        e.stopPropagation();    //阻止事件冒泡
        $(".sys").css("display","block")
    }).mouseleave(function(e){
        e.stopPropagation();    //阻止事件冒泡
        $(".sys").css("display","none")
    })
    //飞翔轮转动图
    //$("body").ready(function(){
    //    fei()
    //})
    //$("body").mousemove(function(e){
    //    e.preventDefault()
    //    yuandian()
    //    dong()
    //})

    //小圆点的页面加载事件
    //$(".dian").toggle(".dian-cal")
    $(".dian li").each(function(){

        $(this).click(function(){
            $(".dian li").removeClass("hover")
            $(this).addClass("hover")
            semp = $(this).val()-1;
            $(".banner").animate({
                left: -420 * semp + "px"
            })
        })
    })

    //三张图最新信息部分
    $(".three-pic").find("img").mouseenter(function(){
        $(this).css("opacity","1")
    }).mouseleave(function(){
        $(this).css("opacity","0.7")
    })

    //$(".table-ge").find("div").mouseenter(function(){
    //    $(this).addClass("css-bg")
    //}).mouseleave(function(){
    //    $(this).removeClass("css-bg")
    //
    //})


    //游戏特色部分


        $(".tese").mouseenter(function(){//鼠标划入大盒子
            $(".test-block").show()
        })
        $(".tese").mouseleave(function(){//鼠标离开
            $(".test-block").hide()
        })
        $("#b-r").click(function(){
            pic()
        })
        $("#b-l").click(function(){
            picl()
        })

})
//飞翔轮转动函数
//function fei(){
//    index++;
//    if(index>5){
//        index=0;
//        $(".kbn_lxj_tu").css("left","0")
//    }
//    $(".kbn_lxj_tu").animate({
//        left:-2418*index + "px"
//    },500)
//}
function dong(){
    semp++;
    //alert(semp)
    if(semp>5){
        semp=1;
        $(".banner").css("left","0")
    }
    $(".banner").animate({
        left:-420*semp + "px"
    },2000);
}
setInterval(function(){
    dong()
    yuandian()
},3000) //页面加载事件要比自动轮播的时间长，此时的加载时间为3秒，分为图片自动换一张为2秒再等一秒之后让他再次动

function yuandian(){
    $(".dian li").removeClass("hover");
    if(semp==5){
        $(".dian li:eq(0)").addClass("hover");
    }
        $(".dian li:eq("+semp+")").addClass("hover")

}


//游戏特色部分
function pic(){
    s++;
    if(s>5){
        s =1;
        $(".test-box").css("left","0");
    }
    $(".test-box").animate({
        left: -1260*s + "px"
    },1000);


}
function picl(){
    s--;
    if(s<0){
        s = 4;
        $(".test-box").css("left","-6300px");
    }
    $(".test-box").animate({
        left: -1260*s + "px"
    },1000);

}
