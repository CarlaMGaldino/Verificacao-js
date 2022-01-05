var valorA = 2;
var valorB = 2;

function operadores() {
  if (valorA == valorB) {
    console.log("O valor é igual");
  } else {
    console.log("O Valor é diferente");
  }
}
operadores();

function somaValores() {
  let somaValores = valorA + valorB;
  console.log(somaValores);

  if (somaValores > 10 && somaValores < 20) {
    console.log(`A soma dos valores A + B é maior que 10 e menor 20`);
  } else if (somaValores > 20) {
    console.log("A soma dos valores A + B é maior que 10 e é maior que 20");
  } else {
    console.log("A soma dos valores A + B é menor que 10");
  }
}
somaValores();

function valoresFinais() {
  let igualDiferente = valorA == valorB;
  let somaDosValores = valorA + valorB;

  if (valorA == valorB && somaDosValores < 20) {
    console.log(`Os numeros ${valorA} e ${valorB} são iguais. Sua soma é ${somaDosValores}, que é menor que 10 e menor que 20.`);
  }
}

valoresFinais();
