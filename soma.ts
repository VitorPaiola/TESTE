// Declarando a função soma
function soma1(numero1: number, numero2: number): number {
    const resultado: number = numero1 + numero2
    return resultado
}

const resultado1: number = soma1(5, 3)
console.log(resultado1)

// -----------------------------

// Declarando uma arrow function para somar dois números
const soma2 = (numero1: number, numero2: number): number => {
    const resultado: number = numero1 + numero2
    return resultado
}

const resultado2: number = soma2(5, 3)
console.log(resultado2)

// -----------------------------

// Declarando uma arrow function mais concisa para somar dois números
const soma3 = (numero1: number, numero2: number): number => numero1 + numero2

const resultado3 = soma3(5, 3)
console.log(resultado3)

// -----------------------------

// Função que retorna a soma de dois números
function soma01(a: number, b: number): number {
    return a + b
}

const resultadoSoma1: number = soma01(5, 3)
console.log(resultadoSoma1)

// -----------------------------

// Declarando uma arrow function para somar dois números
const soma02 = (a: number, b: number): number => {
    const resultado: number = a + b
    return resultado
}

const resultadoSoma02: number = soma02(5, 3)
console.log(resultadoSoma02)

// -----------------------------

// Declarando uma arrow function mais concisa para somar dois números
const soma03 = (a: number, b: number): number => a + b

const resultadoSoma03: number = soma03(5, 3)
console.log(resultadoSoma03)