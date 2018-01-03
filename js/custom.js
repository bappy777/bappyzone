$(document).ready(function () {

	$('.counter').counterUp({
		time: 1000
	});
	// counter js ends

	$('.slider-one').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: '.slider-item'
	});
	$('.slider-item').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-one',
		arrows: true,
		nextArrow: '<i class="fa fa-chevron-down arrow-down"></i>',
		prevArrow: '<i class="fa fa-chevron-up arrow-up"></i>'
	});	
	// client slider ends

	$('.logo-client').slick({
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoPlay: true,
		autoplaySpeed: 1000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					autoPlay: true,
					autoplaySpeed: 1000
				}
    },
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					autoPlay: true,
					autoplaySpeed: 1000
				}
    },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoPlay: true,
					autoplaySpeed: 1000
				}
    }
  ]
	});
	// client logo ends

	$('.totop').tottTop({
		scrollTop: 100
	});
	// totop ends

	$(window).load(function () {
		$("#sticky").sticky({
			topSpacing: 0,
		});
	});
	// sticky nav ends

	$('nav a').smoothScroll({
		autoFocus: true,
		speed: 1000
	});
	// smoothscroll ends

	$(function () {
		$('.filtr-container').filterizr();
	});
	// filterizr ends

	AOS.init();
	// aos ends

	var typed = new Typed('#typed', {
		stringsElement: '#typed-strings',
		loop: true,
		typeSpeed: 100,
		backSpeed: 100,
		cursorChar: "|",
	});
	// typed js ends

});
