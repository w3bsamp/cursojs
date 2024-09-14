   function contando() {
    var n1 = document.getElementById('inicio')
    var n2 = document.getElementById('fim')
    var n3 = document.getElementById('passo')
    var res = document.getElementById('res')
    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
        alert('Faltam DADOS!')
        res.innerHTML = 'Impossivel contar.'
    } else {
        res.innerHTML = ('Contando: <br>')
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(n3.value)
        if (p <= 0) {
            alert('Passo invalido, considerando passo 1.')
            p = 1
        }
        if (i < f) {
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}