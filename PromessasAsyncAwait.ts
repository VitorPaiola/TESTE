// Função que retorna uma promessa
function esperar(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

// Função assíncrona usando async/await
async function exemploAsync() {
    console.log("Início")
    await esperar(2000) // Espera por 2 segundos
    console.log("Fim")
}

exemploAsync()