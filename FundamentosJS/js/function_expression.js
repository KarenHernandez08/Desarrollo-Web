//Function Expression

/*La diferencia entre function declaration y function expresion es que la expresion se tiene que declarar como una variable
por lo que no se puede llamar antes como la declaration, ya que como es una variable, se tiene que ejecutar primero 
y ya después llamar la función*/ 
const sumar= function(numero=0, numero2=0){
    return numero+numero2
}

const resultado=sumar(30,15)

console.log(resultado)