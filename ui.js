function load(key){
  try{
    return JSON.parse(localStorage.getItem(key)) || []
  }catch{
    return []
  }
}

function save(key,data){
  localStorage.setItem(key,JSON.stringify(data))
}

function uid(){
  return Date.now().toString(36)+Math.random().toString(36).slice(2)
}

function timestamp(){
  return new Date().toLocaleString()
}

function num(value){
  return Number(value || 0)
}

function formatNumber(value){
  return new Intl.NumberFormat().format(num(value))
}

function getWellById(id){
  return WELLS.find(w=>w.id===id)
}

function getWellRecords(id){
  return load("rt_"+id)
}

function getWellTotals(id){
  const records=getWellRecords(id)
  let hours=0
  let gallons=0

  records.forEach(x=>{
    hours+=num(x.hours)
    gallons+=num(x.meter)
  })

  return {
    records,
    hours,
    gallons,
    efficiency:hours>0 ? (gallons/hours).toFixed(2) : "0.00"
  }
}

function getSystemTotals(){
  let totalHours=0
  let totalGallons=0
  let totalRecords=0

  WELLS.forEach(w=>{
    const totals=getWellTotals(w.id)
    totalHours+=totals.hours
    totalGallons+=totals.gallons
    totalRecords+=totals.records.length
  })

  return {
    totalHours,
    totalGallons,
    totalRecords,
    efficiency:totalHours>0 ? (totalGallons/totalHours).toFixed(2) : "0.00"
  }
}
