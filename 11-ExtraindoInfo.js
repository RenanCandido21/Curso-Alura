const Dados = [{
    nome: "Renan",
    idade: 23,
    profissão:"Estudante",
    cpf:"16002416703",
    fone:["21983037549","21973001242"],

   Dependentes: [{
    nome: "Zeiza",
    parentesco: "Mãe",
    idade: "100 anos" },

    {nome: "Vanda Rayane",
    parentesco: "irmã",
    idade: "16 anos" }] },

    {nome: "Tania",
    idade: 40,
    profissão:"Manicure",
    cpf:"07609643752",
    fone:["21940028922","25746969"],

   Dependentes: [{
    nome: "Jucicreide",
    parentesco: "Mãe",
    idade: "52 anos" },

    {nome: "Leonilce",
    parentesco: "Cunha",
    idade: "63 anos" }]

    }]

    const ListaDependentes = [...Dados[0].Dependentes,...Dados[1].Dependentes]

    console.log(ListaDependentes)
