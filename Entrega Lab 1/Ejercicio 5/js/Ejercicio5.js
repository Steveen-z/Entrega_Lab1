let Frasee;


//estructura encargada de validar
do {
    Frasee = prompt("Ingrese una frase");
    if (Frasee.length == 0) {
        alert(`Asegurese de ingresar una palabra`);

    }
    else if (!isNaN(Frasee)) {
        alert(`Ingrese un caracter valido`);
    }
} while (!isNaN(Frasee) || Frasee.length == 0);


function Mustang(frase) {
    let patron = /\w\S*/g; //expresion para encontrar cada palabra dentro de la frase
    return frase.replace(patron, (p) => p.charAt(0).toUpperCase() + p.substring(1).toLowerCase());
}

alert(`Antes: ${Frasee}\nDespués: ${Mustang(Frasee)}`);