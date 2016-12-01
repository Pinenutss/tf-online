$(function(){
    $('.content-1').on('click','a',function(){
        var _id = $(this).data('id');
        slideHandler.init(_id);
    })

    $(".lazy").lazyload({
      effect : "fadeIn"
     });
//    var _uid = '2041167344';
//     ZMD_UTILS.AJAXRequest(
//        'api/HomePage/GetPerformanceLevelExcellent',
//        'post',
//        '{\"employeeId\":\"' + _uid + '\",\"isLeader\":\"true\",\"dataSize\":\"3\"}',
//         function(result){
//             alert('ok');
//         }
//     )


})
var fullSwiper;
var slideHandler = {
    'init':function(_id){
        fullSwiper = new Swiper('#js_fullSwiper .swiper-container', {
            direction: 'horizontal',
            zoom:true,
            zoomMax:2,
            preloadImages: false,
            lazyLoading:true
        });
        $('#js_swiper').addClass('show');
        fullSwiper.slideTo(_id,150,false);
    },
    'close':function(){
        $('#js_swiper').removeClass('show');
        fullSwiper.slideTo(0,150,false);
        fullSwiper.destroy(false);
    }
}
