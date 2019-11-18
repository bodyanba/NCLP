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

  function footer() {
    var height = $(".page-footer").outerHeight();
    $(".footer-wrapper").outerHeight(height);
  };

  footer();
  $(window).on("resize", function() {
    footer();
  });

});