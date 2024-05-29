let valor
console.log(valor) // undefined
// console.log(valor2) // ReferenceError: valor2 is not defined
valor = null
console.log(valor)
// console.log(valor.toString()) // TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)   

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
// console.log(produto.preco.toString()) // TypeError: Cannot read property 'toString' of null

