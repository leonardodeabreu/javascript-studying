const peso1 = 1.0;
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // fixar as 2 primeiras casas apenas
console.log(media.toString(2)) // transformar em binario
console.log(typeof media)
console.log(typeof Number)

// number != Number - um é funcao outro é tipos de dados

// alguns cuidados
console.log(7/0) // tipo Infinity
console.log("10"/2) // tipagem fraca de dados
console.log("10,2"/2) // nao funciona
console.log(0.1 + 0.7) // problema com ponto flutuante