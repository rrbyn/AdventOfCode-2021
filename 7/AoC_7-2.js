let fs = require('fs');
let array = fs.readFileSync('input7.txt').toString().split(',').map(el => parseInt(el))
let fuel = 0

mean = Math.floor(array.reduce((a,b) => a+b) /array.length)
array.forEach(el => {
    let n = Math.abs(el-mean)

    fuel += Math.floor(((n*n) +n) / 2)
    
})
console.log(fuel)