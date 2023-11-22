// Interface representando um objeto Pessoa
interface Pessoa {
    nome: string
    idade: number
}

// Função que recebe um objeto do tipo Pessoa
function saudar(pessoa: Pessoa): string {
    return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`
}

// Criar um objeto do tipo Pessoa
const pessoa: Pessoa = {
    nome: "João",
    idade: 30,
}

// Chamar a função saudar e imprimir o resultado na tela
console.log(saudar(pessoa))