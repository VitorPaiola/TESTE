// Decorator para registrar informações sobre métodos
function registrarMetodo(target: any, key: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value

    descriptor.value = function (...args: any[]) {
        console.log(`Método chamado: ${key}`)
        const resultado = metodoOriginal.apply(this, args)
        return resultado
    }

    return descriptor
}

// Classe com método decorado
class MinhaClasse {
    // @registrarMetodo
    metodoExemplo() {
        console.log("Lógica do método executada.")
    }
}

// Criando uma instância da classe
const instancia = new MinhaClasse()

instancia.metodoExemplo()