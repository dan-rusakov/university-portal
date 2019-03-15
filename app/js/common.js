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

	/*$("body").click(function(e) {
		if($(e.target).closest(".menu-box-mobile").length==0 && $('.menu-box-mobile').hasClass('open-mobile-menu')){
			$(".menu-box-mobile").removeClass('open-mobile-menu');
		}
	});*/

	$("body").click(function() {
		
	});

	$('.hamburger').on('click', function(){
		$('.menu-box-mobile').addClass('open-mobile-menu');
	});

	$('.menu-box-mobile__close-icon').on('click', function(){
		$(".menu-box-mobile").removeClass('open-mobile-menu');
	});

});
