const palindromes = function (str) {
    for (let index = 0; index < str.length; index++) {
        let strLen = Math.round(str.length/2)
        let strLast = str[str.length-1-index]
        let curr = str[index]
        console.log(`index: ${index}`); // `lol` -> 0,1,2
        console.log(`strLen: ${strLen}`);
        // if (index == strLen) {
        //     console.log(`mp`);
        // }
        console.log(`str[index]: ${str[index]}`);
        console.log(`currIndex: ${curr}`)
        console.log(`currLast: ${strLast}`)
        if (curr != strLast) {
            // console.log(`not ok`)
            return false
            break
        } 
    }
    return true
    
};

function p(str) {
    
}

// Do not edit below this line
module.exports = palindromes;


// for loop(index = 1,2,3{<= str.length} index++) :
//     if mp then pass 
//     if str[n] != str[l] where n is starting point & l is last point, l= str.length -1-index
//         then return false
// if the loop doesn't return false then reteurn true 
