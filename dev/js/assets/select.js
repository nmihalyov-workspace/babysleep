$('.js-select').each((i, el) => {
  $(el).select2({
    placeholder: $(el).attr('data-placeholder'),
    minimumResultsForSearch: -1
  });
});