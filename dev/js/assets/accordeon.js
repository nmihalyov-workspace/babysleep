$('.js-accordeon-trigger').on('click', e => {
  const $this = $(e.currentTarget);

  $this.closest('.js-accordeon').find('.js-accordeon-trigger').not($this).parent().removeClass('active').find('.js-accordeon-trigger').next().slideUp(300);
  $this.parent().toggleClass('active').find('.js-accordeon-trigger').next().slideToggle(300);
});