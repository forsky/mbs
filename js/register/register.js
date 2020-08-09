/**
 * Created by Administrator on 2016/7/29.
 */
$(function() {
	var decide1, decide2, decide3, decide4, decide5;
	//判断邮箱是否正确
	$("#N-email").blur(function() {
		var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g;
		if($("#N-email").val().match(reg)) {
			$(".success").eq(0).show();
			$("#Error-email").hide();
			decide1 = true;

		} else {
			$("#Error-email").show();
			$(".success").eq(0).hide();
			decide1 = false;
		}
	})
	//判断手机号码是否正确
	$("#N-phone").blur(function() {
		var reg = /^1+[3,5,8]+[0-9]{9}$/g;
		if($("#N-phone").val().match(reg)) {
			$(".success").eq(1).show();
			$("#Error-phone").hide();
			decide2 = true;

		} else {
			$("#Error-phone").show();
			$(".success").eq(1).hide();
			decide2 = false;
		}
	})
	//判断用户密码是否可用
	$("#N-psd").blur(function() {
		var reg = /^[0-9a-zA-Z]{8,20}$/g;
		if($("#N-psd").val().match(reg)) {
			$(".success").eq(2).show();
			$("#Error-psd").hide();
			decide3 = true;

		} else {
			$(".point img").hide()
			$("#Error-psd").show();
			$(".success").eq(2).hide();
			decide3 = false;
		}
	})
	//判断用户密码强度
	//高：/\w{15,}/ig;
	//中  /\w{8,14}/ig;
	//低 /[0-9]{8,14}/ig;/[a-z]{8,14}/ig;
	var reg = /^[a-zA-Z0-9]{15,}$/ig;
	var reg1 = /^[a-zA-Z0-9]{8,14}$/ig;
	var reg2 = /^[0-9]{8,14}$/ig;
	var reg3 = /^[a-z]{8,14}$/ig;
	$("#N-psd").keyup(function() {
		$(".point img").hide()
		if($("#N-psd").val().match(reg)) {
			$(".point img").hide()
			$(".psd-height").eq(0).show();
		}
		if($("#N-psd").val().match(reg1)) {
			$(".point img").hide()
			$(".psd-center").eq(0).show();
		}
		if($("#N-psd").val().match(reg2) || $("#N-psd").val().match(reg3)) {
			$(".point img").hide()
			$(".psd-low").eq(0).show();
		}
		if($("#N-psd").val().length > 20) {
			$(".point img").hide();
			$("#Error-psd").show();
		}
	})

	//判断密码是否输入正确
	$("#N-psdAgain").blur(function() {
		if(($("#N-psd").val() == $("#N-psdAgain").val()) && $("#N-psdAgain").val() != "") {
			$(".success").eq(3).show();
			$("#Error-psdAgain").hide();
			decide4 = true;

		} else {
			$("#Error-psdAgain").show();
			$(".success").eq(3).hide();
			decide4 = false;
		}
		/*   if($("#N-psdAgain").val().length==0){ //或$("#N-psdAgain").val()==""
		       $("#Error-psdAgain").show();
		       $(".success").eq(3).hide();
		   }*/
	})
	$(".agree").click(function() {
		if($(".agree").is(":checked") == true) {
			decide5 = true;

		} else {
			decide5 = false;
		}

	})

	$(".Now-enter").click(function() {
		if(decide1 && decide2 && decide3 && decide4 && decide5) {
			var d = new Date();
			d.setDate(d.getDate() + 10);
			setCookie("user_name", $("#N-email").val());
			setCookie("user_phone", $("#N-phone").val());
			setCookie("user_psd", $("#N-psd").val());

			window.location.href = "register_success.html";
		}
	})

})