// Original Fibonacci
function fibonacci(n) {
    // O(2^n)
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Dynamic Programming and Fibonacci
function fibonacciMaster() {
    // O(n)
    let cache = {};
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    };
}
