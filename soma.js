// Declarando a função soma
function somarNumeros(numero1, numero2) {
    var resultado = numero1 + numero2
    return resultado
}

var resultadoSoma = somarNumeros(5, 3)
console.log(resultadoSoma)

// Declarando uma arrow function para somar dois números
const somarNumeros2 = (numero1, numero2) => {
    const resultado = numero1 + numero2
    return resultado
}

const resultadoSoma2 = somarNumeros2(5, 3)
console.log(resultadoSoma2)

// Declarando uma arrow function mais concisa para somar dois números
const somarNumeros3 = (numero1, numero2) => numero1 + numero2

const resultadoSoma3 = somarNumeros3(5, 3)
console.log(resultadoSoma3)