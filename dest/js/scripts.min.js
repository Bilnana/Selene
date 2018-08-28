$( document ).ready(function() {
  beforeAfterSlider();
  mobileMenu();
  slickSlider();
});

// //Mobile menu
function mobileMenu () {
  var btnMenu = $('.header__inner').find('#nav-icon');

  btnMenu.on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  })
}

//Transitionss shapes
function beforeAfterSlider () {

  var black = $('.slider__black');
  var sliderArrow = $('.slider__black').before();

  $('.slider').on('mousemove touchmove',function(e){
    var offX  = (e.offsetX || e.clientX - black.offset().left);
    black.width(offX);
  });

   sliderArrow.on('click', function () {
    
  })
}

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


  $('.b-slider').on('afterChange', function() {
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





