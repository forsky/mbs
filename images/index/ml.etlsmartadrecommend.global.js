var MLEtlSmartAdRecommendGlobal = {
    BindSmartAdRecommend: function (txtid) {
        if ($("#" + txtid)) {
            var obj = new MLEtlSmartAdRecommendGlobal.ETLSmartAdRecommendEntity();
            $.each(obj, function (name, value) {
                if ($("#" + txtid).attr(name)) {
                    obj[name] = $("#" + txtid).attr(name);
                }
            });
            obj.curl = encodeURIComponent(document.location.href);
            MLEtlSmartAdRecommendGlobal.GetSmartAdRecommendList(txtid, obj);
        }
    },
    ETLSmartAdRecommendEntity: function () {
        //广告栏编号
        this.columnid = "";
        //当前访问页面url
        this.curl = "";
        //0和1分别指示调用模型A还是模型B。默认为0
        this.model = "0";
    },
    GetSmartAdRecommendList: function (txtid, obj) {
        var url = "http://etl.moonbasa.com/smartadsinsite.aspx?";
        $.each(obj, function (name, value) {
            if (value != "") {
                url += name + "=" + value + "&";
            }
        });
        var urlLength = url.lastIndexOf("&");
        url = url.substring(0, urlLength);
        $.ajax({
            url: url,
            dataType: 'jsonp',
            jsonp: 'callback',
            timestamp: true,
            success: function (data) {
                $("#" + txtid).html(data);
            }
        });
    }
}
$(function () {
    var SmartAdList = $("div[name=SmartAdRecommend]");
    for (var i = 0; i < SmartAdList.length; i++) {
        MLEtlSmartAdRecommendGlobal.BindSmartAdRecommend(SmartAdList[i].id);
    }
});