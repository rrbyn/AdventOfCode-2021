let fs = require('fs');
let array = fs.readFileSync('input2.txt').toString().split(/\r?\n/)
let x = y = z = 0;

for(i in array) {
    let direction = array[i].split(' ')[0]
    let amount = parseInt(array[i].split(' ')[1])
    switch(direction){
        case 'forward':
            x += amount
            y += z * amount
            break;
        case 'up':
            z -= amount
            break;
        case 'down':
            z += amount
            break;
    }
}
console.log(x*y)

