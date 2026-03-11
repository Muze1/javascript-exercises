const repeatString = function(string, num) {
    if (num > 0) {
        let repeatedString = string;

        for (let i = 1; i < num; i++) {
            repeatedString = repeatedString + string;
        }

        return repeatedString;
    }
    else if (num <= 0) {
        return 'ERROR';
    }
};

console.log(repeatString('hey', 4));

// Do not edit below this line
module.exports = repeatString;
