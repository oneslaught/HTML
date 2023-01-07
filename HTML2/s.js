// alert( 'Купи почку' );

// let name = "Джон";
// let admin;

// admin = name;
// alert(admin)

// const OurPlanetName = "Earth"
// let currentUserName = "Babijon"

// let userName = prompt("Как вас зовут?")
// if (userName === null || userName === "") {
//     alert("У вас нет имени? а как насчёт мамы?")
// } 
// else {
//     alert(`Вас зовут ${userName}!`)
// }

// let jsName = prompt("Какое «официальное» название JavaScript?", "")
// if (jsName == "ECMAScript") {
//     alert("Верно!")
// }
// else if (jsName.toLowerCase() === "ecmascript") {
//     alert("Верно!")
// }
// else {
//     alert("Не знаете? ECMAScript!")
// }

// let number = (prompt("Введите число", ""))
// if (number > 0) {
//     alert(1)
// }
// else if (number < 0) {
//     alert(-1)
// }
// else if (number == 0) {
//     alert(0)
// }
// else {
//     alert("Циферки это 1,2,3...")
// }

// let a = 2
// let b = 12
// let result = (a + b < 4) ? 'Мало': 'Много';
// alert(result)

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';

// let age = prompt("Сколько вам лет?", "")
// if (age >= 14 && age <= 90 ) {
//     alert("Нормально, нормально")
// }
// else {
//     alert("Чумба, ты какой-то сусси бака!")
// }

// let admin = prompt("Кто там?", "")
// if (admin === "Админ") {
//     let password = prompt("Введите пароль", "")
//         if (password == "Я главный") {
//             alert("Здравствуйте!")
//         }
//         else if (password == "" || password == null) {
//             alert("Отменено")
//         }
//         else {
//             alert("Неверный пароль")
//         }
// }
// else if (admin == "" || admin == null) {
//     alert("Отменено")
// }
// else {
//     alert("Я вас не знаю")
// }

// for (let i = 2; i < 21; i++) {
//     if (i % 2 == 0) {
//         alert(i)
//     }
// }

// let a = 0;
// while (a < 3) {
//     alert(`number ${a}!`);
//     a++
// }


// while (true) {
//     let num = +prompt("Введите число больше 100", "")
//     if (num > 100) {
//       alert("Альберт Эйнштейн?"); break
//     }
//     else if (!null) {
//         alert("Куда ты жмал"); break
//     }
//     else if (num <= 100) {
//         continue
//     }
// }

// let n = 21;
// again:
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue again; 
//   }
//   alert( i ); 
// }

// let browserName = prompt("Enter browser name")
// if (browserName == "Edge") {
//     alert( "You've got the Edge!" )
// }
// else if (browserName == "Chrome" || browserName == "Firefox" || browserName == "Safari" || browserName == "Opera") {
//     alert( 'Okay we support these browsers too' )
// }
// else if (!browserName) {
//     alert("Why are you gay?")
// }
// else {
//     alert( 'We hope that this page looks ok!' )
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch(number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
//     default:
//         alert('Вы делаете что-то не то в своей жизни')
// }

// Вариант с ||
// function checkAge(age) {
//     return age = age > 18 || confirm("Родители разрешили?")
// }
// checkAge(1)

// Вариант с ?
// function checkAge(age) {
//     return age = age > 18 ? true : confirm("Родители разрешили?")
// }
// checkAge(1)

// function min(a,b) {
//     if (a > b) {
//         return b
//     }
//     else if (b > a) {
//         return a
//     }
// }
// min(10,5)

// function checkNum(n) {
//     if (n % 1 == 0 && n > 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// function pow(x,n) {
//     x = prompt("Введите число")
//     n = prompt("введите степень")

//     if (x == "" || n == "" || n == null || n == undefined) {
//         return alert("Настолько лень что-ли?")
//     }

//     else if (checkNum(n)) {
//         let result = Math.pow(x, n);
//         return alert(`Результат: ${result}`)
//     }
// }
// pow()



