const palindromes = function (str) {
    for (let index = 0; index < str.length; index++) {
        console.log("index: "+index)
        console.log("str.lenght-1: "+str.length-1)
        console.log("str[index]: "+str[index])
        console.log("str.lenght-1]: "+str.length-1)
        if (index == (str.length/2)) {
            pass
        } else if(str[index] != str[str.length-1]){
            return false
        } 
        
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
