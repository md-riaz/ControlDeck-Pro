$(document).on("cd:init", function () {
  $("[data-cd='stat']").each(function () {
    var value = $(this).data("value");
    if (value) {
      $(this).find("[data-cd='stat-value']").text(value);
    }
  });
});
