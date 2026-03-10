const repeatString = function(string, num) {
    if (num >= 0) {
        let repeatedString = string.repeat(num);
        return console.log(repeatedString);
    }
    else if (num < 0) {
        return console.log('ERROR');
    }
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
