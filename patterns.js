//Паттерн - это архитектурное, готовое решение для типовых проблем\задач
// делятся на 3 группы: порождающие, структурные, поведенческие

//Наблюдатель (поведенческий)
//store.subscribe(function(){})
//button.addEventListener('click', function() {})
//setTimeout(function() {}, 1000)

const button = {

    subscribers: {
        click: [],
        focus: []
    },

    click() {
        console.log('1')
        button.subscribers.click.forEach((c) => c())
    },

    addEventListener(eventName, callback) {
        button.subscribers[eventName].push(callback)
        return () => { //  создадим этот "анонимный" коллбек для отписки от события --> строка 44
            button.removeEventListener(eventName, callback)
        }
    },

    removeEventListener(eventName, callback) {
        button.subscribers[eventName] = button.subscribers[eventName].filter((c) => c !== callback)
    }

}

const unsub = button.addEventListener('click', function () {
    console.log('Si')
})

button.click()
unsub()
button.click()