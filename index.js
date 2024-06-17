const moment = require('moment');
require('colors');

moment.locale('es');
  
// fecha actual y hora del sistema
console.log(moment().format());
 
// Mes día año, h:mm:ss pm
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
 
// dia
console.log(moment().format('dddd'));
 
// mes 16th 24
console.log(moment().format("MMM Do YY"));
 
// 2020 escaped 2020
console.log(moment().format('MMMM,Do,YYYY [escaped] YYYY,MMMM,Do'));


const myVar = '1987-06-19';
/* Obtenemos un moment de ahora mismo */
const fecha_inicio = moment();
/* Obtenemos un moment de la fecha indicada anteriormente */
const fecha_termino = moment(myVar);

console.log('fecha actual:'.yellow, fecha_inicio);
console.log('fecha cumpleaños:'.bgRed.white,fecha_termino);
/* Calculamos la diferencia y la mostramos en el Terminal */
console.log('Años:'.blue,fecha_inicio.diff(fecha_termino,'year'));
console.log('Dias:'.green,fecha_inicio.diff(fecha_termino,'day'));
console.log('Horas:'.red,fecha_inicio.diff(fecha_termino,'hours'));
console.log('Minutos:'.blue,fecha_inicio.diff(fecha_termino,'minutes'));