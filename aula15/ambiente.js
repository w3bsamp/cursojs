var valores = [9, 2, 8, 1, 5]
valores.push(3)
for (var pos in valores) {
    console.log(pos + ' ' + valores[pos])
}

var teste = valores.indexOf(3)

console.log(teste)