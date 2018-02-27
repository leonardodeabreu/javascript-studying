let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

//usar !! força conversão pra verdadeiro ou false
console.log('os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!(isAtivo = true))// olha pra variavel, e nao se deu certo ou nao

console.log('os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // olha pra variavel, e nao se deu certo ou nao

// usando o || 
let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Leo'
console.log(nome || 'Desconhecido')