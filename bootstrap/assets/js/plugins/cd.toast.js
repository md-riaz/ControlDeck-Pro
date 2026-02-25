(function ($, window) {
  function renderToast(opts) {
    var host = $("[data-cd='toast-host']");
    if (!host.length) return;
    var toast = $("<div/>", {
      class: "cd-toast alert alert-" + (opts.variant || "info"),
      text: opts.message || ""
    });
    host.append(toast);
    setTimeout(function () {
      toast.fadeOut(300, function () {
        $(this).remove();
      });
    }, opts.duration || 2500);
  }

  window.CD = window.CD || {};
  window.CD.toast = renderToast;
})(jQuery, window);
