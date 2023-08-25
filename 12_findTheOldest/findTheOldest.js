const findTheOldest = function(input) {
    nameAndAgeArray = []
    let oldest
    age = []
    input.forEach(element => {
        // somwObj = new obj
        someObj = []
        someObj.name = element.name
        someObj.age = element.yearOfDeath - element.yearOfBirth
        // nameAndAgeArray[element.name] =  element.yearOfDeath - element.yearOfBirth
        // return element.name
        nameAndAgeArray.push(someObj)
    });
    nameAndAgeArray.forEach(element=>{
        age.push(element.age) 
    });
    // console.log(age)
    max = Math.max(...age)
    nameAndAgeArray.forEach(element=>{
        if(element.age == max){
            oldest = element
            console.log(oldest)
        } else{
            // console.log(element)
        }
    })
    return oldest
    // console.log(`max:${Math.max(...age)}`)
    // nameAndAgeArray.
    // return nameAndAgeArray
};

// Do not edit below this line
module.exports = findTheOldest;
