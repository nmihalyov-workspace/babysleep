$(document).on('click', e => {
  // hide dropdown on outer click
  if(!$(e.target).closest('.header-bottom__menu').length && !$(e.target).hasClass('header-bottom__nav-link')) {
    $('.header-bottom__menu').slideUp(300);
  }
});

$('.js-header-slider').slick({
  autoplay: true,
  autoplaySpeed: 7000,
  prevArrow: '<div class="header-top__slider-arrow header-top__slider-arrow--prev">→</div>',
  nextArrow: '<div class="header-top__slider-arrow header-top__slider-arrow--next">→</div>'
});

$('.header-bottom__nav-link').on('click', e => {
  e.preventDefault();
  $('.header-bottom__menu').hide(0);

  const $menu = $(`.header-bottom__menu[data-menu="${$(e.currentTarget).attr('data-menu')}"]`);

  if ($menu.is(':visible')) {
    $menu.slideUp(300);
  } else {
    $menu.css('display', 'flex').hide(0).slideDown(300);
  }
});

$('.header-middle__info-action[data-icon="burger"]').on('click', e => {
  $(e.currentTarget).toggleClass('header-middle__info-action--active');
  
  $('.header').toggleClass('header--active');
  $('.header__menu').slideToggle(500);
});

$('.header__menu-map-heading').on('click', e => {
  const $this = $(e.currentTarget);
  const $map = $this.parent();
  
  if ($map.hasClass('header__menu-map--active')) {
    $this.parent().find('.header__menu-map-link').slideToggle(300);
  } else {
    $('.header__menu-map').removeClass('header__menu-map--active');
    $('.header__menu-map-link').slideUp(300);
    $this.parent().find('.header__menu-map-link').css('display', 'block').hide(0).slideToggle(300);
  }
  $map.toggleClass('header__menu-map--active');
});