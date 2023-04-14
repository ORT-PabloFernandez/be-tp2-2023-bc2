import fs from 'fs'

let texto = fs.readFileSync("./texto.txt", 'utf-8');

console.log(texto);