function fibonacciChecker(num) {
    let a = 0, b = 1;
    while (b < num) {
        [a, b] = [b, a + b];
    }
    if (b === num) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

const numero = 20;
console.log(fibonacciChecker(numero));