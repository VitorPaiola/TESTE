export const PI: number = 3.14159265359

export function calcularCircunferencia1(raio: number): number {
    return 2 * PI * raio
}

export const calcularCircunferencia2 = (raio: number): number => {
    const resultado: number = 2 * PI * raio
    return resultado
}

export const calcularCircunferencia3 = (raio: number): number => 2 * PI * raio