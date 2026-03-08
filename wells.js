
let page="dashboard"
let activeWell=null

function showPage(p){
page=p
render()
}

function openWell(id){
activeWell=id
page="well"
render()
}

function render(){

const app=document.getElementById("app")

if(page==="dashboard") app.innerHTML=renderDashboard()
else if(page==="wells") app.innerHTML=renderWells()
else if(page==="well") app.innerHTML=renderWellDetail(activeWell)
else if(page==="charts") renderChartsPage()
else if(page==="reports") app.innerHTML=renderReports()
else if(page==="backup") app.innerHTML=renderBackup()

}

render()

if("serviceWorker" in navigator){
navigator.serviceWorker.register("service-worker.js")
}
