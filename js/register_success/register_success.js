/**
 * Created by Administrator on 16-8-8.
 */
$(function() {
	var user_name = "";
	user_name = decodeURIComponent(getCookie("user_name"));
	$(".my_name").html(function() {
		return user_name;
	})
	$(".now-shopping").click(function() {
		window.location.href = "enter.html";
	})
	var time_out = setTimeout(function() {
		window.location.href = "enter.html";
	}, 5000);
})