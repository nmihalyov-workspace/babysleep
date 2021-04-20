$('.consults-steps__card-accordeon').on('click', e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const $content = $this.siblings('.consults-steps__card-content');

  if ($content.is(':visible')) {
    $this.text($this.attr('data-show'));
  } else {
    $this.text($this.attr('data-hide'));
  }

  $content.slideToggle(300);
});