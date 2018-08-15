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
  $('.t-slider').slick();
  console.log('hghgfhgfhgfhgf');
}





