const sumAll = function(a, b) {
    if(a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number'){
        return 'ERROR';
    }else{
        let sumNumbers = 0;
        if(a < b){
            for(let i = a; i <= b; i++){
                sumNumbers += i;
            }
        }else{
            for(let i = b; i <= a; i++){
                sumNumbers += i;
            }
        }
        return sumNumbers;
    }
};

// Do not edit below this line
module.exports = sumAll;
