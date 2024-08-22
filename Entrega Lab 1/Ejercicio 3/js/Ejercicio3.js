//Ejercicio 3
/*Dado un conjunto de números ingresados por el usuario, crear una función que tome un array como parámetro y retorne el
 segundo número más grande del conjunto. Debe haber como mínimo dos números para hacer la comparación. Ejemplos*/

const ArrayPersonalizada = [];

//Creamos una validacion simple, en donde se solicitara la cantidad de numeros que nosotros deseemos en este caso 3. 
for (let i = 0; i < 3;) {
    const numero = prompt("Ingrese un numero");
    if (numero.length == 0) {
        alert("No puede estar vacio");
    }
    else if (isNaN(numero)) {
        alert("Ingrese numeros validos");
    }
    else {
        console.log(parseInt(numero));
        ArrayPersonalizada.push(numero);
        i++;
    }
}
//Funcion en donde se lleva acabo todo el proceso. 
function Laqueresuelve(array) {
    /*se usa el metodo "sort" que nos ayuda a ordenar el array, pero este por si solo toma en cuenta la primer cifra, asi que se complementa
    para que tome "a" y "b" y retorna el numero que sea mayor.*/
    let max = 0;
    array.sort((a, b) => {
        return a - b;
    });
    /* Una vez ordenado el array eliminamos el ultimo numero, asi tendriamos el penultimo numero mayor*/
    array.pop();
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(`${ArrayPersonalizada} => ${Laqueresuelve(ArrayPersonalizada)}`);