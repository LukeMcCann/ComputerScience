// Objects
//
// An object is an unordered data structure, consisting
// of key-value pairs. Objects work well when you
// don't need order to your data, but need fast access
// and removal.
//
// Big O of Objects
// 
// insertion / Removal / Access - O(1) - Constant Time
// searching - O(n) - Linear Time

 // Methods 
 //
 // Object.keys - O(n) -
 //             as N grows so does the time
 //             complexity as we must go through
 //             each item and add it to the keys array.
 //
 // Object.entries - O(n) - 
 //                Whilst technically more work
 //                than the keys method, it still
 //                simplifies to O(n)
 //
 // Object.hasOwnProperty("name")) - O(1)
 //                as we have the key for accessing
 //                the item the time complexity
 //                will be constant.