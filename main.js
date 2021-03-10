const min = require('./min');
const sum = require('./summ');
const abs = require('./abs');

const testArr = [123, 54, 23, 2352, 1, 23, 3, -123, -12, -3123]

console.log(`The array is: ${testArr}`)
console.log(`The min is: ${min(testArr)}`)
console.log(`The sum of array is: ${sum(testArr)}`)
console.log(`The abs of all numbers is is: ${testArr.map(abs)}`)
