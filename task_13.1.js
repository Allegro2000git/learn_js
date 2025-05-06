
//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте два варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

const sumTo1 = (n) => {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    return res;
}

const sumTo = (n) => {
    if (n === 1) {
        return 1
    }
    return n + sumTo(n - 1);
}

//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// alert( factorial(5) ); // 120

const factorial = (value) => {
    if (value <= 1) {
        return 1;
    }
    return value * factorial(value - 1);
}


//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Пример работы:
// alert(fib(3)); // 2
// alert(fib(7)); // 13

const fib = (n) => {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}