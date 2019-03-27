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
			600:{
				items:3
			},
			1200:{
				items:3
			}
		}
	})
		

});
