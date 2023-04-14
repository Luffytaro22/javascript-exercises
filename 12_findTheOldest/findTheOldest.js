const findTheOldest = function(array) {
    const actualYear = new Date().getFullYear();
    const copyArray = [...array];
    let oldest = 0;
    let oldestIndex = 0;
    array.map(function(Object, index){
        if(Object.hasOwnProperty('yearOfDeath')){
            if(Object['yearOfDeath'] - Object['yearOfBirth'] > oldest){
                oldest = Object['yearOfDeath'] - Object['yearOfBirth'];
                oldestIndex = index;
            }
            return Object['yearOfDeath'] - Object['yearOfBirth'];
        }else{
            if(actualYear - Object['yearOfBirth'] > oldest){
                oldest = actualYear - Object['yearOfBirth'];
                oldestIndex = index;
            }
            return actualYear - Object['yearOfBirth'];
        }
    });
    return copyArray[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
