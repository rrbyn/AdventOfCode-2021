let fs = require('fs');
let array = fs.readFileSync('input6.txt').toString().split(',').map(x => parseInt(x))
console.log(array)
let day = 0

while (day < 80){
    console.log(array)
    for(fish in array){
        if(array[fish] == 0){
            array[fish] = 6
            array.push(8)
        } else {
            array[fish]--
        }
    }
    day++
}
console.log(array,array.length)
