$(function() {

	// open/close search line

	var submitIcon = $('.search-line__btn');
	var inputBox = $('.search-line__input');
	var searchBox = $('.search-line');
	var isOpen = false;

	submitIcon.click(function(){
		if(isOpen == false && window.innerWidth < 992){
			inputBox.addClass('search-open__input');
			searchBox.addClass('search-open__box');
			$('.main-menu').addClass('search-open__menu');
			inputBox.focus();
			isOpen = true;
			return false;
		} else {
			var inputVal = $('.search-line__input').val();
			inputVal = $.trim(inputVal).length;
			if( inputVal !== 0){
				submitIcon.click();
			} else {
				inputBox.removeClass('search-open__input');
				searchBox.removeClass('search-open__box');
				$('.main-menu').removeClass('search-open__menu');
				inputBox.focusout();
				isOpen = false;
				return false;
			}
		}
	});  

	submitIcon.mouseup(function(){
		return false;
	});
	searchBox.mouseup(function(){
		return false;
	});

	// open/close mobile-menu-box

	$('.hamburger').on('click', function(){
		$('.menu-box-mobile').addClass('open-mobile-menu');
	});

	$('.menu-box-mobile__close-icon').on('click', function(){
		$(".menu-box-mobile").removeClass('open-mobile-menu');
	});

	// create child skills popup

	$(".child-skills__btn").fullScreenPopup({
		bgColor: "#A6DCEE"
	});

	// create datetable carousel

	$('.timetable-carousel').owlCarousel({
		loop:false,
		nav: false,
		dots: true,
		margin:20,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1200:{
				items:3
			}
		}
	});

	// create partners carousel

	var owlPartners = $('.partners-carousel'),
	owlOptions = {
		loop:false,
		nav: true,
		dots: false,
		margin:20,
		navText: ['<i class="icon-carousel-arrow-left"></i>','<i class="icon-carousel-arrow-right"></i>'],
		responsiveClass:true,
		responsive:{
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			},
			1600:{
				items:5
			}
		}
	};

	if ( $(window).width() > 768 ) {
		var owlActive = owlPartners.owlCarousel(owlOptions);
		owlPartners.addClass('owl-carousel');
	  } else {
		owlPartners.addClass('off');
		owlPartners.removeClass('owl-carousel');
	  }
	
	  $(window).resize(function() {
		if ( $(window).width() > 768 ) {
		  if ( $('.partners-carousel').hasClass('off') ) {
			var owlActive = owlPartners.owlCarousel(owlOptions);
			owlPartners.removeClass('off');
			owlPartners.addClass('owl-carousel');
		  }
		} else {
		  if ( !$('.partners-carousel').hasClass('off') ) {
			owlPartners.addClass('off').trigger('destroy.owl.carousel');
			owlPartners.find('.owl-stage-outer').children(':eq(0)').unwrap();
			owlPartners.removeClass('owl-carousel');
		  }
		}
	  });

	/*$('.partners-carousel').owlCarousel({
		loop:false,
		nav: true,
		dots: false,
		margin:20,
		navText: ['<i class="icon-carousel-arrow-left"></i>','<i class="icon-carousel-arrow-right"></i>'],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			},
			1600:{
				items:5
			}
		}
	});*/
		
	
});
