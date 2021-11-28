// Logarithms
//
// At this point we have only seen base complexity for
// both time and space metrics. These rules are fine
// for simplistic cases we have determined up to this point,
// however, we may also want to describe more complex
// relationships within an algorithm.
//
// Logarithms are a less common Big O expression, 
// to define a logarithm we say:
//
// "A logarithm is the inverse of exponentiation"
//
// This can appear quite complex to the none-mathematically
// inclined. As such we will simplify this statement further.
// 
// Exponentiation is the operation of raising one power to another.
// essentially, we calculate the exponent using the ^ operator
// x^2 would have the exponent of the solution to pow(x, 2);
// where we raise x to the second power. 
//
// The inverse of this would be the number of which another
// fixed number n would need to be raised to produce
// the number x.
//
// If we have: 
//       5^3 = 5 * 5 * 5 = 125
//
// We say that the logarithm base 5 of x to base m is denoted as 
// log(sub)5(125) = 3
//
// As you may have already found, the real question
// we are asking here is:
//  "To what power must be raise x to achieve n"
//
// or in terms more in context to this question:
//
// "To what power must we raise 5 to achieve 125"
//
// lets take another example:
//
//  log(sub)2(8) = 3
//  2^3 = 8
//
// In this case, we are saying 2 ^ 3 = 2 * 2 * 2 = 8
// therefore log(sub)2(8) = 3
//
// Where 3 is the power of which we must raise 2 to in order
// to achieve the answer 8.
