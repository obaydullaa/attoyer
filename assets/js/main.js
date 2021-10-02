(function ($) {
    "use strict";
    
    //////////////////////////////////////
   // 💥  Sticky Header 💥 //
  //-----------------------------------
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 150) {
            $("#sticky-header").removeClass("sticky");
        } else {
            $("#sticky-header").addClass("sticky");
        }
    });    
    
    //////////////////////////////////////
   // 💥 mainSlider 💥 //
  //-----------------------------------
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: false,
            infinite: true,
            fade: true,
            arrows: true,
            prevArrow:'<button type="button" class="slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
            nextArrow:'<button type="button" class="slick-next"> <i class="fas fa-chevron-right"></i> </button>',
            responsive: [
                { breakpoint: 991, settings: { dots: false, arrows: false } }
            ]
        });
    
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
    
    //////////////////////////////////////
   // 💥 Data-Background 💥 //
  //-----------------------------------
  $("[data-background").each(function () {
      $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
  });

    //////////////////////////////////////
   // 💥 Service  💥 //
  //-----------------------------------
    $('.service-active').slick({
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  
    //////////////////////////////////////
   // 💥 Counter  💥 //
  //-----------------------------------
  $('.counter').counterUp({
    delay: 10,
    time: 1500
  });

    //////////////////////////////////////
   // 💥 Testimonials Active  💥 //
  //-----------------------------------
  $('.testimonial-active').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow:'<button type="button" class="slick-prev"> <i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"> <i class="fas fa-long-arrow-alt-right"></i></button>',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

    //////////////////////////////////////
   // 💥 Scroll-To-Top  💥 //
  //-----------------------------------
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fas fa-level-up-alt"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

    //////////////////////////////////////
   // 💥 Sidebar Menu  💥 //
  //-----------------------------------
    $( ".sidebar-menu .submenu" ).before( '<i class="fas fa-angle-down switch"></i>' );

    $(".sidebar-menu li i.switch").on( 'click', function() {
        var $submenu = $(this).next(".submenu");
        $submenu.slideToggle(300);
        $submenu.parent().toggleClass("openmenu");
    });

    //  Menu Bar
    $(".header-bar").on( 'click', function() {
      $(".sidebar-menu-area").toggleClass("open");
      $(".wrapper-site-overlay").toggleClass("active");
    });

    $(".sidebar-menu-area .btn-close, .wrapper-site-overlay").on( 'click', function() {
      $(".sidebar-menu-area").removeClass("open");
      $(".wrapper-site-overlay").removeClass("active");
    });

    //////////////////////////////////////
   // 💥 Preloader  💥 //
  //-----------------------------------
    $(window).on('load', function() {
      $("#loading").fadeOut(500);
    })

    //////////////////////////////////////
   // 💥 Wow Active 💥 //
  //-----------------------------------
    new WOW().init();
    
})(jQuery);