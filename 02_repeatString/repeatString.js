const repeatString = function(string, num) {
    let arrayString = []
    if(num < 0) return 'ERROR'
    for(let i = 0; i < num; i++){
        arrayString.push(string)
     }
    return arrayString.join('')
};

function getRandomNumber(){
    return Math.floor(Math.random() * 1000)
}

randomNumber = getRandomNumber()

repeatString('hey', -1)


// Do not edit below this line
module.exports = repeatString;
