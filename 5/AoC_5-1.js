let fs = require('fs');
let array = fs.readFileSync('input5.txt').toString().split(/\r?\n/)
let formattedArray = array.map(el => el.split(' -> ')).map(el => [el[0].split(','), el[1].split(',')])
let board = []
let sum = 0
let maxX = maxY = 0
for (el in formattedArray) {
    for (block in formattedArray[el]) {
        if (maxX < parseInt(formattedArray[el][block][0])) {
            maxX = parseInt(formattedArray[el][block][0])
        }
        if (maxY < parseInt(formattedArray[el][block][1])) {
            maxY = parseInt(formattedArray[el][block][1])
        }
    }
}
for (let i = 0; i <= maxY; i++) {
    board.push(Array(parseInt(maxX) + 1).fill(0))
}

for (el in formattedArray) {
    let x1 = parseInt(formattedArray[el][0][0])
    let x2 = parseInt(formattedArray[el][1][0])
    let y1 = parseInt(formattedArray[el][0][1])
    let y2 = parseInt(formattedArray[el][1][1])
    /* console.log(x1,x2,y1,y2,maxX,maxY) */
    if (x1 != x2 && y1 == y2) {
        if (x1 < x2) {
            for (let i = x1; i <= x2; i++) {
                board[y1][i]++
            }
        } else if (x1 > x2) {
            for (let i = x2; i <= x1; i++) {
                board[y1][i]++
            }
        }
    } else if (y1 != y2 && x1 == x2) {
        if (y1 < y2) {
            for (let i = y1; i <= y2; i++) {
                board[i][x1]++
            }
        } else if (y1 > y2) {
            for (let i = y2; i <= y1; i++) {
                board[i][x1]++
            }
        }

    }
}
console.log(board)
for (line in board){
    for(el in board[line]){
        if(board[line][el]> 1){
            sum++
        }
    }
}
console.log(sum)
