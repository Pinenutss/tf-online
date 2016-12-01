$(function(){

    //轮播图初始化
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