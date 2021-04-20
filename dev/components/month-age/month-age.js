$('.js-range').each((i, el) => {
  const $this = $(el);

  $this.ionRangeSlider({
    type: 'single',
    max: $this.attr('data-max'),
    min: $this.attr('data-min'),
    from: $this.attr('value'),
    values: JSON.parse($this.attr('data-value')),
    grid: true,
    grid_num: 1,
    step: 1,
    onFinish: data => {
      $('.month-age__result-content').hide(0)
      $(`.month-age__result-content[data-content="${data.from}"]`).fadeIn(300)
      if (data.from == $this.attr('data-min')) {
        $('.month-age__selected').text((data.from_value + ' месяцев').replace('<br>', ' '));
      } else {
        $('.month-age__selected').text(data.from_value.replace('<br>', ' '));
      }
    }
  });
});