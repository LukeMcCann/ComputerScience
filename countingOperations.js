// Counting Operations
//
// Time is an unreliable and inconsistent measure,
// so what can we use to measure our functions performance
// instead? 
//
// In Computer Science we count the number of 
// simple operations the computer has to perform.
// This remains constant despite the specification
// of our machine, or whatever else may be running
// in the background. 
//
// If one function has 5 operations to perform, and 
// another has 7, it does not matter what spec
// our machine is, nor does it matter if our computer
// is running slower at that particular time for some
// reason. Whilst the times will vary, the number of 
// operations remains the same, func1 will always
// have 5 operations and func2 will always have 7.
//
// We can use this to calculate our algorithmic efficiency.

// If we take a look at the below function
let addUpTo = (n) => {
    return n * (n + 1) / 2;
}

// we can start by breaking down our function
// into it's basic operations, think of this
// as simplifying the algorithm.

// * - 1 Multiplication
// + - 1 Addition
// / - 1 Division 

// 3 simple operations

// The value of n is inconsequential. Whether n is 
// 1 or n is 1000000000 there are still only 3 
// operations occurring despite the size of n.

// Comparing this to the other solution
let addUpTo = (n) => {
    let accumulator = 0;
    for (let i = 0; i <= n; i++) {
        accumulator += i;
    }
    return accumulator;
}

// We can see there are a few more operations
// taking place

// + - n^2 Additions 
// = - n + 2 Assignments
// <= - n Comparisons

// due to being in a loop we have not just one operation
// for our addition, but our operation count scales
// directly with the value of n. This means for any
// n value we have n Addition operations occurring.

// As we can see, counting operations can quickly
// grow in complexity. In this case we need to generalise
// our solution, there is no static number we can 
// associate with the time complexity of this 
// algorithm, it isn't as simple as 3 operations,
// instead we can have a complexity as high as 
// 5n operations + 2 or as low as 2n dependent
// on the value of n. 

// When calculating time complexity we do not care
// about an exact calculation with an exact value.
// We are looking to describe the general pattern
// of which the algorithm follows. In this case the 
// number of operations generally grows in proportion
// with the value of n.

