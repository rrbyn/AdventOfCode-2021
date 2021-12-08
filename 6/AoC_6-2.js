let fs = require('fs');
let array = fs.readFileSync('input6.txt').toString().split(',').map(x => parseInt(x))
let fishArray = Array(9).fill(0)
let movefishAmount = 0
let day = 0
for (el in array) {
    fishArray[array[el]]++
}


while (day < 256) {
    movefishAmount = fishArray[0]
    for (let i = 1; i < fishArray.length; i++) {
        fishArray[i - 1] = fishArray[i]
    }
    fishArray[8] = 0
    if (movefishAmount != 0) {
        fishArray[6] += movefishAmount
        fishArray[8] += movefishAmount
    }
    day++
}
console.log(fishArray)
console.log(fishArray.reduce((a,b)=> a+b))

