# ControlDeck Pro – Component Spec Cards

Shared rules:
- data-cd hooks are the contract for both stacks.
- Density is applied via `--cd-density` (0.88 compact, 1 comfortable, 1.12 spacious).
- Tokens come from `tokens.json` compiled to `tokens.css`.

## 1. CD-AppShell
Hooks: `data-cd="app"`, `data-cd="sidebar"`, `data-cd="sidebar-toggle"`

Bootstrap:
```html
<div class="cd-app" data-cd="app">
  <aside class="cd-sidebar" data-cd="sidebar">…</aside>
  <main class="cd-main">
    <header class="cd-topbar">…<button data-cd="sidebar-toggle">Toggle</button></header>
    <section class="cd-page-header">…</section>
    <div class="cd-content">…</div>
  </main>
<div>
```
Tailwind:
```html
<div class="cd-app" data-cd="app" x-data="cdApp()" :class="{'cd-sidebar-collapsed': sidebarCollapsed}">
  <aside class="cd-sidebar" data-cd="sidebar" x-data="cdSidebar()">…</aside>
  <main class="cd-main">…</main>
</div>
```
Notes: Sidebar is persistent on desktop, collapsible on toggle.

## 2. CD-Sidebar
Hooks: `data-cd="nav-tree"`, `data-cd="nav-item"`

Bootstrap:
```html
<ul class="cd-nav" data-cd="nav-tree">
  <li class="cd-nav-item" data-cd="nav-item"><a class="cd-nav-link active" href="#">Dashboard</a></li>
</ul>
```
Tailwind:
```html
<ul class="space-y-2" data-cd="nav-tree">
  <li data-cd="nav-item"><a class="cd-nav-link" data-active="true" href="#">Dashboard</a></li>
</ul>
```
Notes: Supports three-level nesting, badges with `.cd-nav-badge`.

## 3. CD-Topbar
Hooks: `data-cd="search"`, `data-cd="topbar-actions"`

Bootstrap:
```html
<header class="cd-topbar">
  <div data-cd="search"><input class="form-control" type="search"></div>
  <div data-cd="topbar-actions"><button class="btn btn-light" data-cd="sidebar-toggle">Toggle</button></div>
</header>
```
Tailwind:
```html
<header class="cd-topbar">
  <div data-cd="search"><input class="border rounded-cds px-3 py-2" type="search"></div>
  <div data-cd="topbar-actions"><button class="px-3 py-2" @click="toggleSidebar()">Toggle</button></div>
</header>
```
Notes: Houses global actions, search, profile dropdown.

## 4. CD-PageHeader
Hooks: `data-cd="page-title"`, `data-cd="breadcrumb"`, `data-cd="page-actions"`

Bootstrap:
```html
<section class="cd-page-header">
  <div>
    <h1 class="h4" data-cd="page-title">Title</h1>
    <ol class="breadcrumb mb-0" data-cd="breadcrumb">…</ol>
  </div>
  <div data-cd="page-actions"><button class="btn btn-primary">Action</button></div>
</section>
```
Tailwind:
```html
<section class="cd-page-header">
  <div>
    <h1 class="text-lg font-semibold" data-cd="page-title">Title</h1>
    <div class="text-sm text-cd-text-muted" data-cd="breadcrumb">Home / Section</div>
  </div>
  <div data-cd="page-actions"><button class="px-3 py-2 bg-cd-primary text-white rounded-cds">Action</button></div>
</section>
```
Notes: Always precedes page body.

## 5. CD-Card
Hooks: `data-cd="card"`, `data-cd="card-collapse"`

Bootstrap:
```html
<div class="cd-card" data-cd="card">
  <div class="cd-card-header">
    <div>Title</div>
    <div class="cd-card-tools">
      <button class="btn btn-sm btn-light" data-cd="card-collapse">Collapse</button>
    </div>
  </div>
  <div class="cd-card-body">Content</div>
</div>
```
Tailwind:
```html
<div class="cd-card" data-cd="card">
  <div class="cd-card-header">
    <div>Title</div>
    <div class="cd-card-tools flex gap-2">
      <button class="px-2 py-1 border" data-cd="card-collapse">Collapse</button>
    </div>
  </div>
  <div class="cd-card-body">Content</div>
</div>
```
Notes: Variants via semantic badges, density-aware padding.

## 6. CD-StatTile
Hook: `data-cd="stat"`

Bootstrap:
```html
<div class="cd-card" data-cd="stat" data-value="150">
  <div class="cd-card-body">
    <div class="text-muted">Label</div>
    <div class="h3 mb-0" data-cd="stat-value">--</div>
  </div>
</div>
```
Tailwind:
```html
<div class="cd-card" data-cd="stat">
  <div class="cd-card-body">
    <div class="text-cd-text-muted text-sm">Label</div>
    <div class="text-2xl font-semibold" data-cd="stat-value">150</div>
  </div>
</div>
```
Notes: Small KPI card, supports refresh action in header if needed.

## 7. CD-DataTable
Hooks: `data-cd="table"`, `data-cd="table-search"`, `data-cd="table-pagination"`

Bootstrap:
```html
<div class="cd-card" data-cd="card">
  <div class="cd-card-header">
    <div>Title</div>
    <div class="cd-card-tools">
      <input class="form-control form-control-sm" data-cd="table-search" placeholder="Search">
    </div>
  </div>
  <div class="cd-card-body" data-cd="table-container">
    <div class="cd-table-toolbar">…filters/bulk actions…</div>
    <table class="cd-table" data-cd="table">…</table>
    <div data-cd="table-pagination">…pager…</div>
  </div>
</div>
```
Tailwind:
```html
<div class="cd-card" data-cd="card">
  <div class="cd-card-header">
    <div>Title</div>
    <div class="cd-card-tools"><input class="border rounded-cds px-2 py-1" data-cd="table-search" placeholder="Search"></div>
  </div>
  <div class="cd-card-body" data-cd="table-container">
    <div class="flex gap-2 mb-3 cd-table-toolbar">…</div>
    <table class="cd-table" data-cd="table">…</table>
    <div class="flex justify-between pt-3" data-cd="table-pagination">…</div>
  </div>
</div>
```
Notes: Supports server pagination, column visibility, bulk actions, sticky header, export.

## 8. CD-FormSection
Hook: `data-cd="form-section"`

Bootstrap:
```html
<section class="cd-card" data-cd="form-section">
  <div class="cd-card-header">Profile</div>
  <div class="cd-card-body">
    <div class="mb-3"><label class="form-label">Name</label><input class="form-control" type="text"></div>
  </div>
</section>
```
Tailwind:
```html
<section class="cd-card" data-cd="form-section">
  <div class="cd-card-header">Profile</div>
  <div class="cd-card-body space-y-4">
    <label class="block">
      <span class="text-sm text-cd-text-muted">Name</span>
      <input class="mt-1 w-full border rounded-cds px-3 py-2" type="text">
    </label>
  </div>
</section>
```
Notes: Grouped inputs with optional help and validation messages.

## 9–26. Additional Components (hooks + minimal markup)
- CD-Modal (`data-cd="modal"`): `<div class="modal" data-cd="modal"><div class="modal-dialog">…</div></div>` / Tailwind `<div class="fixed inset-0" data-cd="modal">…</div>`
- CD-Drawer (`data-cd="drawer"`): `<div class="offcanvas" data-cd="drawer">…</div>` / Tailwind `<aside class="fixed right-0" data-cd="drawer">…</aside>`
- CD-Tabs (`data-cd="tabs"`): `<ul class="nav nav-tabs" data-cd="tabs">…</ul>` / Tailwind `<div data-cd="tabs" class="flex border-b">…</div>`
- CD-Alert (`data-cd="alert"`): `<div class="alert alert-info" data-cd="alert">Message</div>` / Tailwind `<div class="rounded-cds px-3 py-2 bg-cd-info/10" data-cd="alert">Message</div>`
- CD-ToastHost (`data-cd="toast-host"`): `<div data-cd="toast-host"></div>` used by `CD.toast`.
- CD-Progress (`data-cd="progress"`): `<div class="progress" data-cd="progress"><div class="progress-bar" style="width:45%"></div></div>` / Tailwind `<div class="h-2 bg-cd-surface-2 rounded-cds" data-cd="progress"><div class="h-full bg-cd-primary w-1/2"></div></div>`
- CD-Badge (`data-cd="badge"`): `<span class="badge bg-success" data-cd="badge">Active</span>` / Tailwind `<span class="px-2 py-1 text-xs rounded-cds bg-cd-success/10 text-cd-success" data-cd="badge">Active</span>`
- CD-Avatar (`data-cd="avatar"`): `<img class="rounded-circle" data-cd="avatar" src="…">` / Tailwind `<img class="h-10 w-10 rounded-full" data-cd="avatar" src="…">`
- CD-FilterBar (`data-cd="filter-bar"`): `<div class="cd-table-toolbar" data-cd="filter-bar">…chips/actions…</div>` / Tailwind `<div class="flex gap-2" data-cd="filter-bar">…</div>`
- CD-Timeline (`data-cd="timeline"`): `<ul class="timeline" data-cd="timeline"><li>…</li></ul>` / Tailwind `<ul class="space-y-3" data-cd="timeline"><li class="flex gap-3">…</li></ul>`
- CD-ActivityFeed (`data-cd="activity-feed"`): `<ul class="list-unstyled" data-cd="activity-feed">…</ul>` / Tailwind `<ul class="space-y-2" data-cd="activity-feed">…</ul>`
- CD-MailList (`data-cd="mail-list"`): `<ul class="list-group" data-cd="mail-list"><li data-cd="mail-item">…</li></ul>` / Tailwind `<ul class="divide-y" data-cd="mail-list"><li class="py-3" data-cd="mail-item">…</li></ul>`
- CD-MailViewer (`data-cd="mail-viewer"`): `<article data-cd="mail-viewer">…</article>` / Tailwind same structure with utilities.
- CD-Calendar (`data-cd="calendar"`): `<div data-cd="calendar">calendar grid</div>` / Tailwind `<div class="grid" data-cd="calendar">…</div>`
- CD-Invoice (`data-cd="invoice"`): `<section data-cd="invoice">header + table + totals</section>` / Tailwind uses utility classes for the same layout.
- CD-ProfileCard (`data-cd="profile"`): `<div class="cd-card" data-cd="profile">avatar + meta</div>` / Tailwind `<div class="cd-card" data-cd="profile">…</div>`
- CD-ErrorState (`data-cd="error-state"`): `<div class="text-center" data-cd="error-state">404 message</div>` / Tailwind similar center block.
- CD-LoginForm (`data-cd="auth-login"`): `<form data-cd="auth-login">inputs + submit</form>` / Tailwind `<form class="space-y-4" data-cd="auth-login">…</form>`
- CD-RegisterForm (`data-cd="auth-register"`): same pattern as login.
- CD-Lockscreen (`data-cd="auth-lock"`): `<form data-cd="auth-lock">password + unlock</form>`
- CD-Chart (`data-cd="chart"`): `<div data-cd="chart" data-chart-type="line"></div>` / Tailwind same container ready for chart lib.
- CD-Kanban (`data-cd="kanban"`): `<div class="d-flex gap-3" data-cd="kanban"><div class="card">Column</div></div>` / Tailwind `<div class="flex gap-4" data-cd="kanban">…</div>`
- CD-WidgetContainer (`data-cd="widget"`): `<div class="cd-card" data-cd="widget">…</div>` / Tailwind same; intended for drag grid.

Notes: Each component inherits tokens and density; interactive behaviors attach via data-cd hooks rather than ad hoc selectors.
