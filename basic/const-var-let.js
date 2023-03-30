// deberia dejar de usarse
var a = 0;
let edad = 10;

if(edad < 14){
    //console.log(a);
    /// ....
    let a = 10;
    // ..
    //var a = 30;
    console.log(a);
    a = 11;

}
console.log(a);

// esta es la mejor forma
let b = 1;

// siempre que se pueda usar constantes
const c = 4;
//c = 6;

const empleado = {nombre: 'pedro', edad: 56};
const empleado2 = {nombre: 'pablo', edad: 56};

empleado.nombre = "Pedro";
empleado.direccion = "Donado";

//empleado = empleado2;

console.log(empleado);

//Object.freeze(empleado);

empleado.edad = 80;

console.log(empleado);



