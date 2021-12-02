const same = (a, n) => {
    if (a.length !== n.length) {
        return false; 
    }

    for (item of a) {
        const index = n.indexOf(item ** 2);
        if (index === -1) {
            return false; 
        }
        n.splice(index, 1);
    }
    return true;
}

console.log(same([1, 1, 2], [1, 4, 4]));

// Write a function taking two arrays as input
// The function should return true
// if every value of a has it's corresponding
// square stored in n. The frequency at which
// the results occur must remain the same.


// we want a function
// we want two arrays as input
// we want to create an object to store the result 
// we want to avoid nested loops as this will increase time complexity
// we want to loop over array a
// we then want to check array n for the existence of a[i]^2
// we want to ensure the frequency is the same 


// same([1, 2, 3], [1, 4, 9]) // true 
// same([1, 9, 3], [1, 81]) // false 
// same([1, 2, 2], [1, 4, 4]) // true 
// same([1, 1, 2], [1, 4, 4]) // false 


// Explanation
//
// In this solution we first check
// that the lengths are the same. 
// This is the simplest possible check 
// as if the lengths are not the same,
// it is impossible for the frequency to be
// the same, therefore we can stop at this 
// point and simply return false.
// In this circumstance no more work needs to
// be done to achieve a false result, therefore
// we can save resources by performing this check first.
//
// We then loop over each item in array a 
// as we loop we select the item in array n
// which is the index equivalent to the exponent
// of a[item].
//
// If this does not exist the index will be -1 
// therefore we can check for -1 and return false
// as if the index ever equals -1 we know the exponent
// of a[item] does not exist in array n.  
//
// At this point we have essentially solved the base
// issue. The remaining problem is the frequency, as
// at this point our algorithm would return true
// if we have a = [1, 1, 2] and b = [1, 4, 4]
// since 1 will match index 1 and 2 will match
// either of the index 4. Although the frequency
// is different, we still receive a true result.
//
// to prevent this we want to remove the last 
// compared item from array n to prevent future 
// iterations from comparing indexes of the same 
// value in a to an index of n which already has
// a valid comparator. This would mean the frequency
// is the same, therefore, we finally return true
