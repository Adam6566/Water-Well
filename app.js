:root{
  --bg:#f4f7fb;
  --surface:#ffffff;
  --surface-soft:#f8fafc;
  --line:#dbe4f0;
  --line-strong:#c4d2e3;
  --text:#122033;
  --muted:#5f7187;
  --primary:#1f6feb;
  --primary-soft:#eaf2ff;
  --shadow:0 18px 40px rgba(15, 23, 42, .08);
  --radius:18px;
}

*{box-sizing:border-box}

html,body{margin:0;padding:0}

body{
  font-family:Inter, Arial, Helvetica, sans-serif;
  background:linear-gradient(180deg,#eef4fb 0%, #f8fbff 220px, #f4f7fb 100%);
  color:var(--text);
}

.shell{
  max-width:1180px;
  margin:0 auto;
  padding:24px;
}

.topbar{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:16px;
  padding:24px 28px;
  background:linear-gradient(135deg,#0f172a 0%, #163150 100%);
  color:#fff;
  border-radius:24px;
  box-shadow:var(--shadow);
}

.eyebrow{
  font-size:12px;
  font-weight:700;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:#9cc2ff;
  margin-bottom:10px;
}

.topbar h1{
  margin:0;
  font-size:32px;
  line-height:1.1;
}

.topbar p{
  margin:10px 0 0;
  color:rgba(255,255,255,.78);
  max-width:620px;
}

.topbar-badge{
  padding:10px 14px;
  border-radius:999px;
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.15);
  font-weight:700;
  white-space:nowrap;
}

.nav-tabs{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  padding:16px 0 10px;
}

button{
  border:none;
  border-radius:12px;
  cursor:pointer;
  transition:.18s ease;
  font:inherit;
}

.nav-tabs button,
.btn{
  padding:11px 16px;
  background:var(--surface);
  color:var(--text);
  border:1px solid var(--line);
  box-shadow:0 1px 1px rgba(15,23,42,.02);
}

.nav-tabs button:hover,
.btn:hover{
  transform:translateY(-1px);
  border-color:var(--line-strong);
}

.nav-tabs button.active{
  background:var(--primary);
  color:#fff;
  border-color:var(--primary);
}

main{
  padding-top:8px;
}

.grid{
  display:grid;
  gap:18px;
}

.grid.stats{
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
}

.grid.wells{
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
}

.card{
  background:var(--surface);
  border:1px solid var(--line);
  border-radius:var(--radius);
  padding:22px;
  box-shadow:var(--shadow);
}

.card.soft{
  background:var(--surface-soft);
}

.section-title{
  margin:0 0 6px;
  font-size:24px;
}

.section-subtitle,
.muted{
  color:var(--muted);
}

.stat-card h3{
  margin:0;
  font-size:14px;
  color:var(--muted);
  font-weight:600;
}

.stat-value{
  margin-top:10px;
  font-size:30px;
  font-weight:800;
  letter-spacing:-.03em;
}

.stat-note{
  margin-top:8px;
  color:var(--muted);
  font-size:13px;
}

.well-card{
  display:flex;
  flex-direction:column;
  gap:14px;
}

.well-card-top{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:10px;
}

.well-chip{
  padding:7px 10px;
  border-radius:999px;
  background:var(--primary-soft);
  color:var(--primary);
  font-size:12px;
  font-weight:700;
}

.well-card h3,
.card h2,
.card h1{
  margin:0;
}

.kpi-row{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
}

.kpi{
  padding:12px;
  background:var(--surface-soft);
  border:1px solid var(--line);
  border-radius:14px;
}

.kpi-label{
  font-size:12px;
  color:var(--muted);
  margin-bottom:6px;
}

.kpi-value{
  font-size:20px;
  font-weight:700;
}

.input-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:14px;
}

label{
  display:block;
  font-size:13px;
  font-weight:600;
  color:var(--muted);
  margin-bottom:8px;
}

input, textarea{
  width:100%;
  padding:12px 14px;
  border-radius:12px;
  border:1px solid var(--line);
  background:#fff;
  color:var(--text);
  outline:none;
  font:inherit;
}

input:focus,textarea:focus{
  border-color:#8db7ff;
  box-shadow:0 0 0 4px rgba(31,111,235,.10);
}

.actions{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:10px;
}

.btn-primary{
  background:var(--primary);
  color:#fff;
  border:1px solid var(--primary);
}

.btn-secondary{
  background:#fff;
}

.table-wrap{
  overflow:auto;
  border:1px solid var(--line);
  border-radius:16px;
}

table{
  width:100%;
  border-collapse:collapse;
  background:#fff;
}

th,td{
  padding:14px 16px;
  text-align:left;
  border-bottom:1px solid #edf2f7;
}

th{
  font-size:12px;
  letter-spacing:.06em;
  text-transform:uppercase;
  color:var(--muted);
  background:#f8fafc;
}

tr:last-child td{
  border-bottom:none;
}

.empty-state{
  padding:26px;
  text-align:center;
  color:var(--muted);
  background:var(--surface-soft);
  border:1px dashed var(--line-strong);
  border-radius:16px;
}

.chart-card canvas{
  background:#fff;
  border-radius:14px;
  padding:6px;
}

.inline-note{
  margin-top:12px;
  font-size:13px;
  color:var(--muted);
}

@media (max-width: 720px){
  .shell{padding:16px}
  .topbar{padding:20px; border-radius:20px; flex-direction:column}
  .topbar h1{font-size:28px}
  .kpi-row,.input-grid{grid-template-columns:1fr}
}
