if ($(window).innerWidth() < 1200) {
  $('.footer__map-heading').on('click', e => {
    const $this = $(e.currentTarget);

    if ($this.hasClass('footer__map-heading--active')) {
      $this.parent().find('.footer__map-link').slideToggle(300);
    } else {
      $this.parent().find('.footer__map-link').css('display', 'block').hide(0).slideToggle(300);
    }
    $this.toggleClass('footer__map-heading--active');
  });
}