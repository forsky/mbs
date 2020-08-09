/**
 * Created by Administrator on 16-7-30.
 */

$(function () {
    var usn = 0;
    var turn;
     turn =setInterval(function(){
        if(usn>=5){
            usn = 0;
        }
        $uli.hide().animate({"opacity":'0.3'},200);
        $uli .eq(usn).show().animate({"opacity":'1'},2500);
        $oli.css({"width":"14px","height":"14px","background":"#fff"});
        $oli.eq(usn).css({"width":"16px","height":"16px","background":"#e50163"});
        usn++;
    },3000)
    //鼠标滑过颜色变化

    var $a = $(".list-left a");
    $a.mouseover(function () {
        $(this).css({"color":"#e50163"})
    })
    $a.mouseout(function () {
        $(this).css({"color":"#000"})
    })
    var $ar = $(".list-right a");
    $ar.mouseover(function () {
        $(this).css({"color":"#e50163"})
    })
    $ar.mouseout(function () {
        $(this).css({"color":"#000"})
    })


    var $uli = $(".banner ul li");
    var $oli = $(".banner ol li");
    $uli.eq(0).show();
    $oli.eq(0).css({"width":"16px","height":"16px","background":"#e50163"});
    $oli.mouseover(function () {
        clearInterval(turn);
        $uli.css({"opacity":1});
        $uli.hide();
        $uli .eq($(this).index()).show();
        $oli.css({"width":"14px","height":"14px","background":"#fff"});
        $(this).css({"width":"16px","height":"16px","background":"#e50163"});

    })
    $oli.mouseout(function(){
         turn =setInterval(function(){
            if(usn>=5){
                usn = 0;
            }
            $uli.hide().animate({"opacity":'0.3'},500);
            $uli .eq(usn).show().animate({"opacity":'1'},2500);
            $oli.css({"width":"14px","height":"14px","background":"#fff"});
            $oli.eq(usn).css({"width":"16px","height":"16px","background":"#e50163"});
            usn++;
        },3000)
    })


    //鼠标移到该页面时背景颜色变化
    $(".women").mousemove(function () {
        $(".women").css({"background":"#dd055f"});
        $("#goodsList").show();
    })
    $(".underwear").mousemove(function () {
        $(".underwear").css({"background":"#dd055f"});
        $("#goodsList").show();
    })
    $(".men").mousemove(function () {
        $(".men").css({"background":"#dd055f"});
        $("#goodsList").show();
    })
    $(".Ame-goods").mousemove(function () {
        $(".Ame-goods").css({"background":"#dd055f"});
        $("#goodsList").show();
    })
    $(".all").mousemove(function () {
        $(".all").css({"background":"#dd055f"});
        $("#goodsList").show();
    })
    $(".beauty").mousemove(function () {
        $(".beauty").css({"background":"#dd055f"});
        $("#goodsList").show();
    })
//
    $("#goodsList").mousemove(function () {
        $(".hot-goods").css({"background":"#dd055f"});
        $("#goodsList").show();
    })


// 鼠标移开北京颜色恢复
    $(".hot-goods").mouseout(function () {
        $(".hot-goods").css({"background":"#080c0b"});
        $("#goodsList").hide();

    })
    $(".women").mouseout(function () {
        $(".women").css({"background":"#080c0b"});
        $("#goodsList").hide();
    })
    $(".underwear").mouseout(function () {
        $(".underwear").css({"background":"#080c0b"});
        $("#goodsList").hide();
    })
    $(".men").mouseout(function () {
        $(".men").css({"background":"#080c0b"});
        $("#goodsList").hide();
    })
    $(".Ame-goods").mouseout(function () {
        $(".Ame-goods").css({"background":"#080c0b"});
        $("#goodsList").hide();
    })
    $(".all").mouseout(function () {
        $(".all").css({"background":"#080c0b"});
        $("#goodsList").hide();
    })
    $(".beauty").mouseout(function () {
        $(".beauty").css({"background":"#080c0b"});
        $("#goodsList").hide();
    })


    $("#goodsList").mouseout(function () {
        $(".hot-goods").css({"background":"#080c0b"});
        $("#goodsList").hide();

    })

//benefit中鼠标滑过
    var $ab = $("#benefit .benefit-con .title a");
    $("#benefit .benefit-con .title a img").eq(0).show();
    $("#benefit .benefit-con .ben-con-right img").eq(0).show();
    $ab.mouseover(function () {
        $("#benefit .benefit-con .title a span").show();
        $("#benefit .benefit-con .title a span").eq($(this).index()).hide();
        $("#benefit .benefit-con .title a img").hide();
        $("#benefit .benefit-con .title a img").eq($(this).index()).show();
        $("#benefit .benefit-con .ben-con-right img").hide();
        $("#benefit .benefit-con .ben-con-right img").eq($(this).index()).show();

    })

    //拿取用户名
    var user_name ="";
    if(getCookie("user_name")){
        user_name = decodeURIComponent(getCookie("user_name"));

        $(".user_name").html(function() {
            return user_name;
        })
        $(".goLogin").text("退出")
    }
    $(".goLogin").click(function(){
        $(".user_name").text("登入")
        clearCookie("user_name");
    })


    $(" .user_name").click(function(){
        window.location.href = "enter.html"
    })

    $(".women").click(function(){
        window.location.href = "goods-list.html"
    })

    $(".goLogin").dblclick(function(){
            window.location.href = "register.html"
    })





    //底部友情链接
    var $f_span = $("#Bottom .friend-link span");
    var friendLink_change = setInterval(function () {
        var str = ["欢迎加盟梦芭莎","亿邦 动力网 名鞋 库杂志 淘金地 折纸 家具 钻石 小鸟分类信息 拍鞋网","服饰百科 服饰搭配","侠侣好玩 折800建材产品 女装搭配网 悦美网 嗨淘化妆品 装修网 光波网 比价网 中国丽人网 电子商务 狗民网"]
        var num = Math.floor(Math.random()*8);
        $f_span.html(str[num]);
    },1000)


    var wid = window.innerWidth;
    wid =805/wid/2;
    wid=0.5-wid;
    wid=wid*100;
    $(".box").css({"left":wid+'100%'});


    //关闭弹窗
    var cb = getCookie("closeBox");
    if(cb==1){
        $("#box").hide();
        $(".box").hide();
    }
    $(".closeBox").click(function(){
        $("#box").hide();
        $(".box").hide();
        setCookie("closeBox",1);
    })


})

