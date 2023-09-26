const emptyArray = [];

for(let i = 0; i < 10; i ++) {
    let random = Math.floor(Math.random() * 100);
    emptyArray.push(random);
}

console.log(emptyArray);

const input = prompt('Ingresa varias palabras separadas por coma, todas las que quieras');
const arr = input.split(",");

console.log(arr);

const uArray = [10,40,30,20,15,5];
uArray.sort((a, b) => a - b);

console.log(uArray);

const min = Math.min(...uArray);
const max = Math.max(...uArray);

console.log('The minimum value in the array is: ' + min);
console.log('The maximum value in the array is: ' + max);