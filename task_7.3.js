
let value = NaN;

value &&= 10; // Nan
value ||= 20; // 20
value &&= 30; // 30
value ||= 40;

alert(value);

