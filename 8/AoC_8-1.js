/* not my best code ;) */
let fs = require('fs');
let array = fs.readFileSync('input7.txt').toString().split(',')
for (el in array) {
    array[el] = array[el].split(' | ')
    array[el][0] = array[el][0].split(' ')
    array[el][1] = array[el][1].split(' ')
}
let finalOutput = []

let checker = (arr, target) => target.every(v => arr.includes(v));

for (let line in array) {
    let numbersArray = Array(10).fill('')
    let fiveList = []
    let sixList = []
    let fiveFin
    let clockLetters = {
        'top': '',
        'topleft': '',
        'topright': '',
        'middle': '',
        'bottomleft': '',
        'bottomright': '',
        'bottom': ''
    }
    let currentLine = array[line][0].sort((a, b) => a.length - b.length)
    numbersArray[1] = currentLine[0].split('')
    numbersArray[7] = currentLine[1].split('')
    numbersArray[4] = currentLine[2].split('')
    numbersArray[8] = currentLine[9].split('')
    nineFinder = new Set([...numbersArray[7], ...numbersArray[4]])
    numbersArray[9] = find(currentLine, nineFinder, 'bottom', clockLetters)
    clockLetters['bottomleft'] = numbersArray[8].filter(x => !numbersArray[9].includes(x))[0];
    clockLetters['top'] = numbersArray[7].filter(x => !numbersArray[1].includes(x))[0];
    for (let el in currentLine) {
        if (currentLine[el].length == 5) {
            fiveList.push(currentLine[el].split(''))
        }
        if (currentLine[el].length == 6) {
            sixList.push(currentLine[el].split(''))
        }
    }
    fiveFin = fiveList[0].filter(x => fiveList[1].includes(x));
    fiveFin = fiveFin.filter(x => fiveList[2].includes(x))
    clockLetters['middle'] = fiveFin.filter(x => ![clockLetters['top'], clockLetters['bottom']].includes(x))[0];
    fiveList.forEach(el => {
        if (checker(el, numbersArray[1])) {
            numbersArray[3] = el
        } else if (el.includes(clockLetters['bottomleft'])) {
            numbersArray[2] = el
        } else {
            numbersArray[5] = el
        }

    })
    sixList.forEach(el => {
        if (!el.includes(clockLetters['middle'])) {
            numbersArray[0] = el
        } else if (el.sort().join('') == numbersArray[9].sort().join('')) {
        } else {
            numbersArray[6] = el
        }
    })
    let tempStr = ''
    for(let x in array[line][1]){
        for(let y in numbersArray){
            console.log(array[line][1][x],numbersArray[y].sort().join(''))
            if (array[line][1][x].split('').sort().join('') == numbersArray[y].sort().join('')){
                tempStr += y.toString()
                break
            }
        }
        if(tempStr.length==4){
            finalOutput.push(Number(tempStr))
            break
        }

    }

}


console.log(finalOutput)
console.log(finalOutput.reduce((a, b) => a + b))

function find(currentLine, finder, clock, clockLetters) {
    for (let el in currentLine) {
        if (checker(currentLine[el].split(''), [...finder])) {
            clockLetters[clock] = currentLine[el].split('').filter(x => ![...finder].includes(x))[0]
            return currentLine[el].split('')
        }
    }
}