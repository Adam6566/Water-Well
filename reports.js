
function renderDashboard(){

let totalHours=0
let totalGallons=0

WELLS.forEach(w=>{

const r=load("rt_"+w.id)

r.forEach(x=>{
totalHours+=Number(x.hours||0)
totalGallons+=Number(x.meter||0)
})

})

let efficiency=0

if(totalHours>0){
efficiency=(totalGallons/totalHours).toFixed(2)
}

return `
<div class="card">
<h2>System Dashboard</h2>
<p><b>Total Runtime Hours:</b> ${totalHours}</p>
<p><b>Total Gallons:</b> ${totalGallons}</p>
<p><b>System Efficiency (gal/hr):</b> ${efficiency}</p>
</div>
`
}

function renderWells(){

return WELLS.map(w=>{

const r=load("rt_"+w.id)

return `
<div class="card">
<h3>${w.name}</h3>
<p>${r.length} runtime records</p>
<button onclick="openWell('${w.id}')">Open</button>
</div>
`
}).join("")
}

function renderWellDetail(id){

const r=load("rt_"+id)

const rows=r.map(x=>`
<tr>
<td>${x.timestamp}</td>
<td>${x.hours}</td>
<td>${x.meter}</td>
</tr>
`).join("")

return `
<div class="card">
<h2>${id}</h2>

<table>
<tr>
<th>Date</th>
<th>Hours</th>
<th>Meter</th>
</tr>
${rows}
</table>

<h3>Add Entry</h3>

<input id="hours" placeholder="Run hours">
<input id="meter" placeholder="Gallons produced">

<button onclick="addRuntime('${id}')">Save</button>

</div>
`
}

function addRuntime(id){

const hours=document.getElementById("hours").value
const meter=document.getElementById("meter").value

const r=load("rt_"+id)

r.push({
id:uid(),
timestamp:timestamp(),
hours:hours,
meter:meter
})

save("rt_"+id,r)

render()
}
