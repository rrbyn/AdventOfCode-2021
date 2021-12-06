let fs = require('fs');
let lines = fs.readFileSync('input3.txt').toString().split(/\r?\n/)
let O2 = CO2 = lines
let O2Counter, CO2Counter

for(let i = 0; i < lines[0].length; i++){
    O2Counter = 0
    CO2Counter = 0
    for(line in O2) {
        parseInt(O2[line][i]) ? O2Counter++ : O2Counter--;
    }
    for(line in CO2) {
        parseInt(CO2[line][i]) ? CO2Counter-- : CO2Counter++;
    }
    
    O2 = ratingFilter(O2,O2Counter,i,'O2')
    CO2 = ratingFilter(CO2,CO2Counter,i,'CO2')
}

console.log(parseInt(O2,2)*parseInt(CO2,2))

function ratingFilter(ratingArray,ratingCounter,i,ratingType){
    if(ratingArray.length != 1){
        for (line in ratingArray){
            if (ratingCounter > 0){
                return ratingArray.filter(line => parseInt(line[i]) == '1')
            } else if (ratingCounter<0){
                return ratingArray.filter(line => parseInt(line[i]) == '0')
            } else if (ratingCounter==0){
                if(ratingType=='O2'){
                    return ratingArray.filter(line => parseInt(line[i]) == '1')
                } else if (ratingType=='CO2'){
                    return ratingArray.filter(line => parseInt(line[i]) == '0')
                }
            }
        }
    } else{
        return ratingArray
    }
}