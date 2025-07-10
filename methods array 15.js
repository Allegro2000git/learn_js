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
alert( arr ); // 8, 5, 2, 1, -10 */
//arr.sort((a,b) => b - a)


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

/* 6
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = /* ... ваш код */

let names = users.map(item => item.name)

/* 7
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
*/
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya, petya, masha ];


let usersMapped = users.map( el => ({
    id: el.id,
    fullName: `${el.name} ${el.surname}`
   })
)

/* 8
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя*/

const sortByAge = (users) => {
    users.sort((a,b) => a.age - b.age)
}