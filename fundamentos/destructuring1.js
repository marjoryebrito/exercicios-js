//novo recurso do EC2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/*const {nome, idade}= pessoa
console.log(nome, idade)

const {nome: m, idade: i}= pessoa
console.log(m, i)*/

const {sobrenome, nome ='Não tem nada disso no obj'}=pessoa
console.log(sobrenome, nome)

const {endereco: {logradouro: l, numero: n, cep: c}}=pessoa
console.log(l, n, c)