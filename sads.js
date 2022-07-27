
function updateProductNumber(product, price,  isIncreasing) {
  const productInput = document.getElementById(product + '_number');
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  }
  // debugger;
  else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  const productTotal = document.getElementById(product + '_total');
  productTotal.innerText = productNumber * price;
  calculateTotal();
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "_number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateTotal() {
  const phoneTotal = getInputValue('phone') * 1219;
  const caseTotal = getInputValue('case') * 59;
  const subTotal = phoneTotal + caseTotal;
  let tax = subTotal / 10;
  const totalPrice = subTotal + tax;

  document.getElementById('subTotal').innerText = subTotal;
  document.getElementById('tax').innerText = tax;
  document.getElementById('total').innerText = totalPrice;
}

document.getElementById('phone_plus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, true);
})
document.getElementById('phone_minus').addEventListener('clcik', function () {
  updateProductNumber('phone', 1219, false);
})

document.getElementById('case_plus').addEventListener('click', function () {
  updateProductNumber("case", 59, true);
})
document.getElementById('case_minus').addEventListener('click', function () {
  updateProductNumber("case", 59, false);
})

// else if (productNumber > 0) {
//     productNumber = parseInt(productNumber) - 1;
//   }





