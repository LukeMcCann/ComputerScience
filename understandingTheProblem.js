// Understanding The Problem
//
// When you first come across a problem
// you should begin by understanding 
// the problem. 
//
// You should begin by asking yourself a 
// few questions, to ensure that you
// truly understand the problem
// before beginning to attempt solving it.
//
// 1. Can I restate the problem in my own words?
//
// When you understand something properly you have
// no trouble in stating it in your own words. By doing
// this you can see which parts of the problem you are
// struggling to understand, and seek further information
// if it is required. 
//
// 2. What are the inputs?
//
//  What do we put into the problem?
//
// 3. What are the outputs? 
// 
// 4. Can the outputs be determined from the inputs?
// 
// In other words, do I have enough information to 
// be able to solve the problem. It is worth noting that
// until you start solving this problem you may not be 
// able to answer this question. It is still worth 
// asking in the early stages. 
//
// 5. How should I label the important pieces of data that
//    are a part of the problem?
//
//
//
// Lets look at a simple example:
//
// If we have the problem statement:
//      "Write a function which takes two numbers and returns their sum."
// 
// We work through our steps: 
//
// 1. Can I restate the problem in my own words?
//      "Create a function of which the output is the sum of the input" ✅
//
// 2. What are the inputs?
//      The inputs are x and y where x is the first number and y is the 
//      second number. 
//
//   what should the inputs look like?
//      what type should the inputs be? integer, string, double?
//      what are the upper bounds? do we have an upper limit?
//      should the function take negatives? 
//      what should we do if an input is missed off? or invalid? ❌
//
// 3. What is the output?
//      the output should be the sum of the input, this means we face
//      much of the same questions and in 2. ❌
//
// 4. Can the outputs be determined by the inputs?
//      given that we have the inputs the output is determined by
//      the sum of the input, however, we need more information
//      as we touched on in the previous two points, there is 
//      no guarantee on what input is being provided at this 
//      stage. ❌
//
// 5. How should I label the important pieces of data that are part of the problem?
//
//  It is important to start thinking about this, and think about what matters
//  in the problem statement. We may call our function add() or sum()
//  we may call our input a, b or x, y or num1, num2 and the sum of these
//  is the output we return, we may return these directly or save them to
//  a variable named result. ✅