const leapYears = function(yr) {
    if(yr%400 == 0){
        return true
    } else if (yr%100 == 0) {
        return false
    } else if(yr%4 == 0){
        return true
    } else {return Error}
};

// Do not edit below this line
module.exports = leapYears;
