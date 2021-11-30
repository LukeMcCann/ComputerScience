// Problem Statement 1
//
// "Write a function which takes a string 
//  and returns counts of each character in
//  the string."
//
// Understanding The Problem
//
// 1. Can I restate the problem in my own words?
//      "Create a function which takes an input of
//       a single string and returns a count of each
//       character within that string."
//
// 2. What are the inputs? what should they look like?
//      The input is a single string
//      what should we do if the string is empty?
//      what should we do if no string is provided? an integer is provided? etc...
//      
// 3. What is the output?
//      The output is a count of characters
//      do we count duplicate characters?
//      do duplicate characters count as a single character or multiple?
//      do we mean to count each character or the character instances in the string?
//      should we return only the elements that are there? or all the letters zeroed?
//
// 4. Can the outputs be determined by the inputs?
//     The output will be the count of the characters within the string.
//     more information is required, as touched on in the previous two points.
//
// 5. How should I label the important pieces of data that are part of the problem?
//      We could have a function named charCount() which takes an input variable
//      named str of type string. The return value should be the count which
//      can either be returned directly or saved in a variable named result.
//
//
// Concrete Examples
//
// charCount("aaaa"); 
// expectedOutput = {a: 4}
//
// "ny phone number is 19763" - how should we handle numbers? 
// "Hello hi" - spaces and casing? should they be ignored?
//
// charCount() or charCount("") - what should we return? null? empty string?
//
//
// Breaking the Problem Down
//
// steps to complete:
//        1. create an object to store results
//        2. loop over the string
//        3. set each letter to our object key
//        4. increment the count on the object


function charCount(str) {
    // do something
    // return an object with keys that are alphaneumeric characters 
}

function charCount(str) {
    // make result object
    // loop over string
    // return object
}

let charCount = (str) => {
    const result = {};
    for (let i = 0; i < str.length; i++) {
        if (result[str[i]] > 0) {
            result[str[i]]++;
        } else {
            result[str[i]] = 1;
        }
    }
    return result;
}

console.log(charCount('aaa'));