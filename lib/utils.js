/**
 * UTILS工具类
 * namespace: ZMD_UTILS
 * use: ZMD_UTILS.method
 * @author   : DJ
 * @datetime : 2016/11/04
 * @version  : 1.0.0
 */
var ZMD_UTILS = (function(window, factory) {
	//模块名称
	var _MODULE_NAME = "工具类";
	//模块版本
	var _MODULE_VERSION = "1.0.0";

	/**
	 * [AJAXRequest 封装AJAX]
	 * @param {[string]}  [api:具体的接口(不带URL前缀)]
	 * @param {[string]}  [method:get||Post]
	 * @param {[object]}  [data:数据对象]
	 * @param {[function]}  [success:成功回调函数]
	 * @param {[function]}  [fail:失败回调函数}]
	 * @param {[void]}  [HTTP Request失败自调用函数,无需传参]
	 * @return {[void]} [直接执行callback]
	 */

	factory.AJAXRequest = function(api, method, data, success, fail) {
		$.ajax({
			url: WEB_CONFIG.HOST + api,
			dataType: "json",
			type: method || "GET",
			xhrFields: {
				withCredentials: false
			},
			data: data,
			crossDomain: true,
			success: function(result) {
				if (result.code == 0) {
					success(result);
				} else {
					if (typeof(fail) == "undefined") {
						console.log(result);
					} else {
						fail(result);
					}
				}
			},
			error: function(result) {
				console.log(result.message);
			}
		})
	}
    
    /**
     * [时间戳格式转换]
     * timsta:时间戳
     * type：需要输出的类型
     *
     */
    factory.formateTime =function(timsta, type){
            var date = new Date(timsta * 1000); //获取一个时间对象  注意：如果是uinx时间戳记得乘于1000。比如php函数time()获得的时间戳就要乘于1000
            Y = date.getFullYear() + '-';
            M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
//            D = date.getDate() + ' ';
//            h = date.getHours() + ':';
//            m = date.getMinutes() + ':';
//            s = date.getSeconds();
            D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
            h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())+ ':';
            s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        
            var newTime = "";
            switch (type) {
                case "YYYY-MM-DD":
                    newTime = Y + M + D;
                    break;
                case "YYYY-MM-DD h:m:s":
                    newTime = Y + M + D + h + m + s;
                    break;
            }
            return newTime;
    };
    
    /**
     * [parseURI 解析网址中的数据]
     * 解析的数据在params对象中
     *
     */
    factory.parseURI =function(){
        var url =window.location.href;
        var a = document.createElement('a');
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            params: (function() {
                var ret = {},
                    seg = a.search.replace(/^\?/, '').split('&'),
                    len = seg.length,
                    i = 0,
                    s;
                for (; i < len; i++) {
                    if (!seg[i]) {
                        continue;
                    }
                    s = seg[i].split('=');
                    ret[s[0]] = s[1];
                }
                return ret;
            })(),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            hash: a.hash.replace('#', ''),
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: a.pathname.replace(/^\//, '').split('/')
        };
    };

	/* 暴露 API 工厂*/
	return factory;

})(window, window.ZMD_UTILS = window.ZMD_UTILS || {});