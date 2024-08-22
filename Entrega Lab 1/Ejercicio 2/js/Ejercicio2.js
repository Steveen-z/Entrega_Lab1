function sharedLetters(...strings){
    let sets = strings.map(str => new Set(str.toLowerCase()));
    let commonSet = sets[0];
  
    for (let i = 1; i < sets.length; i++){
        commonSet = new Set([...commonSet].filter(letter => sets[i].has(letter)));
  
    }
    return commonSet.size
  }
  let frases = [];
  let Frasee;
  
  do{
  Frasee = prompt("ingrese una frase");
  if (Frasee.length == 0){
    alert("asegurese de ingresar una palabra");
  }
  else if (!isNaN(Frasee)){
    alert("ingrese un caracter valido");
  }
  else{
  frases.push(Frasee);
  }
  } while (!isNaN(Frasee) || Frasee.length == 0 || confirm("desea ingresar otra frase?"));
  
  console.log(sharedLetters(...frases))