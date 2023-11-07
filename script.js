const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");
const resultado = document.getElementById("resultado");

function operacion(operacion) {
  const valorNum1 = parseFloat(num1.value);
  const valorNum2 = parseFloat(num2.value);

  if (valorNum1 > 0 && valorNum2 > 0) {
    let resultadoValue;

    if (operacion === "suma") {
      resultadoValue = valorNum1 + valorNum2;
    } else if (operacion === "resta") {
      resultadoValue = valorNum1 - valorNum2;
    } else if (operacion === "multiplicacion") {
      resultadoValue = valorNum1 * valorNum2;
    } else if (operacion === "division") {
      resultadoValue = valorNum1 / valorNum2;
    }

    resultado.textContent = `Resultado: ${resultadoValue}`;
  } else {
    resultado.textContent = "Por favor, ingresa valores mayores que 0";
  }
}

suma.addEventListener("click", function () {
  operacion("suma");
});

resta.addEventListener("click", function () {
  operacion("resta");
});

multiplicacion.addEventListener("click", function () {
  operacion("multiplicacion");
});

division.addEventListener("click", function () {
  operacion("division");
});
