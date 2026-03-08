let productionChart

function renderChartsPage(){
  const app=document.getElementById("app")

  app.innerHTML=`
  <div class="grid" style="gap:20px;">
    <section class="card soft">
      <h2 class="section-title">Charts</h2>
      <p class="section-subtitle">A simple view of total production by well.</p>
    </section>

    <section class="card chart-card">
      <h2>Production by Well</h2>
      <canvas id="chart"></canvas>
      <div class="inline-note">Totals are based on all gallons entered for each well.</div>
    </section>
  </div>
  `

  const labels=[]
  const values=[]

  WELLS.forEach(w=>{
    const totals=getWellTotals(w.id)
    labels.push(w.name)
    values.push(totals.gallons)
  })

  if(productionChart){
    productionChart.destroy()
  }

  productionChart=new Chart(document.getElementById("chart"),{
    type:"bar",
    data:{
      labels,
      datasets:[{
        label:"Gallons Produced",
        data:values,
        borderRadius:8
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:true,
      plugins:{
        legend:{display:false}
      }
    }
  })
}
