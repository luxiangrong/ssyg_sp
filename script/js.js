$(function() {
	//--左侧菜单
	$('.headDiv').find('a').eq(0).click(function() {
		showSideNav();
	});
	$('.sideNav').find('.back').click(function() {
		hideSideNav();
	});
	
	var winWidth = $(window).width();
	function showSideNav() {
		$(".sideNav").removeClass('no-transition');
		$(".pageWal, .fixhelp").removeClass('no-transition');
		
		$(".sideNav").css('box-shadow',  '3px 3px 5px #666666');
		
		$(".sideNav").css('transform', 'translate3d(0px, 0px, 0px)');
		$(".sideNav").css('-webkit-transform', 'translate3d(0px, 0px, 0px)');
		
		$(".pageWal, .fixhelp").css('transform', 'translate3d(' + $(".sideNav").width()  + 'px, 0px, 0px)');
		$(".pageWal, .fixhelp").css('-webkit-transform', 'translate3d(' + $(".sideNav").width()  + 'px, 0px, 0px)');
	
		var fullScreenHolder = $("<div id='fullScreenHolder'></div>");
		fullScreenHolder.css({
			'position': 'fixed',
			'left': '0',
			'top': '0',
			'width': '100%',
			'height': '100%',
			'z-index': 50
		});
		$(".sideNav").before(fullScreenHolder);
		
		settings.activeRect = [0,0,1,1];
		fullScreenHolder.touchwipe(settings);
	
		// settings.activeRect = [0,0,1,1];
		// $("body").touchwipe(settings);
	}
	
	function hideSideNav() {
		
		$(".sideNav").removeClass('no-transition');
		$(".pageWal, .fixhelp").removeClass('no-transition');
		
		$(".sideNav").css('box-shadow',  'none');
		
		$(".sideNav").css('transform', 'translate3d(-' + $(".sideNav").width() + 'px, 0px, 0px)');
		$(".sideNav").css('-webkit-transform', 'translate3d(-' + $(".sideNav").width() + 'px, 0px, 0px)');
		
		$(".pageWal, .fixhelp").css('transform', 'translate3d(0px, 0px, 0px)');
		$(".pageWal, .fixhelp").css('-webkit-transform', 'translate3d(0px, 0px, 0px)');
		
		$("#fullScreenHolder").remove();
		
		// settings.activeRect = [0,0,0.3,1];
		// $("body").touchwipe(settings);
	}
	
	function wipeMoving(dx, dy){
		$(".sideNav").addClass('no-transition');
		$(".pageWal, .pagination1").addClass('no-transition');
	
		var sideNavT3DX= initTranslate3dX.sideNav - dx;
		var pageWalT3DX = initTranslate3dX.pageWal - dx;
		
		//console.log(sideNavT3DX + "    -      " + pageWalT3DX);
		if(sideNavT3DX >= 0 || pageWalT3DX <= 0) {
			return;
		}
		
		$(".sideNav").css('transform', 'translate3d(' + sideNavT3DX + 'px, 0px, 0px)');
		$(".sideNav").css('-webkit-transform', 'translate3d(' + sideNavT3DX + 'px, 0px, 0px)');
		
		$(".pageWal, .fixhelp").css('transform', 'translate3d('+ pageWalT3DX + 'px, 0px, 0px)');
		$(".pageWal, .fixhelp").css('-webkit-transform', 'translate3d(' +  pageWalT3DX + 'px, 0px, 0px)');
	}
	
	var parseToMatrix = function(str) {
		var reg = /^matrix\((-?\d+),\s*(-?\d+),\s*(-?\d+),\s*(-?\d+),\s*(-?\d+),\s*(-?\d+)\)$/;
		var matches = str.match(reg);
		if($.isArray( matches) && matches.length == 7) {
			matches.splice(0,1);
			return matches;
		}
		return [0,0,0,0,0,0];
	};
	
	var initTranslate3dX = {
		'sideNav' : 0,
		'pageWal' : 0
	};
	
	
	$("body, .sideNav").on('touchstart mousedown', function(){
		if('-webkit-transform' in document.documentElement.style) {
			initTranslate3dX ={
				'sideNav' : parseToMatrix($(".sideNav").css('-webkit-transform'))[4],
				'pageWal' : parseToMatrix($(".pageWal").css('-webkit-transform'))[4]
			};
		}
		if('transform' in document.documentElement.style) {
			initTranslate3dX ={
				'sideNav' : parseToMatrix($(".sideNav").css('transform'))[4],
				'pageWal' : parseToMatrix($(".pageWal").css('transform'))[4]
			};
		}
	}).on('touchend mouseup', function(){
		$(".sideNav").removeClass('no-transition');
		$(".pageWal").removeClass('no-transition');
	});
	
	var settings = {
		wipeMoving: function(dx, dy) {
			wipeMoving(dx, dy);
		},
		wipeLeft: function(){
			hideSideNav();
		},
		wipeRight: function(){
			showSideNav();
		},
		wipeStart: function(){
			if('-webkit-transform' in document.documentElement.style) {
				initTranslate3dX ={
					'sideNav' : parseToMatrix($(".sideNav").css('-webkit-transform'))[4],
					'pageWal' : parseToMatrix($(".pageWal").css('-webkit-transform'))[4]
				};
			}
			if('transform' in document.documentElement.style) {
				initTranslate3dX ={
					'sideNav' : parseToMatrix($(".sideNav").css('transform'))[4],
					'pageWal' : parseToMatrix($(".pageWal").css('transform'))[4]
				};
			}
		},
		min_move_x: 2,
		activeRect:[0,0,0.3,1]
	};
	
	$("body").touchwipe(settings);
	
	settings.activeRect = [0,0,1,1];
	
	$(".sideNav").touchwipe(settings);
	
	$(document).ready(function(){
		hideSideNav();
	});
	
	//--焦点图
	//
});