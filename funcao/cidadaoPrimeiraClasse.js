// Função em JS é First-Class Object (Citizens)
// Higher-order function

//criar de forma literal
function fun1(){ }
// função sempre retorna undefined

// Armazenar em uma variável
const fun2= function(){} // função anônima atribuída a uma variável

// Armazenar em um Array
const array = [function(a, b){return a+b}, fun1, fun2]
console.log(array[0] (2, 3))


//Armazenar em um objeto
const obj= {}
obj.falar= function() {return 'Opa'}
console.log(obj.falar())

//passar função como parâmetro
function run(fun){
    fun()
}

run(function (){console.log('Executando...')})

//Uma função pode retornar/contar uma função

function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
// ou...
const cincoMais = soma(2,3)
cincoMais(4)