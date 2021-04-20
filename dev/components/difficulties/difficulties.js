$('.js-difficulties').on('afterChange init', (e, i) => {
  $('.difficulties__slider-arrow.slider__arrow--prev p').text($(i.$slides[i.currentSlide]).find('.difficulties__slide').attr('data-prev'));
  $('.difficulties__slider-arrow.slider__arrow--next p').text($(i.$slides[i.currentSlide]).find('.difficulties__slide').attr('data-next'));
  if (i.currentSlide === 0) {
    $('.difficulties__slider-arrow.slider__arrow--prev').hide();
  } else if (i.currentSlide == i.$slides.length - 1) {
    $('.difficulties__slider-arrow.slider__arrow--next').hide();
  } else {
    $('.difficulties__slider-arrow.slider__arrow--prev').show();
    $('.difficulties__slider-arrow.slider__arrow--next').show();
  }
});

$('.js-difficulties').slick({
  infinite: false,
  prevArrow: '<div class="difficulties__slider-arrow slider__arrow slider__arrow--prev"><p></p></div>',
  nextArrow: '<div class="difficulties__slider-arrow slider__arrow slider__arrow--next"><p></p></div>',
  responsive: [{
    breakpoint: 1199,
    settings: 'unslick'
  }]
});

if ($(window).innerWidth() < 1200) {
  $('.difficulties__slider').on('scroll', e => {
    const $this = $(e.currentTarget);

    $this.addClass('difficulties--scrolled');
    $this.find('.difficulties__drag').fadeOut(150);
  });
}