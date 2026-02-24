(function ($) {
  $(document).on("click", "[data-cd='modal-toggle']", function (e) {
    e.preventDefault();
    var target = $(this).data("target");
    $(target).toggleClass("show");
  });
})(jQuery);
