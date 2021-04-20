$('.encyclopedia-filter__head').on('click', e => {
  $(e.currentTarget).toggleClass('encyclopedia-filter__head--active');
  $('.encyclopedia-filter__inner').slideToggle(300);
});

$('.encyclopedia-filter__item').on('click', e => {
  $(e.currentTarget).toggleClass('encyclopedia-filter__item--active');
  $('.encyclopedia-filter__head-themes-count').text($('.encyclopedia-filter__item--active').length);
});

$('.encyclopedia-filter__btn').on('click', () => {
  $('.encyclopedia-filter__head').toggleClass('encyclopedia-filter__head--active');
  $('.encyclopedia-filter__inner').slideToggle(300);
});