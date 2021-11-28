// Space Complexity (Auxiliary Space Complexity)
//
// We can measure space complexity similarly to time complexity
// using Big O Notation. Whilst Time Complexity
// describes the time of the input of an algorithm
// as the size of the input increases, Space complexity
// describes how much additional memory is required in order
// to run our algorithm.

// As n grows approaching infinity the size of the input
// itself grows. Auxiliary Space Complexity refers to the
// space required by the algorithm, not including this space
// taken up by inputs. This is what we mean when we say 
// "Space Complexity".

// In Big O we already assume that as n grows approaching 
// infinity that the input n will grow in conjunction with
// the algorithm. This is the point of using Big O and we 
// can therefore discount inputs, as we only care about
// the effect this will have within the algorithm itself.

// Space Complexity Rules
//
// Most primitives:
//      boolean
//      numeric
//      undefined  
//      null 
//
// Are constant space. The value/size of the input matters not
// a truthy boolean takes up the same constant space as a falsy
// boolean, a numeric of 100 takes up the same space as a numeric
// of 100000000 and so on...

// Strings require O(n) space, where n is the length
// of the string. This is a linearly scaling space complexity.
// If n grows to 50 characters long the string takes up 50 times 
// more space than that where n is equal to 1 character.

// Reference types are generally also linear (O(n) space complexity)
// where for arrays n is the length, or in the case of objects the 
// number of keys.
//
// An array with length 4 compared to that of length 40, the array 
// with the length of 40 takes up 10 times more space than
// the array of length 4.
//
// In the same case where can object with array keys of 6 compared to
// an object where the number of array keys is equivalent to 3, the array
// with 6 keys will take up twice as much space as that of the array with 3 keys.

let sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// In the above remember we are talking about space complexity, not time complexity. 
// If we were discussing time complexity we could say this algorithm ahs a time complexity of 
// O(n) as the number of operations is eventually bounded by the value of n (linear time complexity).

// Now lets focus back on space complexity, if we want to calculate the space complexity
// of this algorithm, we must first break down our algorithm and find all locations
// where our memory is assigned. In this case, no matter the size of the array, 
// we will always have a total variable. We know that this is a primitive value
// and therefore of a constant space complexity. Next we add to the total variable,
// based on the current value within our array. Now this might trip you up, remember, 
// this is SPACE complexity and not TIME complexity, therefore we do not care about the
// loop itself. The loop takes up no additional space in memory, only the assignation
// components will make a difference to our resultant Space Complexity, hence,
// we only have two places where we create new variables, and thus these are the only,
// parts of our algorithm we care about. We could say this is O(2) but as we learned earlier, 
// we usually simplify our expressions, rather than O(2) we can say this is algorithm
// has a constant Space Complexity O(1), the number is inconsequential as it will always
// remain constant, no matter our input the algorithm will always consist of two assignations
// of which are allocated space in memory.