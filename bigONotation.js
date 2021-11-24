// Big O Notation

// What is it?
//
// Big O Notation is a system for generalising code 
// to find the "best" solution in a given circumstance, 
// to a given problem.

// It is essentially a way to formalize fuzzy counting,
// allowing us to talk formally about the runtime
// of an algorithm and it's proportional relation to
// the it's number of inputs. 

// We say that an algorithm is O(f(n)) if the 
// number of simple operations the computer
// has to do is eventually less than 
// a constant times f(n) as n increases.

// f(n) could be linear (f(n) = n)
// f(n) could be quadratic (f(n) = n^2)
// f(n) could be constant (f(n) = 1)
// f(n) could be something else entirely

// take the following example
function addUpTo(n) {
    return n * (n + 1) / 2;
}

// Here there are always 3 operations,
// no matter the value of n the number
// of operations will always remain constant
// We can describe this as O(1) (constant time complexity).


// alternatively
function addUpTo (n) {
    let accumulator = 0;
    for (let i = 0; i <= n; i++) {
        accumulator += i;
    }
    return accumulator;
}

// The number of operations in this case is eventually bounded by
// a multiple of n. This described the number of operations rising
// directly in proportion to the value of n, in this case
// we can describe the complexity as O(n) (linear time complexity).

// If we have nested loops we get a compounded time complexity
// In the below example our algorithm has two sets of operations
// both with a linear time complexity of O(n) which scales with
// the number of inputs. 
//
// You may think this would be considered O(2n), however, you would be wrong.
// If we think about this, the loops are nested, we do not simply have one loop
// and then another, we have a loop inside of a loop. As such, the time complexity
// is compounded and we instead have O(n*n) often written as O(n^2).
function printAllPairs(n) {
    for (let i = 0; i < n; i++) { // O(n)
        for (let j = 0; j < n; j++) { // O(n)
            console.log(i, j);
        }
    }
}