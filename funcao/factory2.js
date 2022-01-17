const CriarProdutoArrow = (des, prc) => produto = { descricao: des, preco: prc}
console.log(CriarProdutoArrow('Celular', 700.00))

const CriaProdutoArrow2 = (des, prc) => { return {descricao: des, preco: prc}}
console.log(CriaProdutoArrow2('Pendrive', 20.00))


function criarProduto (des = "", prc = 1.0){
    return {
            descricao: des,
            preco: prc
    }
}

console.log(criarProduto('Arroz', 3))
console.log(criarProduto())