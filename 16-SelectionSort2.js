const livros = require( './14-Algoritmo1');
const menorValor = require('./15-SelectionSort1');

for (let atual = 0; atual < livros.lenght - 1; atual++) {
let menor = menorValor(livros,atual)

let livroAtual = livros[atual];
console.log('posição atual', atual)
console.log('livro atual', livros[atual])
let livroMenorPreco = livros[menor];
console.log('livro menor preço', livros[menor])

livros[atual] = livroMenorPreco
livros[menor] = livroAtual

}

console.log(livros)
