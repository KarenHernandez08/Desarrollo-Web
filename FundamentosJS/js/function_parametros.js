// Funciones parámetros y parámetros por default

/*function sumar(numero, numero2){
    console.log(numero)
    
}

sumar(10)*/

//Funciones que retornan valores

function sumar(numero=0, numero2=0){
    return numero+numero2
    
}

const resultado = sumar(10+8)
console.log(resultado)
