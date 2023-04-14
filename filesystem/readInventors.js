import fs from 'fs';

const PATH = "./inventors.json";

let inventors = fs.readFileSync(PATH, 'utf-8');
inventors = JSON.parse(inventors);

console.log(inventors);

// Ejercicio, anadir un nuevo inventor y persistirlo
inventors.push({first:"Juan", last: "Peres", year: 1987});

fs.writeFileSync(PATH, JSON.stringify(inventors, null, '  '));

// EJERCICIO
// CRUD de Inventores
// function addInventor(inventor)
// function getInventor(id)
// function updateInventor(inventor)
// function deleteInventor(id)