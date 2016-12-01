$(function(){
console.log("ssss");
    //轮播图初始化
    var mySwiper = new Swiper ('#js_swiper_1 .swiper-container', {
				direction: 'horizontal',
				pagination: '#swiper-pagination_1',
				slidesPerView: 'auto',
				paginationClickable: true,
				spaceBetween: 5,
				loop:true,
				autoplay : 3000,
				speed:900,
			});
    var mySwiper = new Swiper ('#js_swiper_2 .swiper-container', {
				direction: 'horizontal',
				pagination: '#swiper-pagination_2',
				slidesPerView: 'auto',
				paginationClickable: true,
				spaceBetween: 5,
				loop:true,
				autoplay : 3000,
				speed:900,
			});
    
    $(".lazy").lazyload({
      effect : "fadeIn"
     });
})

$(function(){
    $('#js_homeSwiper').on('click','a',function(){
        var _id = $(this).data('id');
        slideHandler.init(_id);

    })

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