/**
 * Created by Administrator on 16-8-8.
 */
$(function() {
	//拿取用户名
	var user_name = "";
	if(getCookie("user_name")) {
		user_name = decodeURIComponent(getCookie("user_name"));

		$(".user_name").html(function() {
			return user_name;
		})
	}
	var listGN = 0;
	var $bos = $(".goods-list-show-con");
	$.get("js/goods-list/goods_list.json", function(reg) {
		for(var i = 0; i < reg.shopping.length; i++) {
			$bos.append("<div class='goods'></div>");
			var $box = $(".goods");
			var str = "";
			str = '<img src=' + '"' + reg.shopping[i].url + '"' + '/>';
			$box.eq(i).append(str);
			$box.eq(i).append("<div class='sImg'></div>");
			$box.eq(i).append("<div class='lPrice'>￥103</div>");
			$box.eq(i).append("<div class='gMessage'>梦芭莎</div>");
			$box.eq(i).append("<div class='gdMessage'>梦芭莎时尚简洁分割剪裁款式无袖t恤</div>");
			$box.eq(i).append("<div class='discuss'>评论 12条</div>");
		}
		$(".goods").click(function() {
			listGN = $(this).index();
			var d = new Date();
			d.setDate(d.getDate() + 10);
			setCookie("listGN", listGN);
			window.location.href = "goods-detail.html";

		})

	})

})