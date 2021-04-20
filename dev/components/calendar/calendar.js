$('.calendar__table-popup-close').on('click', e => {
  $(e.currentTarget).parent().hide(0);
});

$('.calendar__table-cell[data-week="hard"]').on('click', e => {
  const $this = $(e.currentTarget);
  const target = $this.attr('data-popup');

  $('.calendar__table-popup').hide(0);
  if ($(window).innerWidth() > 1199) {
    $(`.calendar__table-popup[data-popup="${target}"]`).fadeIn(300);
  } else {
    $(`.calendar__table-popup[data-popup="${target}"]`).css('top', $this.position().top - 15 + 'px').fadeIn(300);
  }
});