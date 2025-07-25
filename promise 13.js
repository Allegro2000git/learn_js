// 1 Что выведет код ниже?

    let promise = new Promise(function(resolve, reject) {
        resolve(1);

        setTimeout(() => resolve(2), 1000);
    });

promise.then(alert);

// 1

/*
2 Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд,
так чтобы мы могли добавить к нему .then:*/

function delay(ms) {
  return new Promise (res => setTimeout(res, ms))
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

/*
3 Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
  */

const loadJson = async (url) => {
    const res = await fetch(url)

            if (res.status === 200) {
                let json = await res.json();
                return json
            }
            throw new Error(res.status);
}

loadJson('no-such-user.json').catch(alert)


/*
4 Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.

В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Полное имя: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();*/

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let res = await fetch(url)

            if (res.status === 200) {
                let json =  res.json();
                return json
            }
                throw new HttpError(res);
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let user;
    while(true) {
        let name = prompt("Введите логин?", "iliakan");

        try {
            user = await loadJson(`https://api.github.com/users/${name}`)
            break
        } catch (err) {
            if (err instanceof HttpError && err.response.status === 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }
            alert(`Полное имя: ${user.name}.`);
            return user;
}

demoGithubUser();

/*
5 Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}*/

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    return wait().then(res => console.log(res))
}


setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);

let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса');
    resolve();
});

p.then(function(){
    console.log('Обработка промиса');
});

console.log('Конец скрипта');

// Создание Конец Обработка Таймаут

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 1 7 3 5 2 6 4
