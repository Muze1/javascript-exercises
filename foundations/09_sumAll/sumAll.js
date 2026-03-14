const sumAll = function(a, b) {
    let c = 0;
    let total = 0;


    if ((Number.isInteger(a) === false) ||
    (Number.isInteger(b) === false) ||
    (a < 0) ||
    (b < 0)) {
        return 'ERROR'; 
    } else if (a > b) { 
        c = a;
        a = b;
        b = c;
    }

    for (let i = a; i <= b; i++) {
        total += i;
    }
    return total;

    // // Efficient solution
    // if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    // if (a < 0 || b < 0) return 'ERROR';
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;

// Sum of all numbers between two given numbers
// 1. check which of the two numbers is bigger
// 2. loop iteratively from the smallest number to the largest
// 3. add the number from each iteration into the running total sum
// 4. at the last iteration, also add the largest number to the sum