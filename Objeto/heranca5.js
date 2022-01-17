console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Marjorye'.reverse())

Array.prototype.first = function (){
    return this[0]
}
let vet1= [15, 2, 3]
console.log(vet1.first())
console.log('Marjorye'.reverse().first())

