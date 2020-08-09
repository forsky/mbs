/**
 * Created by Administrator on 16-8-5.
 */
$(function () {
    var $price = $(".s-price");//单价
    var $number = $(".s-number");//数量
    var $less = $(" .less");
    var $more = $(".more");
    var $count = $(".s-count");//金额总计
    var $all_count =$(".all-count");
    var $all_number = $(" .all-number");
    var $take = $(" .take");

    var $c_color = $(".p .c-color");
    var $c_size = $(".c-size")
    var $img = $(".g-img");
    var str,
        flag = 0,
        smlx = 0,
        num = 0,
        g_price = 0,
        goCn = 0;
        str = decodeURIComponent(getCookie("user"));
        flag = decodeURIComponent(getCookie("color"));
        smlx = decodeURIComponent(getCookie("size"));
        num = decodeURIComponent(getCookie("number"));
        g_price = decodeURIComponent(getCookie("price"));
        goCn =decodeURIComponent(getCookie("gocar"));
    var srr="";
    if(getCookie("listGN")){
        var listGN = Number(decodeURIComponent(getCookie("listGN")));
        $.get("js/goods-list/goods_list.json", function (reg){
             srr+= '<img src='+'"'+reg.shopping[listGN].url+'"'+'class ='+'"BB"'+'/>';
            $(".g-img").append(srr);
          /*  $c_color.html(function () {
                if (flag == 0) {
                    return "粉色";
                }
                if (flag == 1) {
                    return "黑色";
                }
            })
            $c_size.html(function () {
                if (smlx == 1) {
                    return "S";
                }
                if (smlx == 2) {
                    return "M";
                }
                if (smlx == 3) {
                    return "L";
                }
                if (smlx == 4) {
                    return "LX";
                }
            })*/
        })


    }



        if(str.length!=""){
            $(".gName").show();
            $(".gName").text(str);
        }else {
            $(".gName").hide();
        }
      /* if(flag==0){
            $(".g-img").css({"background-image":'url(srr)'})
        }
        if(flag==1){
            $(".g-img").css({"background-image":'url(srr)'})
        }*/
        $(".c-color").html(function () {
            if (flag == 0) {
                return "粉色";
            }
            if (flag == 1) {
                return "黑色";
            }
        })
        $(".c-size").html(function () {
            if (smlx == 1) {
                return "S";
            }
            if (smlx == 2) {
                return "M";
            }
            if (smlx == 3) {
                return "L";
            }
            if (smlx == 4) {
                return "LX";
            }
        })
        $number.html(function () {
            return  Number(num);
        })

    $price.html(function () {
        return Number(g_price);
    })

    $count.html(function (){
        return Number($price.text())*Number($number.text());
    })

    //增加购买数量 和总价
    $more.click(function () {
        $number.html(function () {
            return Number($number.text())+1;
        });
        $count.html(function () {
            return Number($price.text())*Number($number.text());
        })
        if($take.is(':checked')==true){
            $all_number.html(function () {
                return $number.text();
            })
            $all_count.html(function () {
                return Number($count.text());
            })
        }
    })
    //减少购买数量 和总价
    $less.click(function () {
        if(Number($number.text())>0){
            $number.html(function () {
                return Number($number.text())-1;
            });
        }
        $count.html(function () {
            return Number($price.text())*Number($number.text());
        })
        if($take.is(':checked')==true){
            $all_number.html(function () {
                return $number.text();
            })
            $all_count.html(function () {
                return Number($count.text());
            })
        }
    })
    //购物车结算
    $take.click(function () {
        if($take.is(':checked')){
            $all_count.html(function () {
                return Number($count.text());
            })
            $all_number.html(function () {
                return $number.text();
            })
        }else{
            $all_count.html(function () {
                return 0;
            })
            $all_number.html(function () {
                return 0;
            })
        }
    })

    //移除
    var $remove = $(".s-remove");
    $remove.click(function () {
        var sk = $(this).index();
        sk-=1;
       $(".goods-list").eq(sk).remove();
        $all_count.html(function () {
            return 0;
        })
        $all_number.html(function () {
            return 0;
        })
        clearCookie("")
    })
    for(var i=1;i<goCn;i++){
        $(".goods-con").append("<div class='goods-list'></div>");
        $(".goods-list").eq(i).append("<div class='goods-message'></div>");
        $(".goods-message").eq(i).append(" <input type='checkbox' class='take'/>")
        $(".take").eq(i).after("  <div class='g-img'></div>")
        $(".g-img").eq(i).after(" <div class='concrete'></div>")
        $(".concrete").eq(i).append(" <p class='gName'></p>")
        $(".concrete").eq(i).append(" <p class='p'></p>")
        $(".p").eq(i).after("  <span>品牌:</span>"+"<span>梦芭莎</span>"+" <span>尺寸:</span>"+"<span class='c-size'></span> "+"<span>颜色:</span>"+"<span class='c-color'></span>")
        $(".goods-list").eq(i).append("<div class='goods-price'>"+" <span >￥</span>"+"<span class='s-price'></span>"+" </div>"+"<div class='goods-number'>"+"<input type='button' value='-'class='less'/>"+"<span class='s-number'>1</span>"+"<input class='more' type='button' value='\+'>"+"</div>"+"<div class='goods-count'>"+"<span>￥</span>"+"<span class='s-count'></span>"+"</div>"+"<div class='goods-handle'>"+"<input type='button' value='修改'/>"+"<input type='button' value='移除' class='s-remove'/>"+"</div>");
    }


    //结算
    $(".To-pay").click(function () {
        window.location.href = "shopping2.html";
    })

})
