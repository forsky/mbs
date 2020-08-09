/**
 * Created by Administrator on 16-8-8.
 */
$(function() {
	if(getCookie("user_name")) {
		var user_name = "",
			psd = "";
		var pd1, pd2;
		user_name = decodeURIComponent(getCookie("user_name"));
		psd = decodeURIComponent(getCookie("user_psd"));
	}
	//判断邮箱(用户名)是否正确
	var $name = $(".N-enter .name .N-name");
	$name.blur(function() {
		var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g;
		if($name.val().match(reg)) {
			$(".success ").eq(0).show();
			$(".N-enter .name .error-name").hide();
			$(".N-enter .name .error-name-f").hide();
			if(user_name == $(".N-name").val()) {
				pd1 = true;
			} else {
				pd1 = false;
			}
		} else if($name.val() == "") {
			$(".success ").eq(0).hide();
			$(".N-enter .name .error-name").show();
			$(".N-enter .name .error-name-f").hide();
		} else {
			$(".N-enter .name .error-name-f").show();
			$(".N-enter .name .error-name").hide();
			$(".success ").eq(0).hide();
		}

	})

	//判断用户密码是否可用
	$(".N-psd").blur(function() {
		$(".check").show();

		if(psd == $(".N-psd").val()) {
			pd2 = true;
		} else {
			pd2 = false;
		}
		if($(".N-psd").val() == "") {
			$(".success").eq(1).hide();
			$(".N-enter .psd .error-psd").show();
		} else {
			$(".N-enter .psd .error-psd").hide();
			$(".success").eq(1).show();
		}
	})

	$(".Now-enter").click(function() {
		if(pd1 && pd2) {
			window.location.href = "index.html";
		} else {
			alert("用户名或密码错误")
		}
	})

	//产生随机图片，图片方向随机；
	$(function() {
		//先产生一次随机方向的4张图片
		for(var i = 0; i < 4; i++) {
			var j = Math.floor(Math.random() * 15 + 1);
			var s = "images/register/ver-code" + j + ".png";
			$(".ver-code span").eq(i).append("<img class='spin' alt='' title='' />");
			$(".ver-code span img").eq(i).attr("src", s);
			var str = [90, 180, 270, 360];
			var n = Math.floor(Math.random() * 4);
			var z = str[n];
			$(".ver-code span img").eq(i).css({
				"transform": 'rotate(' + z + 'deg)'
			});
		}
		$(".B-loginRight").click(function() {
			$(".ver-code span").empty(); //清空已有的随机图片
			var du = 0;
			for(var i = 0; i < 4; i++) {
				var j = Math.floor(Math.random() * 15 + 1);
				var s = "images/register/ver-code" + j + ".png";

				//随机产生的图片的位置
				var str = [90, 180, 270, 360];
				var n = Math.floor(Math.random() * 4);
				var z = str[n];

				$(".ver-code span").eq(i).append("<img class='spin' alt='' title='' />");
				$(".ver-code span img").eq(i).attr("src", s);
				$(".ver-code span img").eq(i).css({
					"transform": 'rotate(' + z + 'deg)'
				});

				//   $(".ver-code span img").eq(i).style.transform = 'rotate('+z+'deg)';
			}
			//点击可以切换图片方向j
			var current = 0;
			$(".ver-code span img").click(function() {
				current = (current + 90) % 360;
				$(this).css({
					"transform": 'rotate(' + current + 'deg)'
				});
			})
		})
		//点击可以切换图片方向j
		var current = 0;
		$(".ver-code span img").click(function() {
			current = (current + 90) % 360;
			$(this).css({
				"transform": 'rotate(' + current + 'deg)'
			});
		})
	})

})