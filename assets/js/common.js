$(document).ready(function () {

	$(".navbar-toggler").on("click", function() {
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-in");
	});

	$(window).enllax();

	$('.jarallax').jarallax({});

	AOS.init({
		duration: 1500,
		disable: 'mobile'
	});

	function navbar() {
		if ($(this).scrollTop() >= 1) {
			$('.fixed-top').addClass("navbar-bg");
		} else {
			$('.fixed-top').removeClass("navbar-bg");
		};
	};
	navbar();
	$(window).on("scroll", navbar);

	$('.scroll-to').on('click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(target).offset().top - 77 }, 1000, "easeInOutExpo");
	});

	function footer() {
		var height = $(".page-footer").outerHeight();
		$(".footer-wrapper").outerHeight(height);
	};
	footer();
	$(window).on("resize", footer);

	var lastScrollTop = 0;
	function scrolled() {
		var body = $('body'),
				st = $(this).scrollTop();
		if (st > lastScrollTop) {
			body.addClass('scroll-down');
		} else {
			body.removeClass('scroll-down');
		};
		lastScrollTop = st;
	};
	scrolled();
	$(window).on('scroll resize', scrolled);

	function easyParallax() {
		scrollPos = $(this).scrollTop();
		$('.header-1 .container').css({
				'top': (scrollPos / 4) + "px",
				'opacity': 1 - (scrollPos / 250)
		});
		// $('.page-header.parallax-section .container').css({
		// 		'top': (scrollPos/4)+"px",
		// 		'opacity': 1-(scrollPos/120)
		// });
	};
	$(window).on("scroll", easyParallax);

	var countdown = $('.countdown');
	countdown.downCount({
		date: countdown.attr('data-date'),
		offset: +10
	}, function () {
		//callback here if finished
		//alert('YES, done!');
	});

});