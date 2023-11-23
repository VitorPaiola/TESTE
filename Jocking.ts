const numeros = [1, 2, 3, 4, 5]

// O método `map` percorre cada elemento do array e retorna o dobro desse número
const numerosDuplicados = numeros.map((numero: number): number => numero * 2)

console.log(numerosDuplicados)

// O método `filter` filtra a lista e mantém somente os números pares em um array
const numerosPares = numeros.filter((numero: number): boolean => numero % 2 === 0)

console.log(numerosPares)

// O método `reduce` calcula a soma de todos os elementos em um array
const somaTotal = numeros.reduce((acumulador: number, numero: number): number => acumulador + numero, 0)

console.log(somaTotal)

// Definindo uma interface
interface Pessoa {
    nome: string
    idade: number
}

// Utilizando a interface em uma função
const saudacao = (pessoa: Pessoa): string => {
    return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`
}

const usuario: Pessoa = { nome: "João", idade: 25 }
console.log(saudacao(usuario))

// Definindo uma classe
class Animal {
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    fazerBarulho(): void {
        console.log("Fazendo barulho genérico")
    }
}

// Herança
class Cachorro extends Animal {
    fazerBarulho(): void {
        console.log("Au au!")
    }
}

const meuCachorro = new Cachorro("Bob")
meuCachorro.fazerBarulho()

// Definindo um enum
enum DiasDaSemana {
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
}

// Utilizando o enum
const diaDeHoje: DiasDaSemana = DiasDaSemana.Quarta
console.log(`Hoje é ${DiasDaSemana[diaDeHoje]}`)

// Função que retorna uma promessa
const esperarPor = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Utilizando a promessa
esperarPor(2000)
    .then(() => console.log("Passaram-se 2 segundos"))
    .catch(erro => console.error(`Ocorreu um erro: ${erro}`))