//Armazenando uma função em uma variável

const imprimirSoma= function (a,b){
    console.log(a+b)
}

imprimirSoma(2,6)

//Armazenando uma função arrow em uma variável
const soma = (a , b) => {

    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const sutracao =(a , b) => a - b  //se só tiver um parâmetro, não precisa do parênteses
console.log(subtracao(2, 3))

