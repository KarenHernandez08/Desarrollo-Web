//Introducion a Objectos

/*
const nombre="tablet"
const precio=300
const disponible=true
*/

//Esta es la forma de crear una variable con mas atributos, seria como un diccionario en python
const producto={
    nombre:"Tablet",
    precio:30,
    disponible:true

}

console.log(producto)
console.table(producto)//el table muestra la salida como una tabla en la consola

console.log(producto.nombre)//accedemos a los objetos a traves del "." (punto) seguido la variable a la que queremos acceder

//Destructuring
//si colocamos una variable que no existe automaticamente la crea pero con valor undefined
//ejemplo
const{imagen}=producto//estamos extrayendo los valores del objeto
console.log(imagen)

//Asi tambien podemos obtener acceso a los valores de las variables de nuestro objeto
const { nombre }=producto//estamos extrayendo los valores del objeto
console.log(nombre)

// Mejora del objeto literal- Object Literal Enhacement
const autenticado=true
const usuario="Karen"

//podemos eliminar lo de lado derecho solo si son iguales y el resultado debe ser el mismo, el nombre de la variable debe ser el mismo
const nuevoObjeto={
    autenticado,
    usuario
}

console.table(nuevoObjeto)