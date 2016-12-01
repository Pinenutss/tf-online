$(function(){
//判断设备显示字体
    if(judge.platform() == "ios"){
		var str = "<style> body{ font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif!important;}</style>";
		$('head').append(str);
	}
	if(judge.platform()=="android"){
		var str = "<style>body{ font-family: 'RobotoRegular', 'Droid Sans', sans-serif!important;}</style>";
		$('head').append(str);
	}

   //新闻切换
    $('.tab_Bar .tab_Trigger').click(function()
        {   
        	var index=$(this).index();
            $(this).addClass("active").siblings().removeClass("active"); 
            $('.tab_Content').hide();
            $('.tab_Content').eq(index).show();
        });

})

//弹窗控件
/*
打开弹窗 dialog.open(params)
params.t  : 弹窗标题(留空)
params.c  : 弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
params.lb : 左按钮文字，事件绑定#js_dialog_func(留空)，需要事件代理
params.rb : 右按钮文字，默认关闭弹窗

关闭弹窗 dialog.close()
*/
var dialog = {
    'open':function(t,c,lb,rb){
        var t = t || undefined,
            lb = lb || undefined,
            c = c || '窗口内容',
            rb = rb || '确定';
        var dialogStr = '<div id="js_dialog">';
            dialogStr += '<div class="ui-mask"></div>';
            dialogStr += '<div class="ui-dialog">';
        if(t !== undefined){
            dialogStr += '<div class="ui-dialog__hd"><strong class="ui-dialog__title">'+t+'</strong></div>';
        }else{}
        dialogStr += '<div class="ui-dialog__bd">'+c+'</div>';
            dialogStr += '<div class="ui-dialog__ft">';
            if(lb !== undefined){
                dialogStr += '<a href="javascript:;" id="js_dialog_func" class="ui-dialog__btn">'+lb+'</a>';
            }
            dialogStr += '<a href="javascript:;" class="ui-dialog__btn primary" onclick="dialog.close()">'+rb+'</a>';
        
        dialogStr += '</div></div></div>';
        $('body').append(dialogStr);
        $('#js_dialog').show();
        return this;
    },
    'close':function(){
       $('#js_dialog').remove();
    }
}
