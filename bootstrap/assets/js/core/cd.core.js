(function (window, document, $) {
  window.CD = window.CD || {};
  CD.config = { storageKey: "cd:prefs" };

  CD.util = {
    qs: function (sel, root) {
      return (root || document).querySelector(sel);
    },
    qsa: function (sel, root) {
      return Array.from((root || document).querySelectorAll(sel));
    }
  };

  CD.init = function () {
    $(document).trigger("cd:init");
  };

  $(CD.init);
})(window, document, jQuery);
