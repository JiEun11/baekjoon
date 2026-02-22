const fs = require('fs');
let inputArr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const A = inputArr[0];
const B = inputArr[1];
const V = inputArr[2];

let lastDay;
let countDay;

// countDay = lastDay + 1;

//lastDat >= Math.ceil((V-A)/(A-B))

countDay = Math.ceil((V-A)/(A-B)) + 1;

console.log(countDay);