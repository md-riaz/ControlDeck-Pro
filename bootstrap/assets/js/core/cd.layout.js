(function ($, window) {
  var KEY = (window.CD && window.CD.config && window.CD.config.storageKey) || "cd:prefs";

  function loadPrefs() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function savePrefs(prefs) {
    localStorage.setItem(KEY, JSON.stringify(prefs));
  }

  $(document).on("click", "[data-cd='sidebar-toggle']", function () {
    $("body").toggleClass("cd-sidebar-collapsed");
    var prefs = loadPrefs();
    prefs.sidebarCollapsed = $("body").hasClass("cd-sidebar-collapsed");
    savePrefs(prefs);
  });

  $(document).on("cd:init", function () {
    var prefs = loadPrefs();
    if (prefs.sidebarCollapsed) {
      $("body").addClass("cd-sidebar-collapsed");
    }
  });
})(jQuery, window);
