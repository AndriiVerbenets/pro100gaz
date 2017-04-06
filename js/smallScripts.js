
//Open mobile nav
// $(function() {
// 	$('.nav-toggler').on('click', function(){
// 		$('.main-nav').toggleClass('main-nav--open');
// 		$('.nav-toggler').toggleClass('nav-toggler--open');
// 		$('body').toggleClass('no-overflow-nav');
// 	});
// });

//fixed nav on scroll
// var navSpace = $('header').height();
// var fixTop = $('header').offset().top + 150;
// $(window).scroll(function() {
// 	var currentScroll = $(window).scrollTop();
// 	if (currentScroll >= fixTop) {
// 		$('header').addClass('fixed');
// 		$('body').css({ paddingTop: navSpace});
// 	} else {
// 		$('header').removeClass('fixed');
// 		$('body').css({ paddingTop: '0' });
// 	}
// });
//Retina ready X2
$(function () {

	if (window.devicePixelRatio == 2) {

		var images = $("img.retina");

		for(var i = 0; i < images.length; i++) {

			var imageType = images[i].src.substr(-4);
			var imageName = images[i].src.substr(0, images[i].src.length - 4);
			imageName += "@2x" + imageType;

			images[i].src = imageName;
		}
	}
});

//Retina ready X3
$(function () {

	if (window.devicePixelRatio == 3) {

		var images = $("img.retina");

		for(var i = 0; i < images.length; i++) {

			var imageType = images[i].src.substr(-4);
			var imageName = images[i].src.substr(0, images[i].src.length - 4);
			imageName += "@3x" + imageType;

			images[i].src = imageName;
		}
	}
});

//Fix footer in order page
// var fixBottom = $('.footer-order');
// var footerSpace = $('.footer-order').height();
// if (fixBottom.length) {
// 	var offset = fixBottom.offset().top;
// }
// $(window).scroll(function() {
// 	var crntScroll = $(window).scrollTop();
// 	if (crntScroll <= ($(this).scrollTop() > 100)) {
// 		$(fixBottom).removeClass('fixed-footer');
// 		$('body').css({ paddingBottom: '0'});
// 	} else {
// 		$(fixBottom).addClass('fixed-footer');
// 		$('body').css({ paddingBottom: footerSpace});
// 	}
// });

//Active nav
// $(function() {
// 	var nav = document.getElementById("main-nav"),
// 	anchor = nav.getElementsByTagName("a"),
// 	current = window.location;
// 	for (var i = 0; i < anchor.length; i++) {
// 		if(anchor[i].href == current) {
// 			anchor[i].className = "active";
// 		}
// 	}
// });


//Counter
// function modify_qty(val) {
// 	var qty = document.getElementById('counter').value;
// 	var new_qty = parseInt(qty,10) + val;

// 	if (new_qty < 1) {
// 		new_qty = 1;
// 	}

// 	document.getElementById('counter').value = new_qty;
// 	return new_qty;
// }

//Mobile nav top padding depend of header height
// var headerH = $('header').height();
// if ($(window).width() <= 760) {
// 	$('.main-nav').css({ top: headerH });
// 	$('.nav-overlay').css({ top: headerH });
// }

//Home-main pargin-bottom depend of height Important text section
// var mainText = $('.home-main__smth').height();
// $('.home-main').css({ paddingBottom: mainText });

//Read more link in important text
// $(document).ready(function(){
// 	$('.smth-more').on('click',function(){
// 		if($('.home-main__smth-text').attr('data-click-state') == 1) {
// 			$('.home-main__smth-text').attr('data-click-state', 0)
// 			$('.home-main__smth-text').removeClass('hms-height')
// 			$('.home-main').css({ paddingBottom: $('.home-main__smth').height() })
// 			$(".smth-more").html('Read all')
// 			// if ($(window).width() <= 480) {
// 			// 	$('.home-main').css({ paddingBottom: $('.imp-text').height() })
// 			// }
// 		} else {
// 			$('.home-main__smth-text').attr('data-click-state', 1)
// 			$('.home-main__smth-text').addClass('hms-height')
// 			$('.home-main').css({ paddingBottom: $('.home-main__smth').height() })
// 			$(".smth-more").html('Less')
// 			// if ($(window).width() <= 480) {
// 			// 	$('.home-main').css({ paddingBottom: $('.imp-text').height() + 26 })
// 			// }
// 		}
// 	});
//  });

//Modal
// $(document).on('ready', function(){
// 	$modal = $('.modal-frame');
// 	$overlay = $('.modal-overlay');
// 	$fixBody = $('body');

// 	/* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
// 	$modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
// 		if($modal.hasClass('state-leave')) {
// 			$modal.removeClass('state-leave');
// 		}
// 	});

// 	$('.close').on('click', function(){
// 		$overlay.removeClass('state-show');
// 		$modal.removeClass('state-appear').addClass('state-leave');
// 		$fixBody.removeClass('no-overflow');

// 	});

// 	$('.open').on('click', function(){
// 		$overlay.addClass('state-show');
// 		$modal.removeClass('state-leave').addClass('state-appear');
// 		$fixBody.addClass('no-overflow');
// 	});
// });
