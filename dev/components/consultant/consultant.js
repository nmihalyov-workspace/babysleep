$('.consultant__tabs-item').on('click', e => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const target = $this.attr('data-content');

  $('.consultant__tabs-item--active').removeClass('consultant__tabs-item--active');
  $this.addClass('consultant__tabs-item--active');

  $('.consultant__content').hide(0);
  $(`.consultant__content[data-content="${target}"]`).fadeIn(300);
});

$('.js-consultant-certificates').slick({
  slidesToShow: 4,
  infinite: false,
  prevArrow: '<div class="consultant__certificates-arrow slider__arrow slider__arrow--prev"></div>',
  nextArrow: '<div class="consultant__certificates-arrow slider__arrow slider__arrow--next"></div>',
  responsive: [{
    breakpoint: 1199,
    settings: {
      arrows: false,
      slidesToShow: 2
    }
  }]
});

const $consultantSlider = $('.js-consultant-slider');
$consultantSlider.on('init reInit afterChange', (event, slick, currentSlide) => {
  const i = (currentSlide ? currentSlide : 0) + 1;
  $('.consultant__slider-counter').text(i + ' / ' + slick.slideCount);
});
$consultantSlider.slick({
  infinite: false,
  prevArrow: '<div class="consultant__slider-arrow slider__arrow slider__arrow--prev"></div>',
  nextArrow: '<div class="consultant__slider-arrow slider__arrow slider__arrow--next"></div>'
});