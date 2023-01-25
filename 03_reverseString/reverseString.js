const reverseString = function(string, numLet){
    arrayStringReverse = []
    for(let i = numLet; i !== 0; i--){
        arrayStringReverse.push(string[i-1])
    }
    console.log(arrayStringReverse)
    return arrayStringReverse.join('') 
}

function getNumLetterInString(word){
    return word.length
}


console.log(reverseString('', getNumLetterInString('')))


// Do not edit below this line
module.exports = reverseString;
