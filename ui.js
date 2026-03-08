
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
