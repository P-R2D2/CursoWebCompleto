const vetor = [7,8,9,1,2,3]
console.log(vetor[0], vetor[3])
vetor[4] = 10
console.log(vetor)
console.log(vetor.length)
vetor.push({id: 3}, false, null, 'teste')  
console.log(vetor)
console.log(vetor.pop())
delete vetor[0]
console.log(vetor)

console.log(typeof vetor) // array é um objeto em JS