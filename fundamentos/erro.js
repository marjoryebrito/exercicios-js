function tratarErro(erro){
   // throw new Error('...')
   throw 10
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!!')
    }catch(e){
        tratarErro(e)
    }finally{
        console.log("Final")
    }
}

const obj = {nome: 'Ahsoka'}
imprimirNomeGritado(obj)