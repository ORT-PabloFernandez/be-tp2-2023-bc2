import fs from 'fs'

let texto = fs.readFileSync("./texto.txt", 'utf-8');
texto += "\nHola mundo en otra linea";
fs.writeFileSync("./texto.txt", texto);
console.log(texto);

