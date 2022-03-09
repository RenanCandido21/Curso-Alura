function Cliente (nome,cpf,email,saldo)
{

    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){this.saldo +=valor}


}

function ClientePoupança(nome,cpf,email,saldo,saldopoup)

{
Cliente.call(this,nome,cpf,email,saldo)
this.saldopoup = saldopoup

}

const Renan = new ClientePoupança("Renan","12345678903","renanzinho@hotmail.com",1000,10000)

console.log(Renan)

ClientePoupança.prototype.depositarPoup = function(valor){

    this.saldopoup += valor
}

Renan.depositarPoup(50)

console.log(Renan.saldopoup)