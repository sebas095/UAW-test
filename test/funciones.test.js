const tap = require('tap');
const { suma, resta, multiplicar, dividir } = require('../funciones');

// Tests

// Suma
tap.equal(7, suma(5, 2), 'check if numbers still work');
tap.notEqual(7, suma(5, 3), '7 should not equal 8');

// Resta
tap.equal(5, resta(8, 3), 'check if numbers still work');
tap.notEqual(5, resta(8, 2), '5 should not equal 6');

// Multiplicacion
tap.equal(15, multiplicar(3, 5), 'check if numbers still work');
tap.notEqual(15, suma(3, 6), '15 should not equal 18');

// Division 
tap.equal(6, dividir(12, 2), 'check if numbers still work');
tap.notEqual(6, dividir(12, 3), '6 should not equal 4');