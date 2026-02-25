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
