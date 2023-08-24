const removeFromArray = function(list, num) {
    let filteredArray = [];
    list.forEach(element => {
        if (element != num){
            filteredArray.push(element)
        }
    });
    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
