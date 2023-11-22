// Função que imprime uma mensagem
function imprimirMensagem1(mensagem: string): void {
    console.log(mensagem)
}

const imprimir1 = imprimirMensagem1("Olá")

// -----------------------------

// Declarando uma arrow function para imprimir uma mensagem
const imprimirMensagem2 = (mensagem: string): void => {
    console.log(mensagem)
}

const imprimir2 = imprimirMensagem2("Olá")

// -----------------------------

// Declarando uma arrow function mais concisa para imprimir uma mensagem
const imprimirMensagem3 = (mensagem: string): void => console.log(mensagem)
const imprimir3 = imprimirMensagem3("Olá")