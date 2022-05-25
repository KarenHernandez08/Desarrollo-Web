//Unir Objetos 

const producto={
    nombre:"Tablet",
    precio:30,
    disponible:true
}

const cliente={
    nombre:'Karen',
    premium:'True'
}

/*
Es una forma de unir pero despues puede causar problemas
producto.cliente=cliente
console.log(producto)
*/

/*
Esta es funcional si las propiedas o variables tienen diferentes nombres, en este caso
como hay dos variables que se llaman nombre, el objeto de producto lo cambia por el nombre del cliente

const nuevoObjeto=Object.assign(producto, cliente) 
*/

const nuevoObjeto2 = {
    producto:{...producto},
    cliente:{...cliente}
}
console.log(nuevoObjeto2)