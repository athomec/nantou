$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//字級大小
	$(".js-top-function button").click(function () {
		if ($(this).hasClass("js-font-sm")) {
			$("html").addClass("sm");
		} else if ($(this).hasClass("js-font-md")) {
			$("html").removeClass("sm").removeClass("lg");
		} else if ($(this).hasClass("js-font-lg")) {
			$("html").addClass("lg");
		}
		$(this).addClass("active");
		return false;
	})

	//banner滑鼠滑動
	$('.carousel-inner').on('mousedown', function (e) {
		var startX = e.pageX || e.touches[0].pageX;
		$(this).on('mousemove touchmove', function (e) {
			var endX = e.pageX || e.touches[0].pageX;
			if (startX - endX > 50) {
				$('.carousel').carousel('next');
				$(this).off('mousemove touchmove');
			} else if (endX - startX > 50) {
				$('.carousel').carousel('prev');
				$(this).off('mousemove touchmove');
			}
		});
	}).on('mouseup touchend', function () {
		$(this).off('mousemove touchmove');
	});

	$(".js-toggle-btn").click(function (){
		$(this).toggleClass("active");
	})
	$(".js-dropdown-menu").find("a").click(function () {
		$(this).toggleClass("active");
		$(".js-dropdown-menu").find("a").not(this).removeClass("active");
	})
	//下拉搜尋選單
	
	$(".dropdown").select2({
		language: 'zh-TW',
		width: '100%',
		// 最多字元限制
		maximumInputLength: 10,
		// 最少字元才觸發尋找, 0 不指定
		minimumInputLength: 0,
		// 當找不到可以使用輸入的文字
		tags: true,
	});
	//內容範本
	$('.section-pic-wrapper').each(function () {
		var sectionPic = $(this).find('.section-pic');
		if (sectionPic.find('img').length === 0) {
			$(this).hide();
		}
	});
	//---------------------側邊選單設定------------------------
	$(".js-side-menu-toggler").click(function () {//側邊選單收合
		$(".js-side-menu").toggleClass("close");
	});
	RESIZE();

	function RESIZE() {
		var WINDOW = $(window).width();
		var WINDOWH = $(window).height();
		if (WINDOW < 992) {
			$('.js-side-menu').addClass("close");
			$(".js-side-content").addClass("close");
		}else{
			$('.js-side-menu').removeClass("close");
			$(".js-side-content").removeClass("close");
		}
	}
	$(window).resize(function () {
		RESIZE();
	})

})//JS尾端	
