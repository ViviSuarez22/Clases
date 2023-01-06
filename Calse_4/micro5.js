let velocidad = 270
let altura = 200

let permisoAterrizaje = velocidad > 268 && velocidad < 278 && altura > 150 && altura < 300 ? "Aterrizar" : "No Aterrizar"
console.log(permisoAterrizaje);
