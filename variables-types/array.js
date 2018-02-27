
const valores = [7.7, 8.8, 6.6, 4.5]
console.log(valores[0],valores[4])
// array é heterogenio, aceita qualquer coisa dentro de um array

valores.push({id:3}, false, null, 'teste')
console.log(valores)

 // remove ultimo indice do array
console.log(valores.pop())

delete valores[0] // remove indice especificado
console.log(valores)