let topOffset = 0;

const hideOverflow = () => {
  topOffset = window.scrollY;

  $('body').css({
    position: 'fixed',
    marginTop: `${-topOffset}px`
  });
};

const showOverflow = () => {
  $('body').css({
    position: 'static',
    marginTop: '0'
  });

  window.scrollTo(0, topOffset);
};

const closePopup = (e, $this) => {
  if(!$(e.target).closest('.popup__window').length || !$this.hasClass('js-popup')) {
    showOverflow();
  
    $this.closest('.js-popup').hide(0);
	}
};

const openPopup = ($popup) => {
  hideOverflow();
  
  $popup.fadeIn(300);
};

$('body').on('click', '.js-open-popup', function (e) {
  e.preventDefault();

  const target = $(this).attr('data-popup');
  const $popup = $(`.js-popup[data-popup="${target}"]`);
  openPopup($popup);
});

$('.js-close-popup').on('click', function (e) {
  closePopup(e, $(this));
});

$('.popup__auth-tabs-item').on('click', e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr('data-tab');

  $('.popup__auth-tabs-item--current').removeClass('popup__auth-tabs-item--current');
  $this.addClass('popup__auth-tabs-item--current');
  
  $('.popup__auth-content--current').removeClass('popup__auth-content--current');
  $(`.popup__auth-content[data-tab="${target}"]`).addClass('popup__auth-content--current');
});