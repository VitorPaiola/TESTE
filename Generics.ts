// Generics
function identity<T>(arg: T): T {
    return arg
}

const identity2 = <T>(arg: T): T => arg

let numeroIdentico1: number = identity(5)
let textoIdentico1: string = identity("Texto")
console.log(numeroIdentico1)
console.log(textoIdentico1)

let numeroIdentico2: number = identity2(5)
let textoIdentico2: string = identity2("Texto")
console.log(numeroIdentico2)
console.log(textoIdentico2)