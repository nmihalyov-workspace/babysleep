$('.js-specialists-slider').slick({
  slidesToShow: 3,
  prevArrow: '<div class="slider__arrow slider__arrow--prev"></div>',
  nextArrow: '<div class="slider__arrow slider__arrow--next"></div>',
  responsive: [{
    breakpoint: 1199,
    settings: {
      arrows: false,
      infinite: false,
      slidesToShow: 1
    }
  }]
});