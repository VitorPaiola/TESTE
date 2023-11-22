// Definição de uma classe Carro
class Carro {
    modelo: string
    ano: number

    constructor(modelo: string, ano: number) {
        this.modelo = modelo
        this.ano = ano
    }

    acelerar(): void {
        console.log("Vrum vrum!")
    }
}

// Criando uma instância da classe Carro
const meuCarro = new Carro("Sedan", 2022)
meuCarro.acelerar()