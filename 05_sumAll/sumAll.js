const sumAll = function(arraySum) {
    let sum = 0
    arraySum.forEach(item => {
        sum += item
    })
    return sum
};

function getRange(firstNumb, lastNumb){
    newArray = []
    if(firstNumb < 0 || lastNumb < 0 || typeof lastNumb === 'string' || typeof firstNumb === 'string' || typeof firstNumb === 'object' || typeof lastNumb === 'object'){
        return 'ERROR'
    }else if(firstNumb > lastNumb){
        for(let i = lastNumb; i <= firstNumb; i++){
            newArray.push(i)
        }
    }else{
        for(let i = firstNumb; i <= lastNumb; i++ ){
            newArray.push(i)
        }
    }
    return newArray
}

arrayToFindRange = [10, -4]

arrayToSum = getRange(arrayToFindRange[0], arrayToFindRange[1] )

console.log(sumAll(arrayToSum))

// Do not edit below this line
module.exports = sumAll;
