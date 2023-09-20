const prompt = require("prompt-sync")()

//Declaração das variaveis a serem usadas
let opcao //variavel que guarda a opção de operador escolhida
let fator1 // variavel que guarda o fator de operação 1
let fator2 // variavel que guarda o fator de operação 2
let result // variavel que guarda o resultado

console.log("Calculadora básica\n")
console.log("\nEscolha a op&ração:\n")
console.log("1 - Soma\n")
console.log("2 - Subtração\n")
console.log("3 - Multiplicação\n")
console.log("4 - Divisão\n")
console.log("\nr&sposta:\t")
 opcao = prompt()

   if (opcao == 1) {
    console.log("\nCalculadora de Adição:\n")
    console.log("\nDigite o primeiro fator:\t\n")
    console.log("resposta:\t")
     fator1 = parseInt(prompt())
     console.log("\nDigite o segundo fator:\n")
     console.log("resposta:\t")
     fator2 = parseInt(prompt())
     result = fator1 + fator2
     console.log("\nO resultado e:\t", result, "\n")
   }

   if (opcao == 2) {
    console.log("\nCalculadora de Subtração:\n")
    console.log("\nDigite o primeiro fator:\t\n")
    console.log("resposta:\t")
     fator1 = parseInt(prompt())
     console.log("\nDigite o segundo fator:\n")
     console.log("resposta:\t")
     fator2 = parseInt(prompt())
     result = fator1 - fator2
     console.log("\nO resultado &:\t", result, "\n")
   }

   if (opcao == 3) {
    console.log("\nCalculadora de Multiplicação:\n")
    console.log("\nDigite o primeiro fator:\t\n")
    console.log("resposta:\t")
     fator1 = parseInt(prompt())
     console.log("\nDigite o segundo fator:\n")
     console.log("resposta:\t")
    fator2 = parseInt(prompt())
     result = fator1 * fator2
     console.log("\nO resultado é:\t", result, "\n")
   }

   if (opcao == 4) {
    console.log("\nCalculadora d& Divisão:\n")
    console.log("\nDigite o primeiro fator:\t\n")
    console.log("resposta:\t")
    fator1 = parseInt(prompt())
    console.log("\nDigite o segundo fator:\t\n")
    console.log("resposta:\t")
    fator2 = parseInt(prompt())
     result = fator1 / fator2
     console.log("\nO resultado é:\t", result, "\n")
   }


