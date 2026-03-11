// const removeFromArray = function(array, ...args) {
//     const newArray = [];

//     array.forEach((item) => {
//         if(!args.includes(item)) {
//             newArray.push(item);
//         }
//     })

//     return newArray;
// };

const removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val))
}

console.log(removeFromArray([1, 2, 3], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;

// 1. take 2 arguments, array and num
// 2. iterate through each item of array
// 3. check if item of array is equal to num
// 4. if no, leave alone
// 5. if yes, remove that item from array