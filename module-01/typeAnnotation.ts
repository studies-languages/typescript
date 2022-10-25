const animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa']
console.log(animais)

const car: {
    name: string
    year: number 
    price: number
} = {name: 'Toyota sedan', price: 80.000, year: 2019}
console.log(car)


// => Functions 
function multiplicarNumero(num1: number, num2: number){
    return num1 * num2
}

console.log(multiplicarNumero(5, 2))