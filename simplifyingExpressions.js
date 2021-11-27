// Simplifying Big O Expressions

// When determining the time complexity of
// an algorithm, there are some helpful rules
// of thumb for the simplification of Big O expressions.

// It is important to remember we only care about the
// broad relation, not the specificity. 
// As such an expression like 5n + 2 can 
// be simplified to n, we do this by looking
// at which parts of the equation are most inconsequential.
// When we reach large numbers n + 2 makes very
// little difference, as does the 5 * n, therefore
// we can ignore this part of the equation and summise
// that our algorithm scales linearly with n (O(n) complexity).

// Rules to remember:

// Constants don't matter, we only care about the big picture, the fuzzy view. 
// 
// O(2n) can be simplified to O(n) - The 2 is inconsequential compared to the effect of n
//
// O(500) can be simplified to O(1) - O(500) means there are a constant
//                                    500 operations always performed. 
//                                    This means that O(1) would still 
//                                    broadly describe our relation.
//
// O(13n^2) can be simplified to O(n^2)

// Smaller terms don't matter
//
// O(n + 10) becomes O(n)
//
// O(1000n + 50) becomes O(n)
//
// O(n^2 + 5n + 8) becomes O(n^2)

// Arithmetic operations are constant
//
// All arithmetic operations are constant time complexity. It does not matter
// how large or small the number, a computer will take the same amount of time 
// to calculate 2 + 2 as it would for 100000000 + 100000000.

// Variable assignment is constant
//
// Variable assignment is always constant, a computer takes
// roughly the same amount of time to assign any variable.

// Accessing elements in an array (by index or object/key) is constant
// 
// If I have an array, whether I want the first or 10th item, so long as I am
// accessing the item via an index or a key, the time to access that item is 
// roughly the same no matter the location within the array.

// In a loop, the complexity is the length of the loop, multiplied by the
// complexity of whatever happens within the loop.
//
// If we are working with a loop counting up to n as n grows the complexity of the loop
// will also grow. Whatever happens within that loop is also consequential, if we have
// another loop or other operations we need to account for the additional complexity.

let logAtLeast5 = (n) => {
    for (let i = 1; i <= Math.max(5, n ); i++) {
        console.log(i);
    }
}

// In the above example we say this has a complexity of
// O(n) as n grows the number of operations scale linearly
// proportional to the value of n.

let logAtMost5 = (n) => {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// Here we have the opposite. In the prior example, if was 10000 we would have 10000
// operations to run, in this case we will only ever have at most 5, if n is 2 
// then the loop will only run 2 times.
// as n grows, we can say that the complexity is constant, as overall n will not change after
// n becomes greater than 5. 
//
// O(1)