
//Task 2
// Определение массива с заданными значениями
var cars = ["Saab", "Volvo", "BMW"];

// Получение значения "BMW"
var bmw = cars[2];
console.log("Получение значения:", bmw);

// Изменение первого элемента массива
cars[0] = "Mercedes";

// Удаление последнего элемента массива
cars.pop();

// Добавление элемента "Audi" в массив
cars.push("Audi");

// Использование splice для удаления "Volvo" и "BMW"
var removedCars = cars.splice(1, 2);

console.log("Массив cars:", cars); // ["Mercedes", "Audi"]
console.log("Удаленные машины:", removedCars); // ["Volvo", "BMW"]