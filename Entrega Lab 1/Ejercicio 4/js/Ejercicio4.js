/*Solicitarle al usuario la cantidad de números que desea ingresar, luego debe guardar esos números en un array y devolver la suma 
de todos los números positivos. Si la matriz no contiene números positivos, devuelve 0. No puede usar for para recorrer el array final, solo 
puede usar for para almacenar los datos que el usuario digite. Ejemplos*/

const ArrayPersonalizada = [];
let repeticiones = prompt("Ingrese la cantidad de numeros que quiera ingresar en el array")
//Con este ciclo nos encargamos de obtener la cantidad de numeros que el usuaruario desee en su array y a parte sirve de validador 

do {
    repeticiones = prompt("Ingrese la cantidad de numeros que quiera ingresar en el array");
    if (repeticiones.length == 0) {
        alert("No puede estar vacio");
    }
    else if (isNaN(repeticiones )) {
        alert("Ingrese numeros validos");
    }
    else {
        repeticiones = parseInt(repeticiones);

        if (repeticiones < 0) {
            alert("Ingrese un número positivo");
            repeticiones = ""; 
        } 
        else {
            console.log(`Cantidad de números a ingresar: ${repeticiones}`);
        }
    }

} while (repeticiones.length == 0 || isNaN(repeticiones) || repeticiones < 0);

//creamos un ciclo for para que el usuario ingrese la cantidad de numeros que quiera ingresar
for (let i = 0; i < (repeticiones);) {
    const numero = prompt("Ingrese un numero para la array");

    if (numero.length == 0) {
        alert("No puede estar vacio");
    }
    else if (isNaN(numero)) {
        alert("Ingrese numeros validos");
    }
    else {

        ArrayPersonalizada.push(parseInt(numero));
        i++;
    }
}


function filterNumber(array) {
    //Se filtran los numero positivos haciendo uso de la funcion filter que recorre la array extrayendo los numero mayores a 0
    return array.filter((Element) => Element > 0)
        //Se especifica a detalle debido a que es una funcion que aun no vemos en clases.
        //el reduce toma en cuenta los elementos y sum (suma) en donde suma toma el valor anterior a elemento pasa sumarse asi el anterior con el posterior
        //el 0 es el valor inicial, es decir que el conteo inicia desde 0
        //al final el reduce retorna la suma de todos los elementos
        .reduce((sum, Element) => sum + Element, 0);  // Sumamos solo los positivos
}

const sumaPositivos = filterNumber(ArrayPersonalizada);
console.log(`La suma de los números positivos es: ${sumaPositivos}`);