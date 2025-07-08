/*
1
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

const camelize = (str) => {
    return str.split('-').map((el, index) => index === 0 ? el : el[0].toUpperCase() + el.slice(1)).join('')
}

/* 2
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.

Например:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
*/

const filterRange = (arr, a, b) => {
  return arr.filter(el => (el >= a && el  <= b))
}

/* 3
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]*/

const filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        if (value < a || value > b) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr
}

/* 4
;
// ... ваш код для сортировки по убыванию
alert( arr ); // 8, 5, 2, 1, -10*/
arr.sort((a,b) => b - a)


/* 5
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/
let arr = ["HTML", "JavaScript", "CSS"];
const copySorted = (arr) => arr.slice().sort()

console.log(copySorted(arr))
console.log(arr)