// 1. Declaração de Arrays:

let numbers01: number[] = [1, 2, 3, 4, 5]
let names: string[] = ['John', 'Jane', 'Doe']
let mixedArray: (string | number)[] = [1, 'two', 3, 'four'] 

// 2. Acesso a Elementos do Array:

let fruits: string[] = ['apple', 'banana', 'orange']

console.log(fruits[0]) // apple
console.log(fruits[1]) // banana

// 3. Iteração sobre um Array:

let numbers02: number[] = [1, 2, 3, 4, 5]

// Usando for...of
for (let num of numbers02) {
    console.log(num)
}

// Usando forEach
numbers02.forEach(num => {
    console.log(num)
})

// 4. Métodos de Array:

let numbers03: number[] = [1, 2, 3, 4, 5]

// Map
let squaredNumbers = numbers03.map(num => Math.pow(num, 2))
console.log(squaredNumbers)
// let squaredNumbers2 = numbers03.map(num => num * num)
// console.log(squaredNumbers2)

// Filter
let evenNumbers = numbers03.filter(num => num % 2 === 0)
console.log(evenNumbers)

// Reduce
let sum = numbers03.reduce((acc, num) => acc + num, 0)
console.log(sum)

// 5. Matrizes Multidimensionais

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[0][1]) // 2

// 6. Spread Operator com Arrays:

let fruits02: string[] = ['apple', 'banana']
let moreFruits: string[] = ['orange', 'grape']

let allFruits: string[] = [...fruits02, ...moreFruits]

console.log(allFruits)

// 7. Desestruturação de Arrays:

let point: [number, number] = [3, 4]
let [x, y] = point

console.log(x) // 3
console.log(y) // 4

// 8. Tipo Readonly Array:

let readOnlyArray: ReadonlyArray<number> = [1, 2, 3]
// readOnlyArray.push(4) // Erro! Não é possível modificar um array readonly.

// 9. Array de Objetos:

interface Person {
    name: string
    age: number
}

let people: Person[] = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
]

console.log(people)

// 10. Arrays com Tipos Genéricos:

let genericArray: Array<number> = [1, 2, 3]

console.log(genericArray)