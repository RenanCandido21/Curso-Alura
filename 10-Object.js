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
  

function OferecerSeguro(obj) {
    const propsEu = Object.keys(obj);
    if(propsEu.includes("Dependente"))

    {console.log(`Ofeta de seguro para ${obj.nome}`)} 
}

OferecerSeguro(Eu)

console.log(Object.keys(Eu)) /*---> Para as categorias  */
console.log(Object.values(Eu)) /*---> Para os valores  */
console.log(Object.entries(Eu)) /*---> Para os dois  */
