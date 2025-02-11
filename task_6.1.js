/*
Используя конструкцию if..else, напишите код,
    который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!»,
    в противном случае – отобразить: «Не знаете? ECMAScript!»
*/

function showAnswer(answer) {
     answer = prompt("Какое «официальное» название JavaScript?", '');

     if (answer === "ECMAScript") {
         return "Верно!"
     } else {
         return "Не знаете? ECMAScript!"
     }
}

alert(showAnswer());