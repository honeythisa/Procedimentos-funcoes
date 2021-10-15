function parimp(n) {
    if (n % 2 == 0) {  // se o numero é par, o resto tem que dar 0.
        return "PAR"
    } else {
        return "ÍMPAR"
    }
}
/*
let res = parimp(4)
console.log(res)
*/
console.log(parimp(223))

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}
console.log(soma(2, 3))

// esse é um caso de uma função dentro de uma variável
let v = function(x) {
    return x * 2
}
console.log(v(5))

// 5! = 5.4.3.2.1 = 120
function fatorial(num) {
    let fat = 1
    for (let c = num; c > 1; c--) { // recebe um valor para chegar até no 1
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

/* 
agora esse, é um caso de uma função chamando a função na função
se chama função recursiva
recursividade
*/
function fato (nume) {
    if (nume == 1) { // 1! = 1
        return 1
    } else {
        return nume * fato(nume - 1) // n! = n . (n-1)!
    }
}
console.log(fato(5))