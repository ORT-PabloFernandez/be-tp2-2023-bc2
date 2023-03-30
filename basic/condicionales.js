

// (==) igual sin verificar el tipo
// 2 == "2"
// (===) verificacion del tipo y valor
// 2 != "2"

console.log(null == undefined); 
console.log(0 == false);
console.log("0" == false);
console.log(0 == "");

console.log(0 == null);
console.log(0 == undefined);
let b = 5;
let a = b === 5 ? 5 : 4;

// Que considera falso javascript (valores falsos)

// false, undefined, null, 0, NaN, ''

if(''){
    console.log("VERDADERO");
} else {
    console.log("FALSE");
}


