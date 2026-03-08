
function renderChartsPage(){

const app=document.getElementById("app")

app.innerHTML=`
<div class="card">
<h2>Production by Well</h2>
<canvas id="chart"></canvas>
</div>
`

const labels=[]
const values=[]

WELLS.forEach(w=>{

const r=load("rt_"+w.id)

let total=0

r.forEach(x=>{
total+=Number(x.meter||0)
})

labels.push(w.name)
values.push(total)

})

new Chart(document.getElementById("chart"),{
type:"bar",
data:{
labels:labels,
datasets:[{label:"Gallons Produced",data:values}]
}
})

}
