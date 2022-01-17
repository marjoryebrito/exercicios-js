class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Ahsoka')
p1.falar()

function Pessoa1(nome){

    this.getNome = function(){
        return 'Meu nome é '+ nome
    }
}

const alguem= new Pessoa1('Quilan Vos')
console.log(alguem.getNome())