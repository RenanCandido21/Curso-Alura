//Media de 3 array

const Sala1 = [ 5, 7, 6, 7, 10]
const Sala2 = [ 5, 7 ,5 ,9 ,8]
const Sala3 = [ 7, 9, 5, 6, 2 ]

function media(notas) {

const SomaDasNotas = notas.reduce((acum, atual) => atual+ acum,0)

return SomaDasNotas/notas.length

}

console.log (` Media das Salas: Sala 1 = ${media(Sala1)}, Sala 2 = ${media(Sala2)}, Sala 3 = ${media(Sala3)}`)