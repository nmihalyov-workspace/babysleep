setTimeout(() => {
  $('.js-preloader').css('opacity', '0');

  setTimeout(() => {
    $('.js-preloader').remove();
  }, 500);
}, 3000);