function add(a, b) {
  return a + b;
}

// valores por defecto en los parametros
function calculateBill(total, tax = 0.13, tip = 0.15) {
  return total + total * tax + total * tip;
}

// asignada a una variable
const square = function (x) {
  return x * x;
};

const person = {
  point: 2,
  score: function () {
    return point++;
  },
};

// Arrow Function
const getSum = (a, b) => a + b;
const square1 = (x) => x * x;

const miArray = [3, 5, 6, 7];

miArray.forEach((x) => console.log(x));
