// Una promesa puede tener los siguientes estados
// pending (pendiente): ni cumplio ni rechazo
// fulfilled (cumplida): se ejecuto con exito
// rejected (rechazada): algun error

function dividir(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("No se puede dividir por cero"));
    } else {
      resolve(a / b);
    }
  });
}

//console.log(dividir(10, 0));

dividir(10, 0)
  .then((resultado) => {
    console.log("Resultado: " + resultado);
  })
  .catch((error) => {
    console.log("Ocurrio un error:" + error.message);
  });
