$('.encyclopedia-toggles__item').on('click', e => {
  $('.encyclopedia-toggles__item--active').removeClass('encyclopedia-toggles__item--active');
  $(e.currentTarget).addClass('encyclopedia-toggles__item--active');
});