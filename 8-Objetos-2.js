// Dados tipo array
const Eu = {
    nome: "Renan",
    idade: 23,
    profissão:"Estudante",
    cpf:"16002416703",
    fone:["21983037549","21973001242"]
}

Eu.fone.forEach(tel => console.log(tel));

// Add dados tipo objeto

// Eu.Dependente = {
//   nome: "Zeiza",
//   parentesco: "Mãe",
//   Idade: "100 anos" }

// Eu.Dependente.nome = "Zeiza America da Silva Candido"

// Add mais um dado, transformando obj em array:

Eu.Dependente = [{
    nome: "Zeiza",
    parentesco: "Mãe",
    idade: "100 anos" }]
  
  Eu.Dependente.push({
      nome: "Vanda Rayane",
      parentesco: "irmã",
      idade: "16 anos"

  })
  console.log(Eu)

  //Filtrando

  const Filtro = Eu.Dependente.filter(Dependente => Dependente.idade==="100 anos")

console.log(Filtro[0].nome)

//Add opções (Deposito)

Eu.saldo = 100

Eu.depositar = function(valor) 
{

this.saldo += valor

}

console.log(Eu.saldo)
Eu.depositar(30)
console.log(Eu.saldo)