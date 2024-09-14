function rel() {
    var res = document.getElementById('msg')
    var relogio = new Date()
    var hora = relogio.getHours()
    var minutos = relogio.getMinutes()
    var segundos = relogio.getSeconds()
    res.innerHTML = (`${hora}:${minutos}:${segundos}`) 
    setInterval(rel, 1000)
}