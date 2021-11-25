// Time Complexity O(1) - Constant Time Complexity
let square = (n) => {
    return n * n;
}

// Time Complexity O(n) - Linear time complexity
let longSquare = (n) => {
    let square = n;
    for (let i = 1; i < n; i++) {
        square += n;
    }
    return square;
}


const calculateTimeComplexity = (callback, n) => {
    let t1 = performance.now();
    callback(n);
    let t2 = performance.now()
    console.log(`Time Elapsed: ${(t2 - t1) / 100}.`);
}

let n = 10000000;
let func1 = square;
let func2 = longSquare;
console.log('Func1: ');
calculateTimeComplexity(func1, n);
console.log('Func2: ');
calculateTimeComplexity(func2, n);
