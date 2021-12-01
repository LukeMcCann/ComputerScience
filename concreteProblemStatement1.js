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

// We have the basis of our solution, but we still need to account
// for lowercase characters.

let charCount = (str) => {
    const result = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

console.log(charCount("Hello!"));

// At this point we still need to account for none-alphanumeric characters.
// To tell if a number or character is alphanumeric we could have an array of
// valid characters, this would be an annoying solution with a huge array
// but it is possible. We could use a regular expression, or the ASCII/char codes. 


// Look back and Refactor
//
// Once we have something workable we need to look back and refactor our code. 
// often this is overlooked, you can get by with something that just works,
// however, we want to ensure our solution is optimal, not necessarily in terms
// of performance, but maintainability, and readability. We want to aim for code
// cleanliness.

// When we look back at our code to refactor, we should look back critically
// and analyse the parts we like, that we don't like, and try to find
// why we don't, and how we can do it better. We can do this by going
// over a few questions in our own mind, or getting feedback from others
// in a code review process.

// Refactoring Questions:
//
// 1. Can you check the results?
//
// 2. Could you derive the results differently?
//
// 3. Is it understandable at a glance?
//
// 4. Is it reusable? could you take your solution and use it to solve
//    another unrelated problem?
//
// 5. Can you improve the performance of your solution?
//
// 6. Can you think of other ways to refactor?
//
// 7. How have other people solved this problem?

let charCount = (str) => {
    const result = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (/a-z0-9/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

console.log(charCount("Hello!"));

let charCount = (str) => {
    const result = {};
    for (const char of str) {
        char = char.toLowerCase();
        if (/a-z0-9/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

// Regular expressions performance can vary depending on the situation.
// Checking characters can be faster as we can write a function
// with particular boolean expression comparisons rather than comparing expressions.


// Final Refactor 

let charCount = (str) => {
    const result = {};
    const str = str.toLowerCase();
    for (const char of str) {
        if (isAlphaNumeric(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&  // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
        return true;
}

