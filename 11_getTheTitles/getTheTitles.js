const getTheTitles = function(input) {
    newArry =[]
    input.forEach(element => {
        newArry.push(element.title)
    });
    return newArry
};

// Do not edit below this line
module.exports = getTheTitles;
