/* 1
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Например:

sum(1)(2) = 3
sum(5)(-1) = 4
*/

function sum (a) {
    return (b) => {
        return a + b
    }
}

/* 2
Что выведет данный код?

let x = 1;

function func() {
  console.log(x); // RefferenceError

  let x = 2;
}

func()
*/

/* 3
 У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
Например:

*/

let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => {
    return (el) => el >= a && el <= b
}

const inArray = (array) => {
    return (x) => array.includes(x)
}


console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2*/
