//Exercicio JS - Reprovado ou Aprovado?

const nomes = [' Renan ', ' Maria ', ' Angelica ', ' Lohan ', ' Rayane ', ' Josivaldo ']

const notas = [ ' 10 ', ' 8 ', ' 4 ', ' 5.5 ', ' 9 ', ' 10 ']

const reprovados = nomes.filter ( (alunos,indice) => notas [indice] < 7)

console.log (`reprovados: ${reprovados}`)