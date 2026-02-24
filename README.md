# ControlDeck Pro

> A modular Admin Operating System — designed for operators, not spectators.

ControlDeck Pro is a production-quality admin panel design system with two complete parallel front-end stacks (Bootstrap 5 + jQuery and TailwindCSS + Alpine.js), unified by a single token system via CSS custom properties.

---

## Preview

All pages open directly in a browser with **no build step required**.

### Bootstrap Stack (`bootstrap/`)

| Page | Description |
|------|-------------|
| `index.html` | **Dashboard** — Collapsible sidebar, sticky topbar with search/notifications/user-menu, breadcrumb, 4 KPI stat cards (Users, Revenue, Orders, Sessions), filterable data table with bulk-select, pagination, density & dark-mode switchers |
| `users.html` | **Users Management** — Same shell, filter bar (search + role + status dropdowns), 15-row data table with avatar + name, role/status badges, edit/delete action buttons, pagination |
| `login.html` | **Sign In** — Centered card, logo/brand area, email + password with show/hide toggle, remember-me checkbox, form validation with error state, loading spinner, Google/GitHub SSO placeholders, dark mode toggle |

### Tailwind Stack (`tailwind/`)

| Page | Description |
|------|-------------|
| `index.html` | **Dashboard** — Alpine.js-powered app shell with reactive sidebar, dark mode, density switcher, animated sub-menu dropdowns, same KPI cards and data table with Alpine.js reactive filtering and row selection |
| `users.html` | **Users Management** — Alpine.js reactive table with live search, role/status filters, bulk selection counter, 15 sample users |
| `login.html` | **Sign In** — Alpine.js form with reactive validation, password visibility toggle, error transition animation, SSO buttons |

---

## Features

- 🎨 **Unified Design Token System** — single `tokens/tokens.json` source powering CSS variables in `shared/css/variables.css`
- 🌗 **Dark Mode** — toggle on every page, persists via `data-theme` attribute
- 📐 **Density Switcher** — compact / comfortable / spacious via `data-density`
- 🗂️ **Collapsible Sidebar** — collapses to icon-only rail with smooth transition
- 🔗 **Multi-level Navigation** — expandable sub-menus with chevron animation
- 📊 **KPI Stat Cards** — icon, value, label, trend badge (up/down)
- 🗃️ **Data Tables** — sortable headers, search filter, status badges, bulk checkbox, pagination
- 🔔 **Notification Panel** — bell icon with count badge, dropdown list
- 👤 **User Dropdown** — topbar user menu with profile/settings/sign-out
- ✅ **Form Validation** — inline error messages, loading states, animated feedback
- 📱 **Responsive** — mobile sidebar overlay on small screens

---

## File Structure

```
ControlDeck-Pro/
├── tokens/
│   └── tokens.json              # Design token source of truth
├── shared/
│   └── css/
│       └── variables.css        # CSS custom properties contract
├── bootstrap/
│   ├── index.html               # Dashboard (Bootstrap 5 + jQuery)
│   ├── users.html               # Users management page
│   └── login.html               # Login / sign-in page
├── tailwind/
│   ├── index.html               # Dashboard (Tailwind CSS + Alpine.js)
│   ├── users.html               # Users management page
│   └── login.html               # Login / sign-in page
└── README.md
```

---

## Getting Started

No build step needed. Open any HTML file directly in a browser:

```bash
# macOS
open bootstrap/index.html
open tailwind/index.html

# Linux
xdg-open bootstrap/index.html

# Windows
start bootstrap/index.html
```

Or serve with any static file server:

```bash
npx serve .
# then visit http://localhost:3000/bootstrap/index.html
```

**Demo credentials** (for the login form simulation):
- Email: `admin@example.com` → redirects to dashboard
- Any other email → shows invalid credentials error

---

## Design Token Reference

Tokens are defined in `tokens/tokens.json` and exposed as CSS variables via `shared/css/variables.css`.

| Token | CSS Variable | Value |
|-------|-------------|-------|
| Brand primary | `--cd-primary` | `#3B82F6` |
| Background | `--cd-bg` | `#F8FAFC` |
| Surface | `--cd-surface` | `#FFFFFF` |
| Surface 2 | `--cd-surface-2` | `#F1F5F9` |
| Border | `--cd-border` | `#E2E8F0` |
| Text | `--cd-text` | `#0F172A` |
| Text muted | `--cd-text-muted` | `#475569` |
| Text subtle | `--cd-text-subtle` | `#94A3B8` |
| Success | `--cd-success` | `#16A34A` |
| Warning | `--cd-warning` | `#F59E0B` |
| Danger | `--cd-danger` | `#DC2626` |
| Info | `--cd-info` | `#0EA5E9` |
| Sidebar width | `--cd-sidebar-width` | `260px` |
| Topbar height | `--cd-topbar-height` | `60px` |
| Radius MD | `--cd-radius-md` | `12px` |

Dark mode overrides are applied via `[data-theme="dark"]`.
Density scaling via `[data-density="compact|spacious"]`.

---

## Component Hooks Reference

All interactive elements use `data-cd` attributes as semantic hooks:

| Attribute | Element | Purpose |
|-----------|---------|---------|
| `data-cd="app"` | Root wrapper | App shell container |
| `data-cd="sidebar"` | `<aside>` | Sidebar panel; gets `.collapsed` class |
| `data-cd="sidebar-toggle"` | `<button>` | Toggles sidebar open/closed |
| `data-cd="nav-tree"` | `<nav>` | Navigation tree container |
| `data-cd="topbar"` | `<header>` | Sticky top bar |

---

## CDN Dependencies

**Bootstrap Stack**
- Bootstrap 5.3 CSS + JS — `cdn.jsdelivr.net/npm/bootstrap@5.3.3`
- Bootstrap Icons 1.11 — `cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3`

**Tailwind Stack**
- Tailwind CSS Play CDN — `cdn.tailwindcss.com`
- Alpine.js 3.14 — `cdn.jsdelivr.net/npm/alpinejs@3.14.1`

**Shared**
- Inter font — Google Fonts