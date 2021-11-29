// Arrays
//
// Arrays are another data structure which 
// provide an intrinsic order to the data.
// This however, come at a cost for some operations.
//
// Big O of Arrays
//
// Access - O(1) - Constant Time
// Searching - O*n) - linear time
//
// If you have an index and the array has that index
// a insertion or select by the key is O(1) (constant time)
// There is often a misconception with new programmers that when 
// accessing an array each item is accessed up until the point
// where the program reaches the item we want, this is not true, 
// keys allow direct access to the element we want, of course this
// misconception likely comes from the fact that when we teach arrays
// we often teach loops at the same time. When we loop over an array
// and access each element via an index (i) we access each item as we
// loop through.

let names = ['Luke', 'Darryl', 'Bob', 'Michael'];

// direct access - O(1)
console.log(names[3]);

// looping on an index (O(n))
for (let i = 0; i < names.length; i++) {
    console.log(i);
}


// Insertion and Removal can vary drastically when
// talking about arrays. It all depends upon where
// in the array we are performing the insertion 
// and/or removal.

// Insertion
//
// As previously stated this is dependent on our order 
// and where we insert. We can push items onto the end of an array, 
// give it a new index, and it will be constant time O(1). There is
// nothing difficult in this circumstance for performing this operation,
// we are simply adding a new item to the end of our array for which we have
// the key. 
//
// The issue occurs when inserting at the beginning of an array,
// This adds complexity which becomes obvious when we think about it.
// As we established when we add an item to the end of an array 
// we perform a simple insert, if we take our name example for instance:

//             0        1        2        3
let names = ['Luke', 'Darryl', 'Bob', 'Michael'];

names.push('Jean');

// Will simply transform our array into:
//
//    0         1       2        3         4
// ['Luke', 'Darryl', 'Bob', 'Michael', 'Jean'];
//
// by giving Jean an index of 4 and adding her name to the end. 
//
// However, when we add an item to the beginning of our array:
//
//             0        1        2        3
let names = ['Luke', 'Darryl', 'Bob', 'Michael'];

names.shift('Jean');

// Uh-oh! We have a problem:
//
//     ?        0       1        2        3
// ['Jean', 'Luke', 'Darryl', 'Bob', 'Michael'];
//
// Our indexes now need to be completely re-ordered 
// in order to enable us to add our item to the array.
// Remember, an array enforces an intrinsic order, 
// this means that if we have Jean at the start of 
// our array Jean must be given an index of one, 
// after which our other elements must also be re-indexed
// with their correct index values.
//
// The array we should end up with is:
//
//     0       1       2        3        4
// ['Jean', 'Luke', 'Darryl', 'Bob', 'Michael'];
//
// This translates to a time complexity of O(n) - Linear time complexity
// As the time taken to perform this action grows in conjunction with the 
// size of the array n.

// push and pop - O(1) 
// shift and unshift - O(n)
// access - O(1)
// searching - O(n) 

// When we search, in a worst case scenario, we must loop over 
// each of our elements and check each one to find the element we 
// want. This scales linearly with the value of n.


