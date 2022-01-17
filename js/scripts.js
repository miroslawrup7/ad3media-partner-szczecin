const valuationArea = document.querySelectorAll(".quot-elements");
const allPriceParams = document.querySelectorAll(".calc");

const validate = (validElement) => {
  if (isNaN(validElement.value)) {
    alert("Wprowadzona wartość powinna być liczbą.");
    validElement.value = "";
  }
};

const calculate = () => {
  let suma = 0;

  for (let element of allPriceParams) {
    let elPrice = 0;
    const calcPrice = element.querySelector(".calc-price");
    const calcQuantity = element.querySelector(".calc-quantity");

    if (calcQuantity) {
      validate(calcQuantity);
      elPrice = Number(calcPrice.value) * Number(calcQuantity.value);
    } else {
      elPrice = Number(calcPrice.value);
    }

    if (calcPrice.checked) {
      suma = suma + elPrice;
    }
  }

  let rest,
    thousands,
    millions = "";

  let sumaStr = suma.toString();

  if (sumaStr.length > 3 && sumaStr.length <= 6) {
    rest = sumaStr.slice(sumaStr.length - 3, sumaStr.length);
    thousands =
      sumaStr.slice(sumaStr.length - sumaStr.length, sumaStr.length - 3) + " ";
  }

  if (sumaStr.length > 6) {
    rest = sumaStr.slice(sumaStr.length - 3, sumaStr.length);
    thousands = sumaStr.slice(sumaStr.length - 6, sumaStr.length - 3) + " ";

    millions =
      sumaStr.slice(sumaStr.length - sumaStr.length, sumaStr.length - 6) + " ";
  }

  sumaStr !== "0" ? (sumaStr = millions + thousands + rest) : sumaStr;

  document.querySelector(".quot-box").innerText = sumaStr + " PLN";
};

for (let element of valuationArea) {
  element.addEventListener("input", calculate);
}

calculate();
