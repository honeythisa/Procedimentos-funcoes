/* 
1. Utilizando os exercícios desenvolvidos na lista passada, coloque  a implementação de cada exercício dentro de uma função;
2. dados de entrada de cada programa via parâmetro
let resultado = zeroAquinhentos(46)
console.log(resultado)
/maneira simplificada: console.log(zeroAquinhentos(46))
*/
// exercicío 1
function zeroAquinhentos(n) {
    if (n >= 0 && n <= 500) {
        if (n >= 100 && n <= 200) {
            return "[VERIFICADO] Número entre 100 e 200."
        } else {
            return "[VERIFICADO] mas número fora da faixa."
        }
    } else {
        return "Não estamos verificando esse número."
    }
}
console.log(zeroAquinhentos(100)) //parâmetro real

// exercício 2
function parImp(nu) {
    if (nu >= 0 && nu <= 100) {
        if (nu % 2 == 0) {
            return "Número par."
        } else {
            return "Número ímpar."
        }
    }
    else {
        return "Número fora da faixa meu chapa."
    }
}
console.log(parImp(10)) // parâmetro real

// exercício 3
function fatorial(num) {
    let fat = 1
    for (let c = num; c > 1; c--) { // ele vai pegar o valor até chegar no 1.
        fat *= c
    } return `${num}! = ${fat}`
}
console.log(fatorial(5)) //parâmetro real

// exercício 4
function multiplos(nume){
    let cont = 0
    while(cont < 20){
        console.log (`${nume} x ${cont + 1} = ${nume}`)
        cont++
    }
}
console.log(multiplos(8)) // parâmetro real

// exercício 5
function agenda(op){
    do {
        console.log("--------- Menu ---------\n| 1 - adicionar contato|\n| 2 - buscar contato   |\n| 3 - editar contato   |\n| 4 - sair             |\n------------------------ ")
    }while(op)
}