(function (window) {
  var KEY = (window.CD && window.CD.config && window.CD.config.storageKey) || "cd:prefs";

  window.CD = window.CD || {};
  window.CD.store = {
    get: function () {
      try {
        return JSON.parse(localStorage.getItem(KEY) || "{}");
      } catch (e) {
        return {};
      }
    },
    set: function (next) {
      localStorage.setItem(KEY, JSON.stringify(next));
    },
    merge: function (partial) {
      var existing = this.get();
      this.set(Object.assign({}, existing, partial));
    }
  };
})(window);
