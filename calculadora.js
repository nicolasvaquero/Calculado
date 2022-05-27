const prompt = require("prompt-sync")({ sigint: true });

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

/* console.log(sumar(2, 3));
console.log(restar(2, 3));
console.log(multiplicar(2, 3));
console.log(dividir(2, 3)); */

const a = parseInt(prompt("Ingrese el primer número: "));
const b = parseInt(prompt("Ingrese el segundo número: "));

console.log(sumar(a, b));
console.log(restar(a, b));
