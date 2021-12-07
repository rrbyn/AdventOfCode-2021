let fs = require('fs');
let array = fs.readFileSync('input7.txt').toString().split(',').map(el => parseInt(el))
let lowest = 0
let currentFuel = 0

/* for (x in array){
    workArr = array.slice()
    workArr.splice(x,1)
    for (let y = 0; y < workArr.length; y++){
        currentFuel += array[x] > workArr[y] ? array[x] - workArr[y] : workArr[y] - array[x]
        console.log(array[x] - workArr[y])
    }
    if (lowest == 0 || currentFuel<lowest){
        lowest = currentFuel
    }
    currentFuel = 0
}
console.log(lowest) */

array = array.sort((a,b) => a - b)
median = array[Math.floor(array.length/2)]
array.forEach(el => {
    currentFuel += Math.abs(el-median)
})
console.log(currentFuel)