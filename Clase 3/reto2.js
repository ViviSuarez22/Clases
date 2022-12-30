let nombre = "Juan"
let apellido = "jose"
let sueldoActual = 2000000
let porcentajeAumento = 25
let calculoAumento = (sueldoActual*porcentajeAumento)/100
let nuevoSueldo = sueldoActual+calculoAumento

console.log("Hola Estimado ", nombre + " " + apellido,
"en base a su sueldo actual", sueldoActual,
"recibio un aumento del 25%", calculoAumento,
"su nuevo sueldo es de: ", nuevoSueldo);