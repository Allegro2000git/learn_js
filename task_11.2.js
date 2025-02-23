//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
//Пример вызовов:

function min(a, b) {
 return a < b ? a : b
}

//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

function pow(x,n) {
     x = Number(prompt("Write value of x"),'')
     n = Number(prompt("Write value of n (n > 0)"),'')

    let result = n > 0 ? alert(x ** n) : alert("Write value of n > 0")

    return result;

}

