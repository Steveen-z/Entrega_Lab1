function Validar(params) {
    do {
        params = prompt("Ingrese un numero");
        if (params.length == 0) {
            alert("No puede estar vacio");
        }
        else if (isNaN(params)) {
            alert("Ingrese valores validos");
        }
        else {
            params = parseInt(params);
        }

    } while (params.length == 0 || isNaN(params));

    return params;
}
let resultado;
function SumaElements(a, b) {
    a = Validar();
    b = Validar();
    resultado = a + b;
    return resultado;
}

function RestaElements(a, b) {
    a = Validar();
    b = Validar();
    resultado = a - b;
    return resultado;
}

function MultiElements(a, b) {

    a = Validar();
    b = Validar();
    resultado = a * b;
    return resultado;
}
function ValidarMenu(decision1) {

    do {
        decision1 = prompt(`Operacion:\n1- suma.\n2- resta.\n3- multiplicacion.`);
        if (decision1.length == 0) {
            alert("No puede estar vacio");
        }
        else if (isNaN(decision1)) {
            alert("Ingrese numeros validos");
        }
        else {
            decision1 = parseInt(decision1);

            if (decision1 < 1 || decision1 > 3) {
                alert("Ingrese un número dentro del rango de valores");
                decision1 = "";
            }
        }

    } while (decision1.length == 0 || isNaN(decision1) || decision1 < 0 || decision1 > 3);

    return decision1;
}

function calculadora(decision) {
    decision = ValidarMenu();
    let resultado;
    if (decision == 1) {
        resultado = SumaElements();
        deci = ValidarMenu();
        deci = UltimaValue(deci, resultado);
        return deci;
    }
    else if (decision == 2) {
        resultado = RestaElements();
        deci = ValidarMenu();
        deci = UltimaValue(deci, resultado);
        return deci;
    }
 
    else if (decision == 3) {
        resultado = MultiElements();
        deci = ValidarMenu();
        deci = UltimaValue(deci, resultado);
        return deci;

    } else {
        return 0;
    }
}

function UltimaValue(deci, resultado) {
    let num1;
    if (deci == 1) {
        num1 = Validar();
        return resultado + num1;
    }
    else if (deci == 2) {
        num1 = Validar();
        return resultado - num1;
    }
    else if (deci == 3) {
        num1 = Validar();
        return resultado * num1;
    } else {
        return resultado; 
    }
}

let probando;
probando = console.log(`El resultado de su ecuacion es: ${calculadora()}`);