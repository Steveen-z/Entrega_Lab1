//Crear un programa que permite obtener el mínimo común múltiplo de tres números ingresados por el usuario.

// obtener el mínimo común múltiplo 
function Validar(params) {
  do {
      params = prompt("Ingrese un numero");
      if (params.length == 0) {
          alert("No puede estar vacio");
      }
      else if (isNaN(params )) {
          alert("Ingrese valores validos");
      }
      else {
          params = Math.abs(parseInt(params, 10)); 

      }
  
  } while (params.length == 0 || isNaN(params));
 
  return params;
}
function calcularMCM(a, b){
    //func para calculr el mcd
     function calcularMCD(a, b){
      if (b === 0){
        return a;
      }
    return calcularMCD(b, a % b);
     }
     //aqui se calcula de forma (a*b) mcd(a, b)
     return (a * b) / calcularMCD (a, b);
      }
    //se le solicitara 3 numeros que desea sacar mcm el usuario
      const number1 = Validar();
      const number2 = Validar();
      const number3 = Validar();
    
    //sw calculan los 3 numeros
    
      const mcmDosNumeros = calcularMCM(number1, number2);
      const mcmTresNumeros = calcularMCM(mcmDosNumeros, number3);
    //resultado
      console.log(`el mcm de ${number1}, ${number2} y ${number3} es: ${mcmTresNumeros}`);