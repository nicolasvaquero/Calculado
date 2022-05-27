/* Situacion:
Ir al trabajo a la mañana:
variables: temperatura, clima, estacion del anio, transprote, hora, dia de la semana, hora de vuelta

*/

let temperatura = 17;
let estacion = 'Otoño';
let llueve = true;
let transporte = 'Colectivo';
const horaIda = 9;
let diaDeLaSemana = 'Viernes';

const prompt = require("prompt-sync")({ sigint: true});
let horaRegreso = prompt('Ingresar hora de regreso: ');
console.log(`La hora de regreso es ${horaRegreso}`);


