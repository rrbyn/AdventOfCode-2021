let fs = require('fs');
let array = fs.readFileSync('input2.txt').toString().split(/\r?\n/)
let x = y = 0;

for(i in array) {
    let direction = array[i].split(' ')[0]
    let amount = parseInt(array[i].split(' ')[1])
    switch(direction){
        case 'forward':
            x += amount 
            break;
        case 'up':
            y -= amount
            break;
        case 'down':
            y += amount
            break;
    }
}
console.log(x*y)

