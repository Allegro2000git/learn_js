/*
Используя конструкцию if..else, напишите код, который получает число через prompt,
а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
 */

function showNumber(num) {
    num = Number(prompt("Enter a number", ""));

    if (num > 0) {
        return alert(1)
    } else if (num < 0) {
        return alert(-1)
    } else {
        return alert(0)
    }

}

showNumber();