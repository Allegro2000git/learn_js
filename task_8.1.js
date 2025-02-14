alert(undefined ?? NaN ?? null ?? "" ?? " ");

// Nan

let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city);

//"Берлин"