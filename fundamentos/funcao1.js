// Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)

//Função com retorno
function soma(a, b=0){
    return a+b
}

let resultado = soma(1,3)
console.log(resultado)