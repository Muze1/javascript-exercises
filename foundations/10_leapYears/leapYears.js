const leapYears = function(year) {
    const divisibleByFour = year % 4 === 0;
    const notDivisibleByHundred = year % 100 === 0;
    const divisibleByFourHundred = year % 400 === 0;

    if (divisibleByFour &&
        (!notDivisibleByHundred ||
        divisibleByFourHundred)) {
            return true
        } else {
            return false
        }
};

console.log(leapYears(2000))
console.log(leapYears(1985))

// Do not edit below this line
module.exports = leapYears;

// Steps for function to determine if a given number is a leap year
// 1. Check if divisible by 4
// 2. Check NOT divisible by 100
// 3. UNLESS IF divisible by 400
// 4. 2000 should return true. 1985 returns false