$('.js-reviews-slider').slick({
  slidesToShow: 3,
  prevArrow: '<div class="reviews__slider-arrow slider__arrow slider__arrow--prev"></div>',
  nextArrow: '<div class="reviews__slider-arrow slider__arrow slider__arrow--next"></div>',
  responsive: [{
    breakpoint: 1199,
    settings: {
      arrows: false,
      infinite: false,
      slidesToShow: 1
    }
  }]
});

$('.js-partners-slider').slick({
  slidesToShow: 6,
  swipeToSlide: true,
  prevArrow: '<div class="reviews__partners-arrow slider__arrow slider__arrow--prev"></div>',
  nextArrow: '<div class="reviews__partners-arrow slider__arrow slider__arrow--next"></div>',
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase:'linear',
  speed: 10000,
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 3
    }
  }]
});