$('.bubble__close').on('click', e => {
  e.preventDefault();
  $(e.currentTarget).parent().hide(0);
});

if ($(window).innerWidth() < 1200) {
  $('.bubble').each((i, el) => {
    const $this = $(el);

    $this.attr('style', `top: ${$this.attr('data-top')}; left: ${$this.attr('data-left')};`);
  });
}