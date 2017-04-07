// padding for fixed header
$('body').css('padding-top', $('.page-header').outerHeight());

// Open mobile nav
$(function() {
	$('.main-nav-toggler').on('click', function(){
		$('.main-nav').toggleClass('main-nav--open');
		$('body').toggleClass('scroll-disabled');
	});
});

// More text home about
$(document).ready(function(){
	$('.js-more-text').on('click',function(){
		if($('.home-about__text').attr('data-click-state') == 1) {
			$('.home-about__text').attr('data-click-state', 0)
			$('.home-about__text').removeClass('home-about__text--show')
			$(".js-more-text").html('Показать полностью')
		} else {
			$('.home-about__text').attr('data-click-state', 1)
			$('.home-about__text').addClass('home-about__text--show')
			$(".js-more-text").html('Скрыть')
		}
	});
 });

// Retina ready X2
$(function () {
	if (window.devicePixelRatio == 2) {
		var images = $("img.js-retina");
		for(var i = 0; i < images.length; i++) {
			var imageType = images[i].src.substr(-4);
			var imageName = images[i].src.substr(0, images[i].src.length - 4);
			imageName += "@2x" + imageType;
			images[i].src = imageName;
		}
	}
});

// Retina ready X3
$(function () {
	if (window.devicePixelRatio == 3) {
		var images = $("img.js-retina");
		for(var i = 0; i < images.length; i++) {
			var imageType = images[i].src.substr(-4);
			var imageName = images[i].src.substr(0, images[i].src.length - 4);
			imageName += "@3x" + imageType;
			images[i].src = imageName;
		}
	}
});

// Active nav
$(function() {
	var nav = document.getElementById("main-nav"),
	anchor = nav.getElementsByTagName("a"),
	current = window.location;
	for (var i = 0; i < anchor.length; i++) {
		if(anchor[i].href == current) {
			anchor[i].className = "active-nav-item";
		}
	}
});

if ($(window).width() <= 760) {
	$('.text-section__text').addClass('js-accord-item');
	$('.text-section__text h3').addClass('js-accord-title');
	$('.text-section__text p').addClass('js-accord-text');

	$(function() {
		$('.js-accord-item').each(function() {
			var $accordion = $(this);

			$(".js-accord-title", $accordion).click(function(e) {
				e.preventDefault();
				$div = $(".js-accord-text", $accordion);
				$div.slideToggle(200);
				$(".js-accord-text").not($div).slideUp(200).parent().removeClass('js-accord-item--active');
				$div.parent(".js-accord-item").toggleClass('js-accord-item--active').siblings().removeClass('js-accord-item--active');
				return false;
			});

			$(".js-accord-item").first().show();
		});
	});

};
