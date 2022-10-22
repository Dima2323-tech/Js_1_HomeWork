// -------------------------------MATH OPERATION---------------------------------------------
let firstValue = parseInt(prompt("Введите первое Значение"))
let secondValue = parseInt(prompt("Введите Второе Значение"))

console.log("Первая Операция ->" , firstValue + secondValue);
console.log("Вторая Операция ->" , firstValue - secondValue);
console.log("Третья Операция ->" , firstValue * secondValue);
console.log("Четвертая Операция ->" , firstValue / secondValue);
// -------------------------------User NAME/SURNAME---------------------------------------------
let firstName = prompt("Введите Имя " , "Имя")
let secondName = prompt("Ввеедите Фамилию " , "Фамилия")

let UserName = " User Name -> " + firstName + " |||||";
let UserSecondname = " User last name -> " + secondName
document.writeln(UserName ,UserSecondname);
// -------------------------------True/False OPERATION---------------------------------------------



// let comprassion = prompt("Введите страну")
let compression = prompt("Введите страну");
console.log("Стан" , compression == "ru" == false || compression == "uk" == true );