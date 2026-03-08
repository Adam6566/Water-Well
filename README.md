
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<title>Municipal Water Well Manager v3</title>

<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#0a1628">

<link rel="stylesheet" href="css/styles.css">

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</head>

<body>

<header>
<h1>Municipal Water Well Manager</h1>
<p>Runtime • Meter • Efficiency • Reports</p>
</header>

<nav>
<button onclick="showPage('dashboard')">Dashboard</button>
<button onclick="showPage('wells')">Wells</button>
<button onclick="showPage('charts')">Charts</button>
<button onclick="showPage('reports')">Reports</button>
<button onclick="showPage('backup')">Backup</button>
</nav>

<main id="app"></main>

<script src="js/storage.js"></script>
<script src="js/wells.js"></script>
<script src="js/ui.js"></script>
<script src="js/charts.js"></script>
<script src="js/reports.js"></script>
<script src="js/backup.js"></script>
<script src="js/app.js"></script>

</body>
</html>
