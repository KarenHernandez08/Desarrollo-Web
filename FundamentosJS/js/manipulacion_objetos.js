// Manipulación de objetos 

const producto={
    nombre:"Tablet",
    precio:30,
    disponible:true
}

Object.freeze(producto)//para congelar y que nadie pueda editarlo ni añadir ni eliminar
Object.seal(producto)//MNodificar propiedades existentes, no permite añadir ni eliminar

producto.nombre="Monitor" //para modificar el nombre

//si no existen los crea y añade a la tabla
producto.imagen="imagen.jpg"

//eliminar propiedades  con delete nombre de nuestroporducto.propiedad
delete producto.
console.table(producto)