document.addEventListener("alpine:init", () => {
  Alpine.data("cdSidebar", () => ({
    collapsed: localStorage.getItem("cd:sidebar") === "1",
    toggle() {
      this.collapsed = !this.collapsed;
      localStorage.setItem("cd:sidebar", this.collapsed ? "1" : "0");
    }
  }));
});
