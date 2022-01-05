var valorA = 20;
var valorB = 8;

function comparaValores() {
  if (valorA === valorB) {
    console.log(`Os números ${valorA} e ${valorB} são iguais.`);
  } else {
    console.log(`Os números ${valorA} e ${valorB} não são iguais.`);
  }
}
comparaValores();

function valoresFinais() {
  let somaDosValores = valorA + valorB;
  let defineDez = "maior que";
  let defineVinte = "maior que";

  if (somaDosValores < 10) {
    defineDez = "menor que";
  }

  if (somaDosValores === 10) {
    defineDez = "igual a";
  }

  if (somaDosValores < 20) {
    defineVinte = "menor que";
  }

  if (somaDosValores === 20) {
    defineVinte = "igual a";
  }

  console.log(`Sua soma é ${somaDosValores}, que é ${defineDez} 10 e ${defineVinte} 20.`);
}

valoresFinais();
