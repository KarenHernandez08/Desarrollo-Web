// Operaciones en los Arrays

const tecnologias=['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//Añadir elementos

tecnologias.push('GraphQl')//lo agrega al final del arreglo
tecnologias.unshift('GraphQl')// Lo agrgea al inicio del arreglo

const nuevoArreglo=[...tecnologias,'GraphQl']//lo agrega al final
const nuevoArreglo2=['GraphQl',...tecnologias]//lo agrega al inicio

//Eliminar elementos 

tecnologias.pop()//elimina el del final
tecnologias.shift()//elimina el del principio
tecnologias.splice(2,1)//el 2 indica el indice, el 1 indica los valores a borrar, en este caso solo sera 1 y va a ser 'JavaScript'

const nuevoArray=tecnologias.filter( function(tech){
    return tech !=='HTML'
})

//Reemplazar elementos
tecnologias[0]='XD'

const nuevo=tecnologias.map( function(tech){
    if (tech === 'CSS'){
        return 'Python'
    } else{
        return tech
    }
})
 

console.table(tecnologias)
console.table(nuevoArreglo)
console.table(nuevoArreglo2)
console.table(nuevo)