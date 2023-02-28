const a = parseInt(prompt('First num'));
const b = parseInt(prompt('Second num'));
sum(a, b);
minus(a, b);
multiply(a, b);
divide(a, b);

function sum(a, b) {
  console.log(a + b);
}

function minus(a, b) {
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}

function divide(a, b) {
  console.log(a / b);
}