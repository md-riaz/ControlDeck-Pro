document.addEventListener("alpine:init", () => {
  Alpine.store("prefs", {
    density: localStorage.getItem("cd:density") || "comfortable",
    setDensity(mode) {
      this.density = mode;
      var map = { compact: 0.88, comfortable: 1, spacious: 1.12 };
      document.documentElement.style.setProperty("--cd-density", map[mode] || 1);
      localStorage.setItem("cd:density", mode);
    }
  });
});
