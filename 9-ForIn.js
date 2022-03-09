// Extraindo arquivos de obj.

const Eu = {
    nome: "Renan",
    idade: 23,
    profissão:"Estudante",
    cpf:"16002416703",
    fone:["21983037549","21973001242"]
}

Eu.Dependente = [{
    nome: "Zeiza",
    parentesco: "Mãe",
    idade: "100 anos" }]
  
  Eu.Dependente.push({
      nome: "Vanda Rayane",
      parentesco: "irmã",
      idade: "16 anos" })
     
  Eu.saldo = 100

  Eu.depositar = function(valor) 
      { this.saldo += valor }
  Eu.depositar(30)

  let relatorio = " ";
  
  for ( let info in Eu)
  { if (typeof Eu[info]=== "object" || typeof Eu[info]=== "function")

  {continue} else {

      relatorio += `
      ${info} ===> ${Eu[info]}  `}
  }

  console.log(relatorio)
 