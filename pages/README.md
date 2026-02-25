# ControlDeck Pro – Page Blueprints

All pages share AppShell + PageHeader + cards/forms/tables. Hooks and names stay identical across Bootstrap and Tailwind stacks.

## Template Names
page-dashboard-v1, page-dashboard-v2, page-widgets, page-ui-general, page-ui-icons, page-ui-modals, page-ui-timeline, page-form-general, page-form-advanced, page-form-editors, page-table-simple, page-table-datatables, page-chart-line, page-chart-bar, page-chart-pie, page-mailbox-inbox, page-mailbox-compose, page-mailbox-read, page-calendar, page-invoice, page-profile, page-auth-login, page-auth-register, page-auth-lockscreen, page-error-404, page-error-500, page-blank.

## Layout Composition
- AppShell (Topbar + Sidebar) is present for all pages except auth/error, which use AuthShell (no sidebar).
- PageHeader always shows title, breadcrumb, and actions.
- Content uses Cards, StatTiles, DataTables, FormSections, or specialized composites (Timeline, MailList, Calendar).
- States: loading/empty/error blocks are placed inside the main card when data is not ready.

## Blueprints
- Dashboard v1: StatTile ×4, Chart card, DataTable + ActivityFeed. Sample stats JSON: `{"label":"New Orders","value":150}`.
- Dashboard v2: WidgetContainer grid (12-col, draggable), Timeline, mini Calendar.
- Widgets page: Grid of CD-Card variants demonstrating badges, alerts, progress.
- UI General: Buttons, Alerts, Progress, Modals trigger, Tabs inside cards.
- UI Icons: Card + icon grid (SVG or font) with filter input.
- Timeline page: CD-Timeline within Card. Sample data: `[{"time":"10:00","title":"User Registered"}]`.
- Forms General: CD-FormSection blocks with Input/Select/Switch/Checkbox.
- Forms Advanced: Adds date range picker, file upload, rich text editor, masked inputs.
- Forms Editors: WYSIWYG demo in FormSection.
- Tables Simple: Static CD-DataTable.
- Tables DataTables: CD-DataTable with toolbar (search, filters, column visibility, bulk actions), server pagination UI.
- Charts (line/bar/pie): PageHeader + Card with `<div data-cd="chart" data-chart-type="line|bar|pie">`.
- Mailbox Inbox: Sidebar folders + CD-MailList + pagination.
- Mailbox Compose: FormSection with editor + attachments.
- Mailbox Read: MailViewer + action buttons (reply/archive).
- Calendar: CD-Calendar grid + event sidebar (FilterBar for calendars).
- Invoice: CD-Invoice card with header, line items table, totals summary.
- Profile: CD-ProfileCard + Tabs (Activity, Settings) + FormSection for preferences.
- Auth pages: AuthShell with LoginForm / RegisterForm / Lockscreen (centered card).
- Error 404/500: CD-ErrorState centered with action button to go home.
- Blank: AppShell + PageHeader + empty card placeholder.

## Data Hooks and States
- DataTable: search `data-cd="table-search"`, pagination `data-cd="table-pagination"`, toolbar `data-cd="table-container"`.
- Widgets: each widget uses `data-cd="widget"` with header actions (collapse, expand, refresh).
- Density: set `--cd-density` on `<body>` or root to switch compact/default/spacious.
- Theme: apply `data-theme="dark"` to root for dark mode; tokens swap automatically.

## Sample Data Structures
- Stats: `[{ "label": "New Orders", "value": 150 }]`
- Timeline: `[{ "time": "12:00", "title": "Payment Received", "meta": "Invoice #1024" }]`
- Mail item: `[{ "from": "Jane", "subject": "Q1 Report", "status": "unread", "time": "10:20" }]`
- Invoice: `{ "number":"INV-1001","items":[{"label":"Service","qty":1,"price":199}], "totals": {"subtotal":199,"tax":19.9,"grand":218.9} }`

## Behavior Notes
- Sidebar toggle persists via localStorage (`cd:sidebar`), theme via `cd:theme`, density via `cd:density`.
- JS modules bind only to data-cd hooks; no hidden selectors to keep AdminLTE 2 clarity.
- Right-side contextual panels use CD-Drawer; mobile uses the same hook.

Use these blueprints to generate consistent pages in either stack without inventing new structures.

---

## Complete File Inventory

| Canonical Name | Bootstrap | Tailwind |
|---|---|---|
| `page-dashboard-v1` | `bootstrap/dashboard.html` | `tailwind/index.html` |
| `page-dashboard-v2` | `bootstrap/dashboard2.html` | `tailwind/dashboard2.html` |
| `page-widgets` | `bootstrap/widgets.html` | `tailwind/widgets.html` |
| `page-ui-general` | `bootstrap/ui-general.html` | `tailwind/ui-general.html` |
| `page-ui-icons` | `bootstrap/ui-icons.html` | `tailwind/ui-icons.html` |
| `page-ui-modals` | `bootstrap/ui-modals.html` | `tailwind/ui-modals.html` |
| `page-ui-timeline` | `bootstrap/ui-timeline.html` | `tailwind/ui-timeline.html` |
| `page-form-general` | `bootstrap/form-general.html` | `tailwind/form-general.html` |
| `page-form-advanced` | `bootstrap/form-advanced.html` | `tailwind/form-advanced.html` |
| `page-form-editors` | `bootstrap/form-editors.html` | `tailwind/form-editors.html` |
| `page-table-simple` | `bootstrap/table-simple.html` | `tailwind/table-simple.html` |
| `page-table-datatables` | `bootstrap/table-datatables.html` | `tailwind/table-datatables.html` |
| `page-chart-line` | `bootstrap/chart-line.html` | `tailwind/chart-line.html` |
| `page-chart-bar` | `bootstrap/chart-bar.html` | `tailwind/chart-bar.html` |
| `page-chart-pie` | `bootstrap/chart-pie.html` | `tailwind/chart-pie.html` |
| `page-mailbox-inbox` | `bootstrap/mailbox-inbox.html` | `tailwind/mailbox-inbox.html` |
| `page-mailbox-compose` | `bootstrap/mailbox-compose.html` | `tailwind/mailbox-compose.html` |
| `page-mailbox-read` | `bootstrap/mailbox-read.html` | `tailwind/mailbox-read.html` |
| `page-calendar` | `bootstrap/calendar.html` | `tailwind/calendar.html` |
| `page-invoice` | `bootstrap/invoice.html` | `tailwind/invoice.html` |
| `page-profile` | `bootstrap/profile.html` | `tailwind/profile.html` |
| `page-auth-login` | `bootstrap/login.html` | `tailwind/login.html` |
| `page-auth-register` | `bootstrap/register.html` | `tailwind/register.html` |
| `page-auth-lockscreen` | `bootstrap/lockscreen.html` | `tailwind/lockscreen.html` |
| `page-error-404` | `bootstrap/404.html` | `tailwind/404.html` |
| `page-error-500` | `bootstrap/500.html` | `tailwind/500.html` |
| `page-blank` | `bootstrap/blank.html` | `tailwind/blank.html` |
| `page-users` | `bootstrap/users.html` | `tailwind/users.html` |
