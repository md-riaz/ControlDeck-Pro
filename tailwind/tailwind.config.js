module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "cd-bg": "var(--cd-bg)",
        "cd-surface": "var(--cd-surface)",
        "cd-surface-2": "var(--cd-surface-2)",
        "cd-border": "var(--cd-border)",
        "cd-text": "var(--cd-text)",
        "cd-text-muted": "var(--cd-text-muted)",
        "cd-primary": "var(--cd-primary)",
        "cd-success": "var(--cd-success)",
        "cd-warning": "var(--cd-warning)",
        "cd-danger": "var(--cd-danger)",
        "cd-info": "var(--cd-info)"
      },
      borderRadius: {
        cds: "var(--cd-radius-sm)",
        cdm: "var(--cd-radius-md)",
        cdl: "var(--cd-radius-lg)"
      },
      boxShadow: {
        cds: "var(--cd-shadow-sm)",
        cdm: "var(--cd-shadow-md)"
      },
      fontFamily: {
        cd: "var(--cd-font)"
      }
    }
  }
};
