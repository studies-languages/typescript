//Uso de colchetes
const frutas: string[] = ['abacaxi', 'laranja', 'maça', 'melancia', 'manga']
console.log(frutas[2])

//Array Object
const frutas2: Array<string> =  ['abacaxi', 'laranja', 'maça', 'melancia', 'manga']
console.log(frutas2[3])

// Adicionando mais strings com métoo push
const idiomas: Array<String> = ['Português', 'Inglês', 'Espanhol', 'Francês']
idiomas.push('Mandarin')
idiomas.push('Italiano')
console.log(idiomas)

// Array com Spread Operator
const listaNumeros = [0, 1, 2, 3, 4, 5]
const newListaNumeros = [...listaNumeros, 6, 7, 8, 9, 10]

console.log({ newListaNumeros})

// Array com laço de iteração
const linguagensArray:string[] = new Array('JavaScript', 'Python', 'PHP', 'C#')

linguagensArray.forEach(element => {
    console.log(element)
});