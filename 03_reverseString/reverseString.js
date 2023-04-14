const reverseString = function(string) {
    string.split('');
    let reverse = [];
    for(let i = string.length-1; i >= 0; i--){
        reverse.push(string[i]);
    }
    return reverse.join('');
};

// Do not edit below this line
module.exports = reverseString;
