$('.profile__children-add').on('click', e => {
  const $row = $(`<div class="profile__children-row">
    <input class="input profile__children-input" type="text" name="childrenBirthdate" placeholder="Дата рождения ребенка"/><a class="button button--quoternary profile__children-btn" href="#">Сон ребенка 0-3 месяца</a>
  </div>`);

  $row.insertBefore($(e.currentTarget));
});

$('.profile__aside-link').on('click', e => {
  const $this = $(e.currentTarget);
  const target = $this.attr('data-tab');

  if ($(window).innerWidth() < 1200) {
   $('.profile__aside').hide(0); 
   $('.profile__main').fadeIn(300);

   $('.profile__heading-title').addClass('profile__heading-title--back');
  }

  $('.profile__aside-link--active').removeClass('profile__aside-link--active');
  $this.addClass('profile__aside-link--active');
  $('.profile__content').hide(0);
  $(`.profile__content[data-content="${target}"]`).fadeIn(300);
});

$('.profile__heading-title').on('click', e => {
  const $this = $(e.currentTarget);

  if ($(window).innerWidth() < 1200) {
    $this.removeClass('profile__heading-title--back');

    $('.profile__main').hide(0);
    $('.profile__aside').fadeIn(300);
  }
});

$('.js-profile-consult').on('click', () => {
  $('.profile__consult-main').hide(0);
  $('.profile__consult-main--form').fadeIn(300);
});