    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            // ...
            return confirm('Родители разрешили?');
        }
    }
//Будет ли эта функция работать как-то иначе, если убрать else?
    function checkAge(age) {
        if (age > 18) {
            return true;
        }
        // ...
        return confirm('Родители разрешили?');
    }
    //Нет, функционал останется прежним


//Перепишите функцию, используя оператор '?' или '||'

    function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

//Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
    // Используя оператор ?
    const checkAge = (age) => {return (age > 18) ? true : confirm('Родители разрешили?')}
    // Используя оператор ||
    const checkAge = (age) => {return (age > 18) || confirm('Родители разрешили?')}