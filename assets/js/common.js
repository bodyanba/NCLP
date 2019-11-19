$(document).ready(function () {

  $(".navbar-toggler").on("click", function() {
    $(this).toggleClass("active");
  });

  $(window).enllax();

  $('.jarallax').jarallax({});

  AOS.init({
    duration: 1500,
    disable: 'mobile'
  });

  $(window).on("scroll", function() {
    if ($(this).scrollTop() >= 1) {
      $('.fixed-top').addClass("navbar-bg");
    } else {
      $('.fixed-top').removeClass("navbar-bg");
    }
  });

  $('.scroll-to').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1000, "easeInOutExpo");
  });

  function footer() {
    var height = $(".page-footer").outerHeight();
    $(".footer-wrapper").outerHeight(height);
  };
  footer();
  $(window).on("resize", function() {
    footer();
  });

  var anim;
  var animData = {
      container: document.getElementById('preloader'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      rendererSettings: {
          progressiveLoad: false
      },
      path: '../json/nclp_logo.json'
  };
  anim = bodymovin.loadAnimation(animData);
  anim.setSpeed(1);

});