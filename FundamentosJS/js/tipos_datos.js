//Tipos de datos 

/*Existen varios tipos de datos entre ellos
1. Undefined   5.Symbol
2.Boolean      6. Big Int
3.Number       7.Object
4.String       8.Null
*/

//Undefined
let cliente
console.log(cliente)
console.log(typeof cliente)

//boolean 
const descuento=true
console.log(descuento)
console.log(typeof descuento)

//number
const numero1=20.20
const numero2=30
const numero3=100

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

//String
const nombre='Karen'
let apellido="Hernandez"
const numero="30"
console.log(typeof nombre)
console.log(typeof apellido)
console.log(typeof numero)

//Symbol
//el symbol siempre va a ser unico
const primerSymbol= Symbol(30)
const segundoSymbol= Symbol(30)

console.log(primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())


//BigInt
//No se peude hacer una suma o combinar el BigInt con datos number
const numeroGrande=BigInt(1234568367278389827127645623791727289127)
console.log(typeof numeroGrande)

//Null
//siempre viene vacio o sin valor, la instancia siempre va a ser de tipo objeto
const des=null
console.log(typeof des)




