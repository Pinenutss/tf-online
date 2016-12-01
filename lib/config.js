/**
 * 项目基本配置
 * namespace: WEB_CONFIG
 * use: WEB_CONFIG.method
 * @author   : DJ
 * @datetime : 2016/11/04
 * @version  : 1.0.0
 */

var WEB_CONFIG = (function(root, factory) {
    //模块名称
    var _MODULE_NAME = "项目基本配置";
    //模块版本
    var _MODULE_VERSION = "1.0.0";
    //定义当前环境
    var _ENV_PATH = 0; //0:开发,1:测试,2:live,3:正式,默认:开发
    /**
     * [HOST 获取服务器接口地址]
     * @param {int} env 运行环境:{0:开发,1:测试,2:live,3:正式,默认:开发}
     * @return{string} 服务器地址
     */
    factory.HOST = function() {
        var host = "";
        switch (_ENV_PATH) {
            case 0:
                host = "http://123.56.187.96:9001/";
                break;
            case 1:
                host = "http://circle2.rls.huizhuang.com";
                break;
            case 2:
                host = "http://circle2.live.huizhuang.com";
                break;
            case 3:
                host = "http://circle2.huizhuang.com";
                break;
            default:
                host = "http://circle2.rls.huizhuang.com";
                break;
        }
        return host;
    };
    /* 暴露 API 工厂*/
    return factory;

})(window, window.WEB_CONFIG = window.WEB_CONFIG || {});