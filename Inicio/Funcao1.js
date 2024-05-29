function imprimirSoma(idade1 , idade2)
{
    console.log(idade1 + idade2)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // soma os dois primeiros e ignora o resto
imprimirSoma() // NaN

// Função com retorno
function soma(a, b = 0)
{
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
