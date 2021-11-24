// Timing code 

// func1
let addUpTo = (n) => {
    let accumulator = 0;
    for (let i = 0; i <= n; i++) {
        accumulator += i;
    }
    return accumulator;
}

// vs func2
let addUpTo = (n) => {
    return n * (n + 1) / 2;
}

console.log(addUpTo(6));

// Evaluating Speed
let t1 = performance.now();
addUpTo(10000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// Comparing the two we see that the second solution 
// is faster than the first. Manually timing functions
// can be useful, but it is not the most reliable
// way to estimate performance. 

// The problem with time is that different machines
// will record different times based on
// multiple factors. For fast algorithms speed
// measurements are often not sufficiently precise.

