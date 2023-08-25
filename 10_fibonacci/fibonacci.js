const fibonacci = function(num) {
    let firstPrev = 1;
    let secondPrev = 0;
    
    for (let i = 2; i <= num; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;


// 0,1,1,2,3,5,8

// for (index->0,1,2,3 ,num= 4):
//     1+1

// 1+1+2+3

// precedingnum = sum 