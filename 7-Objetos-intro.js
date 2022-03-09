//Inicio

const Eu = {
  nome: "Renan",
  idade: 23,
  profissão:"Estudante",
  cpf:"16002416703"
}

const dados = ["nome","idade","profissão","cpf"]

console.log(Eu[dados[0]])  /*Tipo 1 */

dados.forEach(info=>console.log(Eu[info])) /*Tipo 2 */

console.log (`Meu nome é ${Eu.nome}, eu tenho ${Eu.idade} anos. Os 3 primeiros digitos do 
meu CPF são: ${Eu.cpf.substring(0,3)}`) /*Tipo 3 */