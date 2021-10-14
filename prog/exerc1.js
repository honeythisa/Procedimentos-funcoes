/* 
1. Utilizando os exercícios desenvolvidos na lista passada, coloque a implementação de cada exercício dentro de uma função;
2. dados de entrada de cada programa via parâmetro
let resultado = zeroAquinhentos(46)
console.log(resultado)
--> maneira simplificada: console.log(zeroAquinhentos(46))
*/
// exercicío 01
function zeroAquinhentos() {
  let contador = 0
  contador++
  for (contador = 500; contador >= 0; contador--) {
      if (contador >= 0 && contador < 100) {
          console.log(contador, "Número na faixa.");
      } else {
          console.log(contador, "Número fora da faixa.");
      }
  }
}
console.log(zeroAquinhentos()) // parâmetro real

// exercício 02
function parImp(number) {
  let contador = 0
  contador++
  for (contador = 100; contador >= 0; contador--) { // para imprimir todos os numeros de 100 ate 0
      if (contador % 2 == 0) { // verificar se o numero é par ou impar
          console.log(contador, "Número par.")
      } else {
          console.log(contador, "Número ímpar.")
      }
  }
}
console.log(parImp()) // parâmetro real

// exercício 03
function fatorial(num) {
  let fat = 1
  for (let c = num; c > 1; c--) { // ele vai pegar o valor pra multiplicar até chegar no 1.
      fat *= c
  } return `${num}! = ${fat}`
}
console.log(fatorial(5)) //parâmetro real

// exercício 04
function multiplos(nume) {
  let cont = 0;
  while (cont < 20) {
      console.log(`${nume} x ${cont + 1} = ${nume * (cont + 1)}`);
      cont++;
  }
}
console.log(multiplos(8)) //parâmetro real

// exercício 05
function agenda(op) {
    do {
        console.log("--------- Menu ---------\n| 1 - adicionar contato|\n| 2 - buscar contato   |\n| 3 - editar contato   |\n| 4 - sair             |\n------------------------ ")
    }while(op != 4)
    return op
}
console.log(agenda(4)) //parâmetro real

// exercício 06