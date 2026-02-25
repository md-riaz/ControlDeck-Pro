import Alpine from "alpinejs";
import "./stores/prefs";

window.cdApp = function () {
  return {
    theme: localStorage.getItem("cd:theme") || "light",
    sidebarCollapsed: localStorage.getItem("cd:sidebar") === "1",
    open: { dashboard: true },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("cd:theme", this.theme);
      document.documentElement.dataset.theme = this.theme;
    },
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
      localStorage.setItem("cd:sidebar", this.sidebarCollapsed ? "1" : "0");
    }
  };
};

Alpine.start();
