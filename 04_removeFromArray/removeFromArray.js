const removeFromArray = function(array, numDelete) {
    const newArray = []
    array.forEach((item) => {
        if(!numDelete.includes(item)){
            newArray.push(item)
        }
    })
};

removeFromArray([1,2,3,4],3)

// Do not edit below this line
module.exports = removeFromArray;
