/**
 * Created by Administrator on 16-7-29.
 */

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