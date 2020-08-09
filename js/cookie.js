/**
 * Created by Administrator on 2016/7/7.
 */
function setCookie(name, value, expires, path, domain, secure) {
	var sum = encodeURIComponent(name) + "=" + encodeURIComponent(value); //这个必须有
	if(expires instanceof Date) {
		sum += ";expires=" + expires;
	}
	if(path) {
		sum += ";path=" + path;
	}
	if(domain) {
		sum += ";domain=" + domain;
	}
	if(secure) {
		sum += ";secure";
	}
	//    alert(sum);
	document.cookie = sum;

}
//  "user=xiaoming;   pwd=123456"//  想 给方法一个 user，就能返回给我 user对应的值

function getCookie(name) {
	//   var str = decodeURIComponent()
	//   alert(document.cookie);
	var reg = /;\s*/ig; //去 ;空格的正则
	var arr = document.cookie.split(reg); //  ["user=xiaoming","pwd=123456"];

	for(var i = 0; i <= arr.length - 1; i++) {
		var arr2 = arr[i].split("="); //["user","xiaoming"]  ["pwd","123456"];
		if(arr2[0] == name) { //如果第二次拆分出来的数组，他的第一个元素等于我的"user"的话，就说明找到那个user了
			return arr2[1]; //所以只要arr2[0]匹配了，就返回arr2[1];
		}
	}
}

function clearCookie(name) {
	setCookie(name, "");
}