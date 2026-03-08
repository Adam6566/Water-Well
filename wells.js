let page="dashboard"
let activeWell=null

function showPage(p){
  page=p
  updateNav()
  render()
}

function openWell(id){
  activeWell=id
  page="well"
  updateNav()
  render()
}

function updateNav(){
  document.querySelectorAll(".nav-tabs button").forEach(btn=>btn.classList.remove("active"))
  const activeId=page==="well" ? "nav-wells" : `nav-${page}`
  const activeButton=document.getElementById(activeId)
  if(activeButton) activeButton.classList.add("active")
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

updateNav()
render()

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("service-worker.js")
}
