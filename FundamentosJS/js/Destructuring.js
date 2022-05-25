// Objetos -Desructuring con 2 o mâs objetos

const producto={
    nombre:"Tablet",
    precio:30,
    disponible:true
}

const cliente={
    nombre:'Karen',
    premium:'True'
}

const{nombre, precio, disponible}=producto
const{nombre:nombreCliente, premium}=cliente //aqui reasignamos el valor de la variable, para integrar apis

console.log(nombre)
console.log(nombreCliente) 