
$(function(){
	
	//Main Swiper
	var swiper = new Swiper('.swiper1', {
		pagination : '.pagination1',
		loop:true,
		grabCursor: true,
		calculateHeight: true,
	});
	//Navigation arrows
	$('.arrow-left').click(function(e) {
        e.preventDefault()
		swiper.swipePrev()
    });
	$('.arrow-right').click(function(e) {
        e.preventDefault()
		swiper.swipeNext()
    });
    //Clickable pagination
    $('.pagination1 .swiper-pagination-switch').click(function(){
    	swiper.swipeTo($(this).index())
    })

	
	
})

