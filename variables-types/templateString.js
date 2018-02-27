const nome = 'Leonardo';
const concatenacao = 'Ola ' + nome;

const template =`
Olá
${nome}!`
// template string se utiliza ``

console.log(concatenacao, template)

console.log(`1 + 1 = ${1+1}`)

const up = text => text.toUpperCase()
console.log(`Ei.. ${up('cuidado')}!`)