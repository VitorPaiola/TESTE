// Classe base
class Animal {
    protected nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    mover(): void {
        console.log(`${this.nome} está se movendo.`)
    }
}

// Subclasse que herda de Animal
class Cachorro extends Animal {
    latir(): void {
        console.log("Au au!")
    }
}

const meuCachorro = new Cachorro("Bobby")
meuCachorro.mover()
meuCachorro.latir()