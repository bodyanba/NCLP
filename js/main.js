$(document).ready(function() {

    //---------- FullScreen Section JS
	function full_screen_section(){
		$('.fullscreen').each(function(){
			var windowHeight = $(window).height();
            var containerHeight = $('.section-home .container').height();
            var containerPos = Math.ceil( (windowHeight / 2) - (containerHeight / 2) + 10 );
            $('.fullscreen.section-home').css('height', windowHeight);
            $('.fullscreen.section-home .container').css('margin-top', containerPos);
		});
	};
    full_screen_section();
    $(window).resize(function(){
        full_screen_section();
    });

    //---------- Sticky Header JS
    $(window).on("scroll", function() {
        if ($(this).scrollTop() >= 1) {
            $('#header').addClass("header-bg");
        } else {
            $('#header').removeClass("header-bg");
        };
    });

    $(".navbar-toggle").on("click", function() {
        $(this).toggleClass("active");
        $("body").toggleClass("header-in");
    });
    
	//---- tooltip
	$('.re-tooltip').each(function(){
        $('.re-tooltip').tooltip();
    });

    //---- CSS3 Animations
	$('[data-animation]').each(function(){
        var $animationName = $(this).attr('data-animation'),
            $animationDelay = "delay-"+$(this).attr('data-animation-delay');
        $(this).appear(function() {
            $(this).addClass('animated').addClass($animationName);
            $(this).addClass('animated').addClass($animationDelay);
        });
    });

    //---- Scroll To Links
    $('.scroll-to').on('click', function() {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1000, "easeInOutExpo");
    });

    //---- Custom Carousel
	$('.custom-carousel').owlCarousel({
		stopOnHover: true,
		autoPlay: 6000,
		navigation: false,
		pagination: true,
		lazyLoad: true,
		items: 2,
		itemsDesktop: [1000, 2],
        itemsDesktopSmall: [1000, 2],
		itemsTablet: [600, 1],
		autoHeight: true,
	});
    $('.custom-carousel-2').owlCarousel({
        stopOnHover: true,
        autoPlay: 6000,
        navigation: false,
        pagination: true,
        lazyLoad: true,
        items: 3,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [1000, 2],
        itemsTablet: [600, 1],
        autoHeight: true,
    });

    $('.clock-countdown').downCount({
        date: $('.site-config').attr('data-date'),
        offset: +10
    }, function () {
        //callback here if finished
        //alert('YES, done!');
    });

    //---- Popup with form
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        closeBtnInside: true,
        focus: '#name',
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $(window).enllax();

});

//---- Home Parallax BG & Container
$(document).ready(function(){
    function EasyPeasyParallax() {
        scrollPos = $(this).scrollTop();
        $('.section-home.parallax, #page-header.parallax-full').css({
            'background-position' : '50% ' + (-scrollPos/4)+"px"
        });
        $('.section-home.parallax .container').css({
            'top': (scrollPos/4)+"px",
            'opacity': 1-(scrollPos/250)
        });
        $('.page-header.parallax-section .container').css({
            'top': (scrollPos/4)+"px",
            'opacity': 1-(scrollPos/120)
        });
    };
    $(window).scroll(function() {
        EasyPeasyParallax();
    });
});

$(window).load(function(){
    $("#pageloader").delay(1200).fadeOut(800);
});




