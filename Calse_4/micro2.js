let pagoMes = 12000;
let consumoKwh = 420;
let aumento = 1.20;
let limiteConsume = 300;

let totalPago = consumoKwh > limiteConsume ? "Debido a que su hogar tuvo un consumo de " + consumoKwh + "Kwh, en base al ajuste tarifario hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%,cumplimos con informarle que se ha ajustado el total a pagar, que será de $" + (pagoMes*aumento) : "Total a pagar" + pagoMes;
console.log(totalPago);
