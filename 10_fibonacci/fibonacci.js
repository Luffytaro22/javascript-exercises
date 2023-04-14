const fibonacci = function(a) {
    if(a <= 0) return 'OOPS';
    let fibonnaciSequence = [1,1];
    for(let i = 2; i < a; i++){
        fibonnaciSequence[i] = fibonnaciSequence[i-1] + fibonnaciSequence[i-2];
    }
    return fibonnaciSequence[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
