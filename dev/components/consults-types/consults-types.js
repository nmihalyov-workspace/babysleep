$('.consults-types__card-info-more').on('click', e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const $content = $this.closest('.consults-types__card').find('.consults-types__card-inner');

  if ($content.is(':visible')) {
    $this.text($this.attr('data-show'));
  } else {
    $this.text($this.attr('data-hide'));
  }

  $this.toggleClass('consults-types__card-info-more--active');

  $content.slideToggle(300);
});