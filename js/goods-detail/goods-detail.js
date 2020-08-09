/**
 * Created by Administrator on 16-8-4.
 */
$(function() {
	var listGN = Number(decodeURIComponent(getCookie("listGN")));
	if(getCookie("listGN")) {
		var str = '',
			tsr = '';
		$.get("js/goods-list/goods_list.json", function(reg) {
			str = '<img src=' + '"' + reg.shopping[listGN].url + '"' + '/>';
			tsr = '<img src=' + '"' + reg.shopping[listGN].url + '"';
			tsr += '  class=' + '"' + 'B-img' + '"' + '/>';
			$(".goods-pic").prepend(str);
			$(".big-img ").prepend(tsr);

			//左侧切换图片
			var $p = $("#goods-message .goods-message-con .goods-left .goods-change p");
			var $img = $(".goods-pic img");

			$img.eq(0).show();
			$p.eq(0).css({
				"border": "1px solid #000"
			});
			$p.mouseover(function() {
				$p.css({
					"border": "1px solid #fff"
				});
				//    $p.eq($(this).index()-1).css({"border":"1px solid #000"});
				$(this).css({
					"border": "1px solid #000"
				});
				$img.hide();
				$img.eq($(this).index() - 1).show();
			})

			//  放大图片
			var $s = $("#goods-message .goods-message-con .goods-left .goods-pic .s-img");
			var $pic = $(" .goods-pic");
			var $B = $(" .B-img");
			var $b = $(" .big-img");
			$pic.mousemove(function(evt) {
				var e = evt || window.event;
				var mouseX = e.offsetX;
				var mouseY = e.offsetY;
				var sX = mouseX - 35;
				var sY = mouseY - 47;

				var bX = mouseX / 350 * 1500 - 175;
				var bY = mouseY / 474 * 2027 - 237;
				if(sX <= 0 || sX >= 280) {
					bX = e.offsetX / 350 * 1500;
				}
				if(sY <= 0 || sY >= 379) {
					bY = e.offsetY / 474 * 2027;
				}
				if(mouseX <= 35) {
					sX = 0;
				}
				if(mouseX >= 315) {
					sX = 280;
				}
				if(mouseY <= 47) {
					sY = 0;
				}
				if(mouseY >= 427) {
					sY = 379;
				}

				//   $s.show().css({"left":sX,"top":sY});
				$b.show();
				$B.css({
					"left": -bX,
					"top": -bY
				});

			})
			$pic.mouseout(function() {
				$s.hide();
				$b.hide();
			})
		})
	} else {
		var $p = $("#goods-message .goods-message-con .goods-left .goods-change p");
		var $img = $(".goods-pic img");

		$img.eq(0).show();
		$p.eq(0).css({
			"border": "1px solid #000"
		});
		$p.mouseover(function() {
			$p.css({
				"border": "1px solid #fff"
			});
			//    $p.eq($(this).index()-1).css({"border":"1px solid #000"});
			$(this).css({
				"border": "1px solid #000"
			});
			$img.hide();
			$img.eq($(this).index() - 1).show();
		})

		//  放大图片
		var $s = $("#goods-message .goods-message-con .goods-left .goods-pic .s-img");
		var $pic = $(" .goods-pic");
		var $B = $(" .B-img");
		var $b = $(" .big-img");
		$pic.mousemove(function(evt) {
			var e = evt || window.event;
			var mouseX = e.offsetX;
			var mouseY = e.offsetY;
			var sX = mouseX - 35;
			var sY = mouseY - 47;

			var bX = mouseX / 350 * 1500 - 175;
			var bY = mouseY / 474 * 2027 - 237;
			if(sX <= 0 || sX >= 280) {
				bX = e.offsetX / 350 * 1500;
			}
			if(sY <= 0 || sY >= 379) {
				bY = e.offsetY / 474 * 2027;
			}
			if(mouseX <= 35) {
				sX = 0;
			}
			if(mouseX >= 315) {
				sX = 280;
			}
			if(mouseY <= 47) {
				sY = 0;
			}
			if(mouseY >= 427) {
				sY = 379;
			}

			//   $s.show().css({"left":sX,"top":sY});
			$b.show();
			$B.css({
				"left": -bX,
				"top": -bY
			});

		})
		$pic.mouseout(function() {
			$s.hide();
			$b.hide();
		})
	}

	//选择不同的颜色的衣服
	var $pink = $(".color .pink");
	var $black = $(".color .black");
	$pink.mouseover(function() {
		$pink.css({
			"color": "#e60064"
		})
	})
	$black.mouseover(function() {
		$black.css({
			"color": "#e60064"
		})
	})
	$pink.mouseout(function() {
		$pink.css({
			"color": "#000"
		})
	})
	$black.mouseout(function() {
		$black.css({
			"color": "#000"
		})
	})
	var flag = 0;
	$pink.click(function() {
		$pink.css({
			"border": "2px solid #e60064"
		});
		$black.css({
			"border": "2px solid #ccccca"
		});
		$img.hide();
		$img.eq(0).show();
		$p.css({
			"border": "1px solid #fff"
		});
		$p.eq(0).css({
			"border": "1px solid #000"
		});
		flag = 0;
	})
	$(".black").click(function() {
		$pink.css({
			"border": "2px solid #ccccca"
		});
		$black.css({
			"border": "2px solid #e60064"
		});
		$img.hide();
		$img.eq(1).show();
		$p.css({
			"border": "1px solid #fff"
		});
		$p.eq(1).css({
			"border": "1px solid #000"
		});
		flag = 1;
	})

	//选择衣服尺码
	var $sp = $(" .size p");
	var smlx = 0;
	$sp.click(function() {
		$sp.css({
			"border": "1px solid #cccccc"
		});
		$(this).css({
			"border": "1px solid #e50065"
		});
		smlx = $(this).index();
	})
	$sp.mouseover(function() {
		$(this).css({
			"color": "#e50065"
		});
	})
	$sp.mouseout(function() {
		$(this).css({
			"color": "#000"
		});
	})

	//选择衣服数量
	var $p_top = $(" .pr .n-top")
	var $p_bottom = $(".pr .n-bottom")
	var $vp = $(" .number p");
	var num = 1;
	$p_top.click(function() {
		$vp.html(function() {
			return Number($vp.text()) + 1;
		});
		num = $vp.text();
	})
	$p_bottom.click(function() {
		if(Number($vp.text()) > 1) {
			$vp.html(function() {
				return Number($vp.text()) - 1;
			});
			num = $vp.text();
		}
	})

	var $go = $("#goods-message .goods-message-con .goods-center .buy .input-L");
	$go.click(function() {
		window.location.href = "shopping.html";
	})

	var go_car = 0;
	$(".input-R").click(function() {
		go_car++;
		$.post("js/js.json", {
			'num': [{
				'url': 'go_car'
			}]
		})
		var d = new Date();
		d.setDate(d.getDate() + 10);
		setCookie("gocar", go_car);
	})

	//设置cookie
	var pc = $("#goods-message .goods-message-con .goods-center .g-news .news-left .pc").text();
	var $name_h = $("#goods-message .goods-message-con .goods-center h2");
	$go.click(function() {
		var d = new Date();
		d.setDate(d.getDate() + 10);
		setCookie("user", $name_h.text());
		setCookie("color", flag);
		setCookie("size", smlx);
		setCookie("number", num);
		setCookie("price", pc);

	})
	$("h1").click(function() {
		window.location.href = "index.html"
	})

})