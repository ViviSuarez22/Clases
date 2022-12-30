let num1 = 8
let num2 = 9
let operacion = "Dividir"

switch (operacion) {
    case "Suma":
        console.log("El resultado de sumar " + num1 + "+" + num2 + " es " + (num1+num2));
        break;
    case "Resta":
        console.log("El resultado de restar " + num1 + "-" + num2 + " es " + (num1-num2));
        break;
    case "Multiplicar":
        console.log("El resultado de multiplicar " + num1 + "*" + num2 + " es " + (num1*num2));
        break;
    case "Dividir":
        console.log("El resultado de sumar " + num1 + "/" + num2 + " es " + (num1/num2));
        break;
    default:
        break;
}