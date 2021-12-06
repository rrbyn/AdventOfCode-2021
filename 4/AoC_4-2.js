let fs = require('fs');
let array = fs.readFileSync('input4.txt').toString().split(/\r?\n/).filter(el => el != '')
let boardsArray = []
let numbers = array[0].split(',')

for (let i = 1; i < array.length; i += 5) {
    boardsArray.push(formatBoard(array.slice(i, i + 5)))
}

for (let n = 0; n < numbers.length; n++) {
    if(boardsArray.length == 0){
        console.log('out!')
        console.log(last.join().split(',').filter(n => !currentNumbers.includes(n)).reduce((a,b)=>parseInt(a)+parseInt(b))* parseInt(currentNumbers[currentNumbers.length - 1]))
        break
    }
    currentNumbers = numbers.slice(0, n + 5)
    for (el in boardsArray) {
            for (let x = 0; x < 5; x++) {
                if (boardsArray[el]) {
                    let yArray = []
                    for (let y = 0; y < 5; y++) {
                        yArray.push(boardsArray[el][y][x])
                    }
                    if (checker(currentNumbers, boardsArray[el][x]) || checker(currentNumbers, yArray)) {
                        last = boardsArray.splice(el, 1)[0]
                    }
                }
            }
    }
}

function formatBoard(board) {
    temparr = []
    for (el in board) {
        temparr.push(board[el].trim().split(/[ ,]+/))
    }
    return temparr
}
function checker(arr, target){
    return target.every(v => arr.includes(v))
}