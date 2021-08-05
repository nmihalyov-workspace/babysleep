$('.press__tabs-item').on('click', e => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const target = $this.attr('data-content');

  $('.press__tabs-item--active').removeClass('press__tabs-item--active');
  $this.addClass('press__tabs-item--active');

  $('.press__content').hide(0);
  $(`.press__content[data-content="${target}"]`).fadeIn(300);
});