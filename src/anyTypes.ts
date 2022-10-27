// 1 Tipo any 
const a: any = 34 
const b: any = ['Lucas']

const result = a + b  
console.log({result})

// 2 Quando  o tipo 'any' é inferido implícitamente 
let frase 
frase = 'Oi, pessoal! Tudo bem?'
console.log({ frase })

// 3 Quando devemos usar o tipo any? 
const formulario: {[campoFormulario: string]: any} = {
    nome: 'Lucas',
    sobrenome: 'sousa',
    idade: 34
}
console.log({ formulario})
