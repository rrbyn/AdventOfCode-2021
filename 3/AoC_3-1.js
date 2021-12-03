let fs = require('fs');
let lines = fs.readFileSync('input3.txt').toString().split(/\r?\n/)
let gamma = new Array(lines[0].length).fill(0)
let epsilon = new Array(lines[0].length).fill(0)
for(line in lines) {
    for (number in lines[line]){
        if (lines[line][number] == 0){
            gamma[number]--
        } else if (lines[line][number] == 1) {
            gamma[number]++
        }
    }

}
for (number in gamma){
    if (gamma[number] > 0){
        gamma[number] = 1
        epsilon[number] = 0
    } else if (gamma[number] < 0){
        gamma[number] = 0
        epsilon[number] = 1
    }
}

console.log(parseInt(gamma.join(''),2) * parseInt(epsilon.join(''),2))
