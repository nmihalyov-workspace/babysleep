if ($(window).innerWidth() < 1200) {
  const $grid = $('.encyclopedia-tabs__grid');
  const current = $grid.attr('data-current');
  const offset = $('.encyclopedia-tabs__item').width() * current;

  if (current !== 0) {
    $grid.scrollLeft(offset + 30);
  }
}