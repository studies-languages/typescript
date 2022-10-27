// Uso simples de Tuplas em TypeScript 
let pessoa: [string, string, number]
pessoa = ['Glaucio', 'Cloud Advocate Js', 2]

// Acessando o valor da Tupla
let pessoa1: [string, string, number]
pessoa1 = ['Glaucio', 'Cloud Advocate Js', 2]

// Outra forma de usar tuplas em typescript


// 3 Outra forma de usar Tuplas em TS (com labels)
let pessoas2: [nome: string, posicao: string, idade: number] = ['Lucas', 'QA', 29]
console.log({pessoas2})

// 4 Usando tuplas com Spread Operator
let listaFrutas: [...string[]] = ['abacaxi', 'laranja', 'maça', 'melancia', 'manga']
console.log(pessoa,
     pessoa1[1],
      ...listaFrutas)
     
// 5 Lista Heterogênea de Tupla:
let listaFrutas2:[number, boolean, ...string[]] = [5, true, ...listaFrutas]
console.log({ listaFrutas2})

// 6 Uso de função com Tuplas
function listarPessoas(nomes: string[], idades: number[]){
     return [...nomes, ...idades]
}

let resultado = listarPessoas(['Lucas', 'Marcos'], [34, 78])
console.log({ resultado })

// 7 Labeled Tuplas com Spread Operator numa função
type Nome = 
     | [primeiroNome: string, sobrenome: string]
     | [primeiroNome: string, sobrenome: string, ultimoNome: string]

function criarPessoa(...nome: Nome){
     return [...nome]
}

console.log(criarPessoa('lucas', 'sousa', 'assunção'))