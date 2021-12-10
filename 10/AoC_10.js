const exp = require('constants');
let fs = require('fs');
let array = fs.readFileSync('input10.txt').toString().split(/\r?\n/).map(el=>el.split(''))
/* console.log(array) */
let corruptValues = {
    ')':3,
    ']':57,
    '}':1197,
    '>':25137
}
let completeValues = {
    ')':1,
    ']':2,
    '}':3,
    '>':4
}
let scores = []
let errors = []
for(let y = 0; y <array.length; y++){
    let expecting = []
    let corrupted = false
    for(let x = 0; x < array[y].length; x++){
        /* console.log(expecting) */
        switch(array[y][x]){
            case '(':
                expecting.push(')')
                break
            case '[':
                expecting.push(']')
                break
            case '{':
                expecting.push('}')
                break
            case '<':
                expecting.push('>')
                break
            default:
               if(array[y][x] == expecting[expecting.length-1]){
                   expecting.splice(expecting.length-1,1)
               } else {
                   /* console.log(array[y][x], 'at array', x , 'was unexpected') */
                   errors.push(array[y][x])
                   corrupted = true
                   break
               }      
        }
        if(corrupted){
            break
        } 
    }
    if (!corrupted){
        let score = 0
        expecting = expecting.reverse()
        console.log(expecting)
        for(el in expecting){
            score = score * 5 + completeValues[expecting[el]]
        }
        scores.push(score)
    }
}
console.log('Part 1: ', errors.map(el=>corruptValues[el]).reduce((a,b)=>a+b))
console.log('Part 2: ', scores.sort((a,b)=>b-a)[Math.floor(scores.length/2)])

