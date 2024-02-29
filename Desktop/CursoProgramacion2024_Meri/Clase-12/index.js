//Ejemplo funcion sumar

function sumar(num1, num2) {
    let resultado;
    resultado = num1 + num2;
    return resultado;
}
let suma = sumar(0, 3);
console.log("el resultado es: " + suma);

//Hacer una función que tenga tres parámetros: dos números y un nombre de operación. 
//Según el nombre de la operación que pasemos al invocar 
//(suma, resta, división, multiplicación), 
//la función tiene que devolver el resultado de la operación.

function operaciones(num1, num2, operacion) {

    if (operacion ==="suma") {
        resultado = num1 + num2;
        return resultado;
    }
    else if (operacion ==="resta") {
        resultado = num1-num2;
        return resultado;
    }
    else if (operacion ==="multiplicacion"){
        resultado = num1 * num2;
        return resultado;
    }
    else if (operacion === "division"){
        resultado = num1/num2;
        return resultado; 
    }
    else {
        console.log("chau")
    }
}
operaciones (2,5,"culo");
console.log("el resultado es: " + resultado);
