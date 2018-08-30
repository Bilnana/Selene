$( document ).ready(function() {
  mobileMenu ();
  iconSearch ();
  isSmallDevice ()
  slickSlider ();
  formValidation ();
});

/* Mobile menu */
function mobileMenu () {
  var btnMenu = $('.header__inner').find('.icon-menu');

  btnMenu.on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  })
}

/* Icon search animation */
function iconSearch () {
  var search = $('.icon-search');

  search.on('click', function () {
    $('.f-search__control').toggleClass('extended');
  })
}

/* Window width on small devices */
function isSmallDevice () {
  var width = $(window).width();

  if (width <= 768) {
    $('body').addClass('s-device')
  }
  else {
    $('body').addClass('b-device')
  }
}

/* Slick sliders */
function slickSlider () {
  $('.t-slider').slick({
    dots: true
  });

  $('.b-slider').slick({
    slidesToShow: 1,
    arrows: true,
  });

  $('.b-slider__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.b-slider',
    focusOnSelect: true
  });

  $('.l-partners').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });


  $('.b-slider').on('afterChange', function () {
    var currIndex = $(this).find('.slick-current').attr('data-slick-index');
    var navSlide = $('.b-slider__nav').find('.slick-slide');

    navSlide.each(function(navSlide) {
     
      var slideIndex = $(this).attr('data-slick-index');
       if (slideIndex == currIndex) {
        $(this).addClass('slick-current').siblings().removeClass('slick-current');
      }
    })
  });
}

/* FormValidation */
function formValidation () {
  var input = $('.f-contact__controls');

  input.on('keyup', function () {
    if($(this).val()) {
      $(this).addClass('filed');
    } else {
      $(this).removeClass('filed');
    }
    console.log('it work');
  });
}
