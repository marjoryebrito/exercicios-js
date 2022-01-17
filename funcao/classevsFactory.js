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



const pessoa = nome => {  //tem consciência do seu contexto lexico
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

pessoa('Fisto').falar()