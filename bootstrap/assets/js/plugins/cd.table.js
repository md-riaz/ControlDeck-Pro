(function ($) {
  $(document).on("input", "[data-cd='table-search']", function () {
    var value = $(this).val().toLowerCase();
    var table = $(this).closest("[data-cd='table-container']").find("table[data-cd='table']");
    table.find("tbody tr").each(function () {
      var text = $(this).text().toLowerCase();
      $(this).toggle(text.indexOf(value) > -1);
    });
  });
})(jQuery);
