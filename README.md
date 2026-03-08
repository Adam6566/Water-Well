<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Municipal Water Well Manager v3</title>
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#0f172a">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/styles.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
<div class="shell">
<header class="topbar">
  <div>
    <div class="eyebrow">Municipal Utility</div>
    <h1>Water Well Manager</h1>
    <p>Simple tracking for runtime, production, reports, and backups.</p>
  </div>
  <div class="topbar-badge">v3.1</div>
</header>

<nav class="nav-tabs" aria-label="Primary navigation">
  <button id="nav-dashboard" onclick="showPage('dashboard')">Dashboard</button>
  <button id="nav-wells" onclick="showPage('wells')">Wells</button>
  <button id="nav-charts" onclick="showPage('charts')">Charts</button>
  <button id="nav-reports" onclick="showPage('reports')">Reports</button>
  <button id="nav-backup" onclick="showPage('backup')">Backup</button>
</nav>

<main id="app"></main>
</div>

<script src="js/storage.js"></script>
<script src="js/wells.js"></script>
<script src="js/ui.js"></script>
<script src="js/charts.js"></script>
<script src="js/reports.js"></script>
<script src="js/backup.js"></script>
<script src="js/app.js"></script>
</body>
</html>
