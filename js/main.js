$(document).ready(function() {
    'use strict';

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

    //---------- Sticky Header JS
    function sticky_header(){
        $(document).ready(function(){
            $('#header').each(function() {
                var homeHeight = $('#home').height() -1,
                    pageHeaderHeight = $('#page-header').height() -1;
                var headerHeight = $('#header').height();
                $(".header-2").each(function(){
                    $(this).after("<div id='hidden-header'></div>");
                });
                $(window).scroll(function(){
                    if ($('#home').length == 1 ){
                        if ($(window).scrollTop() > homeHeight) {
                            $(".header").addClass("header-bg");
                            $(".header-2").addClass("sticky");
                            $(".header-2").each(function(){
                                $("#hidden-header").css('height', headerHeight);
                            });
                        } else {
                            $(".header").removeClass("header-bg");
                            $(".header-2").removeClass("sticky");
                            $(".header-2").each(function(){
                                $("#hidden-header").css('height', 0);
                            });
                        }
                    } else {
                        if ($(window).scrollTop() > pageHeaderHeight) {
                            $(".header").addClass("header-bg");
                            $(".header-2").addClass("sticky");
                            $(".header-2").each(function(){
                                $("#hidden-header").css('height', headerHeight);
                            });
                        } else {
                            $(".header").removeClass("header-bg");
                            $(".header-2").removeClass("sticky");
                            $(".header-2").each(function(){
                                $("#hidden-header").css('height', 0);
                            });
                        }
                    }
                });
            });
        });
    };
     
    $(document).ready(function(){
        full_screen_section();
        sticky_header();
    });

    $(window).resize(function(){
		full_screen_section();
	});

    $(window).load(function (){
        full_screen_section();
        sticky_header();
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




