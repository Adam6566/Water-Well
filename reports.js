function renderDashboard(){
  const totals=getSystemTotals()

  const topWells=[...WELLS]
    .map(w=>({well:w,...getWellTotals(w.id)}))
    .sort((a,b)=>b.gallons-a.gallons)
    .slice(0,3)
    .map(item=>`
      <div class="kpi">
        <div class="kpi-label">${item.well.name}</div>
        <div class="kpi-value">${formatNumber(item.gallons)}</div>
        <div class="muted">${formatNumber(item.hours)} hrs • ${item.records.length} entries</div>
      </div>
    `).join("")

  return `
  <div class="grid" style="gap:20px;">
    <section class="card soft">
      <h2 class="section-title">System dashboard</h2>
      <p class="section-subtitle">A clean overview of production and runtime across all municipal wells.</p>
    </section>

    <section class="grid stats">
      <div class="card stat-card">
        <h3>Total runtime</h3>
        <div class="stat-value">${formatNumber(totals.totalHours)}</div>
        <div class="stat-note">Hours logged across all wells</div>
      </div>
      <div class="card stat-card">
        <h3>Total gallons</h3>
        <div class="stat-value">${formatNumber(totals.totalGallons)}</div>
        <div class="stat-note">System production to date</div>
      </div>
      <div class="card stat-card">
        <h3>Efficiency</h3>
        <div class="stat-value">${formatNumber(totals.efficiency)}</div>
        <div class="stat-note">Gallons per runtime hour</div>
      </div>
      <div class="card stat-card">
        <h3>Total entries</h3>
        <div class="stat-value">${formatNumber(totals.totalRecords)}</div>
        <div class="stat-note">Recorded operational logs</div>
      </div>
    </section>

    <section class="card">
      <h2>Top producing wells</h2>
      <p class="section-subtitle">Quick comparison of the highest output wells.</p>
      <div class="kpi-row">${topWells || '<div class="muted">No well data yet.</div>'}</div>
    </section>
  </div>
  `
}

function renderWells(){
  return `
  <div class="grid" style="gap:20px;">
    <section class="card soft">
      <h2 class="section-title">Wells</h2>
      <p class="section-subtitle">Select a well to review records and add a new runtime entry.</p>
    </section>

    <section class="grid wells">
      ${WELLS.map(w=>{
        const totals=getWellTotals(w.id)
        return `
        <div class="card well-card">
          <div class="well-card-top">
            <div>
              <h3>${w.name}</h3>
              <div class="muted">${totals.records.length} recorded entries</div>
            </div>
            <div class="well-chip">Active</div>
          </div>

          <div class="kpi-row">
            <div class="kpi">
              <div class="kpi-label">Hours</div>
              <div class="kpi-value">${formatNumber(totals.hours)}</div>
            </div>
            <div class="kpi">
              <div class="kpi-label">Gallons</div>
              <div class="kpi-value">${formatNumber(totals.gallons)}</div>
            </div>
            <div class="kpi">
              <div class="kpi-label">Eff.</div>
              <div class="kpi-value">${formatNumber(totals.efficiency)}</div>
            </div>
          </div>

          <div class="actions">
            <button class="btn btn-primary" onclick="openWell('${w.id}')">Open Well</button>
          </div>
        </div>
        `
      }).join("")}
    </section>
  </div>
  `
}

function renderWellDetail(id){
  const well=getWellById(id)
  const totals=getWellTotals(id)

  const rows=totals.records.slice().reverse().map(x=>`
  <tr>
    <td>${x.timestamp}</td>
    <td>${formatNumber(x.hours)}</td>
    <td>${formatNumber(x.meter)}</td>
  </tr>
  `).join("")

  return `
  <div class="grid" style="gap:20px;">
    <section class="card soft">
      <div class="actions" style="justify-content:space-between; align-items:center;">
        <div>
          <h2 class="section-title">${well ? well.name : id}</h2>
          <p class="section-subtitle">Review operating history and add a new runtime log.</p>
        </div>
        <button class="btn btn-secondary" onclick="showPage('wells')">Back to Wells</button>
      </div>
    </section>

    <section class="grid stats">
      <div class="card stat-card">
        <h3>Total runtime</h3>
        <div class="stat-value">${formatNumber(totals.hours)}</div>
        <div class="stat-note">Hours logged for this well</div>
      </div>
      <div class="card stat-card">
        <h3>Total gallons</h3>
        <div class="stat-value">${formatNumber(totals.gallons)}</div>
        <div class="stat-note">Production recorded to date</div>
      </div>
      <div class="card stat-card">
        <h3>Efficiency</h3>
        <div class="stat-value">${formatNumber(totals.efficiency)}</div>
        <div class="stat-note">Gallons per runtime hour</div>
      </div>
    </section>

    <section class="card">
      <h2>Add entry</h2>
      <div class="input-grid">
        <div>
          <label for="hours">Run hours</label>
          <input id="hours" type="number" min="0" step="0.01" placeholder="Example: 8">
        </div>
        <div>
          <label for="meter">Gallons produced</label>
          <input id="meter" type="number" min="0" step="1" placeholder="Example: 145000">
        </div>
      </div>
      <div class="actions">
        <button class="btn btn-primary" onclick="addRuntime('${id}')">Save Entry</button>
      </div>
      <div class="inline-note">Each saved entry is added to local device storage.</div>
    </section>

    <section class="card">
      <h2>Runtime history</h2>
      ${rows ? `
      <div class="table-wrap">
        <table>
          <tr>
            <th>Date</th>
            <th>Hours</th>
            <th>Gallons</th>
          </tr>
          ${rows}
        </table>
      </div>` : `<div class="empty-state">No entries have been added for this well yet.</div>`}
    </section>
  </div>
  `
}

function addRuntime(id){
  const hours=document.getElementById("hours").value.trim()
  const meter=document.getElementById("meter").value.trim()

  if(hours==="" || meter===""){
    alert("Please enter both runtime hours and gallons produced.")
    return
  }

  if(num(hours) < 0 || num(meter) < 0){
    alert("Values must be zero or greater.")
    return
  }

  const records=getWellRecords(id)

  records.push({
    id:uid(),
    timestamp:timestamp(),
    hours:num(hours),
    meter:num(meter)
  })

  save("rt_"+id,records)
  render()
}
