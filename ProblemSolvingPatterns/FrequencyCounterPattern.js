// Frequency Counter Pattern
//
// This pattern uses sets to collect values/frequencies of values.
// It is a useful pattern for when we need to compare multiple inputs
// as it can often avoid the need for nested loops which create O(N^2) 
// complexity in operations with arrays/strings. 

// Anytime you are comparing pieces of data frequencies are something
// which naturally occur. Using frequencies we can take a solution which
// would be a quadratic (O(N^2)) time complexity and convert it into a solution 
// of linear (O(N)) time.

// Challenge Statement

// "Write a function called same, which accepts two arrays.
//  The function should return true if every value in the array
//  has it's corresponding values squared in the second array. 
//  The frequency of values must be the same."

// Example:
//
// same([1, 2, 3], [4, 1, 9])  // true
// In this example 1, 2, 3 squared are all in the second array 
// 1^2 = 1
// 2^2 = 4
// 3^2 = 9
//
// same([1, 2, 3], [1, 9]) // false 
// This example is false because we only have the square of the first two
// items not the third. 
// 1^2 = 1
// 2^2 = 3
// 3^2 = 9
//
// same([1, 2, 1], [4, 4, 1]) // false
// Whilst we have both the square root of 2 and the square root of 1
// in the second array, they do not appear in the correct frequency.
// We only have one 2 in the first array and two 1's. This would be
// true if it were the inverse. 

let same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i] ** 2);
        if (index === -1) {
            return false;
        }
        arr2.splice(index, 1);
    }
    return true;
}

// First we check the array lengths. If the lengths are not equal,
// there is no possibility the frequency can be the same, so we are done. 
// We then loop over the first array, and call indexOf() with the square of each 
// value of the first array. Essentially, we are checking if there is a value
// of value squared in arr2. 

// We check if the index = -1 (it isn't in the array) we return false,
// other wise we remove that item from arr2. 