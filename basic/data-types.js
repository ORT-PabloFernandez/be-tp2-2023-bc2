// Tipos de datos en javascript
// Number, String, Boolean, Symbol, Null, Undefined, Object
// Javascript es un lenguaje de tipado dinamico

// NUMBER
let var1 = 1;
let var2 =-0;
let miInfinito = var1 / var2;
let maschico = 1 - miInfinito;

console.log("Mas chico:" + maschico);

console.log("1 / -0 = " + var1 / var2);

console.log("Raiz cuadrada (-1): " + Math.sqrt(-1));

// STRINGS 
let saludo = "Hola ' mundo";
let pizaa = "🍕";

console.log(`
                Hola mundo quiero una 
                ${pizaa}
            `);

let numeroVuelo = '454564';
console.log(typeof ((numeroVuelo) + 1 ));

// Null: Representa la ausencia de valor
let nulo = 45;
nulo = null;

// Undefined: es por ejemplo una propiedad que no existe, o una variable sin asignar
let nodefinido;
console.log(nodefinido);
console.log(Number.Propiedad);

nodefinido = "casa";

// Objetos
let user = {name: "Pablo", email: "pablo.hinojosa@edu.com.ar"};
// JSON Javascript Object Notation

console.log(`Nombre: ${user.name}`)
console.log(`Email: ${user["email"]}`)

console.log(`mi objeto: ${
    {
        telefono: 3456345, 
        url: "asdfasdf"
    }
}`);

