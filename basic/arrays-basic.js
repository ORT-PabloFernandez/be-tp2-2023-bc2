// declaracion de array

const nombres = ["Pedro", "Juan", "Isabel", "Maria"];

//nombres[nombres.length -1];

// Tip lo voy a usar cuando tengo que cambiar la dimension del array
for (let i = 0; i < nombres.length; i++) {
  const element = nombres[i];
}

for (const nombre of nombres) {
  console.log(nombre);
}

for (const key in nombres) {
  console.log(nombres[key]);
}

const miObjeto = {
  primeraPropíedad: 3,
  segundaPropiedad: 5,
};

for (const key in miObjeto) {
  console.log(miObjeto[key]);
}

nombres.push("Anna"); //a la ultima
nombres.unshift("Juan"); // a la primera

nombres.forEach((nombre) => console.log(nombre));

const primerElemento = nombres.pop(); //sacar del principio
const ultimoElemento = nombres.shift(); // sacar del ultimo

// Para practicar
// balanced brackets
// "{}{}([{}]) --> esto esta balanceado"
// "{{([)])}}" --> esto no esta balanceado"

//Pista
const cadenaBrackets = "{}{}([{}])";
console.log(cadenaBrackets[3]);

const indiceAnna = nombres.indexOf("Anna");

nombres.slice(3, 5);

// splice
// sort
// split
// join
