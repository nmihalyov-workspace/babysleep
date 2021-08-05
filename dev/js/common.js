window.onload = () => {

	@@include('../components/preloader/preloader.js')

  @@include('assets/accordeon.js')
  @@include('assets/select.js')
  @@include('assets/bubble.js')

  @@include('../components/_ui/radio/radio.js')
  @@include('../components/_ui/popup/popup.js')

  @@include('../components/header/header.js')
  @@include('../components/encyclopedia-tabs/encyclopedia-tabs.js')
  @@include('../components/helpful/helpful.js')
  @@include('../components/reviews/reviews.js')
  @@include('../components/difficulties/difficulties.js')
  @@include('../components/footer/footer.js')
  @@include('../components/consults-specialists/consults-specialists.js')
  @@include('../components/consults-steps/consults-steps.js')
  @@include('../components/consults-types/consults-types.js')
  @@include('../components/encyclopedia-toggles/encyclopedia-toggles.js')
  @@include('../components/encyclopedia-filter/encyclopedia-filter.js')
  @@include('../components/encyclopedia-article/encyclopedia-article.js')
  @@include('../components/calendar/calendar.js')
  @@include('../components/month-age/month-age.js')
  @@include('../components/profile/profile.js')
  @@include('../components/consultant/consultant.js')
  @@include('../components/press/press.js')

  if ($(window).innerWidth() > 1199) {

    $('.js-child-more').on('click', e => {
      $($(e.currentTarget).parent().find('.js-form-row input[name="date"]')[0]).clone().insertBefore($(e.currentTarget).parent().find('button')).val('');
    });
  } {
    $('.js-child-more').on('click', e => {
      $($(e.currentTarget).parent().find('input[name="date"]')[0]).clone().insertBefore($(e.currentTarget)).val('');
    });
  }
}