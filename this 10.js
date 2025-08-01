
// 1 Каким будет результат при обращении к свойству объекта ref? Почему?

    function makeUser() {
        return {
            name: "John",
            ref: this
        };
    }

    let user = makeUser();

alert( user.ref.name ); // error

// 2 Создайте объект calculator (калькулятор) с тремя методами:

//read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
//sum() (суммировать) возвращает сумму сохранённых значений.
//mul() (умножить) перемножает сохранённые значения и возвращает результат.


let calculator = {
    read() {
        this.a = +prompt('Введите первое значение', 0)
        this.b = +prompt('Введите второе значение', 0)
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// 3 У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
      return this
  },
  showStep: function() {
    alert( this.step );
      return this
  }
};

ladder.up().up().down().showStep().down().showStep();