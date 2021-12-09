let fs = require('fs');
let array = fs.readFileSync('input8.txt').toString().split(/\r?\n/).map(el=>el.split(''))
let lowpoints = []
let longest = []

for(let y = 0; y < array.length; y++){
    for(let x = 0; x < array[y].length; x++){
        top = y > 0 ? array[y-1][x] : 9999
        bottom = y < array.length - 1 ? array[y+1][x] : 9999
        left = x > 0 ? array[y][x-1] : 9999
        right = x < array[y].length - 1 ? array[y][x+1] : 9999
        current = array[y][x]
        
        if(current<top&&current<bottom&&current<left&&current<right){
            findBasin(y,x)
            lowpoints.push(parseInt(current) + 1)
        }
    }
}

function findBasin(y,x){
    toVisit = []
    visited = []
    toVisit.push([y,x])
    
    while(toVisit.length>0){
        for(e in toVisit){
            visit(toVisit[e][0],toVisit[e][1],e)
        }
    }
    longest.push(visited)
}

console.log('Part 1: ', lowpoints.reduce((a,b)=> a+b))
console.log('Part 2: ', longest.map(el => el.length).sort((a,b)=>b-a).slice(0,3).reduce((a,b)=>a*b))


function visit(y,x,e){
    if(isArrayInArray(visited,[y,x])){     
        toVisit.splice(e,1)
        return
    }
    visited.push([y,x])
    if(array?.[y-1]?.[x] != undefined && array?.[y-1]?.[x] < 9 && !isArrayInArray(visited,[y-1,x])){
        toVisit.push([y-1,x])
    }
    if(array?.[y+1]?.[x] != undefined && array?.[y+1]?.[x] < 9 && !isArrayInArray(visited,[y+1,x])){
        toVisit.push([y+1,x])
    }
    if(array?.[y]?.[x-1] != undefined && array?.[y]?.[x-1] < 9 && !isArrayInArray(visited,[y,x-1])){
        toVisit.push([y,x-1])
    }
    if(array?.[y]?.[x+1] != undefined && array?.[y]?.[x+1] < 9 && !isArrayInArray(visited,[y,x+1])){
        toVisit.push([y,x+1])
    }
    toVisit.splice(e,1)
}
function isArrayInArray(arr, item){
    var item_as_string = JSON.stringify(item);
  
    var contains = arr.some(function(ele){
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }