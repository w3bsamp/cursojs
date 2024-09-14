var numeros = []
var tab = document.getElementById('analise')
var res = document.getElementById('res')

function analisar () {
    var converter = document.getElementById('txtnum')
    var numero = Number(converter.value)
    if (numero == 0 || numero.value == 0 || numero > 100) {
        alert('Digite 1 numero menor que 100.')
    } else if (numeros.includes(numero) == true){
        alert('Esse numero já está na lista!')
    } else {
        numeros.push(numero)
        var item = document.createElement('option')
        item.text = `Valor: ${numero} adicionado!`
        res.innerHTML = ''
        tab.appendChild(item)
    }
    converter.value = ''
    converter.focus()
}

function finalizar () {
    res.innerHTML = ''
    if (numeros == 0) {
        alert('Coloque numeros na lista para poder finalizar.')
    } else {
        let tot = numeros.length
        let soma = 0
        let media = 0
        var maior = numeros[0]
        var menor = numeros[0]
        for (let pos in numeros) {
            soma += numeros[pos]
            if (numeros[pos] > maior)
                maior = numeros[pos]
            if (numeros[pos] < menor)
                menor = numeros[pos]
        }
        media = soma / tot
        res.innerHTML += `O menor valor é ${menor}<br>`
        res.innerHTML += `O maior valor é ${maior}<br>`
        res.innerHTML += `Ao todo, temos ${numeros.length} numeros cadastrados.<br>`
        res.innerHTML += `Somandos todos os valores temos ${soma}<br>`
        res.innerHTML += `A média de numeros é ${media}`
    }
}