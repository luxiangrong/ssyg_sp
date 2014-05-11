<link rel="stylesheet" href="swiper/css/idangerous.swiper.css">
<style type="text/css">
.paginationDiv{position:relative; height:190px; overflow:hidden;}
.pagination1{text-align:right; position:absolute; z-index:10; left:0px; bottom:0px; width:100%; background:url(image/bg.png); height:33px;}
.pagination1 .swiper-pagination-switch {
	display: inline-block;
	width: 12px;
	height: 12px;
	border-radius: 10px;
	background: #251b25;
	margin-right:8px;
	cursor: pointer; position:relative; top:10px;
}
.pagination1 .swiper-active-switch {
	background: #fff;
}
</style>

<div class="paginationDiv">
<div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="image/img480_1.jpg"></div>
          <div class="swiper-slide"><img src="image/img480_2.jpg"></div>
          <div class="swiper-slide"><img src="image/img480_3.jpg"></div>
        </div>
</div>
<div class="pagination1"></div>
</div>
<script src="swiper/js/idangerous.swiper-1.9.1.min.js"></script>
<script src="swiper/js/swiper-demos.js"></script>
