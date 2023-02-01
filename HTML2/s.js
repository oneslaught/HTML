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

//     if (x == "" || n == "" || n == null || n == undefined || x == null || x == undefinded) {
//         return alert("Настолько лень что-ли?")
//     }

//     else if (checkNum(n)) {
//         let result = Math.pow(x, n);
//         return alert(`Результат: ${result}`)
//     }
// }
// pow()

// let question = confirm("2 + 2 * 2 = ?") ?
//     () => alert("неверно") :
//     () => alert("неверно");
// question()

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }
//     let x = prompt("x?", "")
//     let n = prompt("n?", "")

//     if (n <= 0) {
//         alert(`Степень ${n} не поддерживается,
//           введите целую степень, большую 0`);
//     } else {
//         alert( pow(x,n) );
//     }

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// function isEmpty(obj) {
//     obj = schedule
//     if (Object.keys(obj).length) {
//         alert(false)
//     } else {
//         alert(true)
//     }
// }

// let schedule = {};
// alert(isEmpty(schedule))

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;
// for (let prop in salaries) {
//   sum += salaries[prop]
// }

// alert(`Общая сума команды ${sum}!`)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//     alert(obj[key])
//     }
// }

// multiplyNumeric(menu);

// let calculator = {
//     read() {
//         this.firstNum =  +prompt("Введите первое число")
//         this.secondNum = +prompt("Введите второе")
//     },
//     sum() {
//         return this.firstNum + this.secondNum
//     },
//     mul() {
//         return this.firstNum * this.secondNum
//     }
// }
// calculator.read();
// alert( `Сумма: ${calculator.sum()}` );
// alert( `Произведение: ${calculator.mul()}` );

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this
//     },
//     down() {
//       this.step--;
//       return this
//     },
//     showStep() {
//       alert( this.step );
//       return this
//     }
//   };
  
//   ladder.up().up().down().showStep().down().showStep();
    
// function Calculator() {
//     this.read = function() {
//         this.firstNum =  +prompt("Введите первое число")
//         this.secondNum = +prompt("Введите второе")
//     }
//     this.sum = function() {
//         return this.firstNum + this.secondNum
//     }
//     this.mul = function() {
//         return this.firstNum * this.secondNum
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( `Сумма: ${calculator.sum()}` );
// alert( `Произведение: ${calculator.mul()}` );

// function Accumulator(startingValue) {
//     this.read = function() {
//         a = +prompt("Сколько нужно добавить?")
//         b = a
//     }
//     this.value = function() {
//         let sum = startingValue + a + b
//         return sum
//     }
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(`Сумма: ${accumulator.value()}`);

// let a = +prompt("Введите первое число")
// let b = +prompt("Введите второе число")

// let sum = a + b
// alert(sum)

// alert(Math.round(6.35 * 10))

// function checkNumber() {
//     outer:for(let num = prompt('Число для проверки');
//     true;
//     num = prompt("Введите число")) {
//         if (num == null || num == "") {
//         alert("Число: null"); break;
//         } else if (!(Object.is(parseFloat(num),NaN)) && !isFinite(num)) {
//         alert('Некорректное число')
//         } else if (!isFinite(num)) {
//         alert("Подумайте над своим поведением и введите число"); continue outer;
//         } else if (isFinite(num)) {
//         alert(`Вы ввели число ${num}!`); break;
//         }
//     }
// }

// checkNumber();

// function random(min, max) {
//     return Math.random() * (max - min) + min
// }

// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );

// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max + 1 - min) + min)
// }

// alert( randomInteger(1, 5) );
// alert( randomInteger(1, 5) );
// alert( randomInteger(1, 5) );

// function ucFirst(str) {
//     if (!str) {
//         return str;
//     } else {
//         return str = str[0].toUpperCase() + str.slice(1);
//     }
// }
// alert(ucFirst("адам баранов"))

// function checkSpam(str) {
//     let target = str.toLowerCase()
//     return target.includes('viagra') || target.includes('xxx')
//   }
  
//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") );

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) 

// function extractCurrencyValue(str) {
//     str[0] = ''
//     return +str.slice(1)
// }

// alert( extractCurrencyValue("$120") )

// let styles = ["Джаз", "Блюз"]
// styles.push("Рок-н-ролл")
// styles[Math.floor((styles.length - 1) / 2)] = "Классика"
// alert(styles.shift())
// styles.unshift("Рэп", "Регги")

// function sumInput() {
//     let arr = []
    
//     while (true) {
//         let quest = prompt("Введите число 10 раз", 0)

//         if (quest === null || quest === "" || !isFinite(quest)) break

//         arr.push(+quest);
//     }

//     let sum = 0
//     for (let i of arr) {
//         sum += i
//     }
//     return sum;
// }
// alert(sumInput())

// function getMaxSubSum(arr) {
//     let maxSum = 0
//     let incompSum = 0

//     for (let i of arr) {
//         incompSum += i
//         maxSum = Math.max(maxSum, incompSum)
//         if (incompSum < 0) {
//             incompSum = 0
//         }
//     }
//     return maxSum
// }
// alert( getMaxSubSum([-1, 2, 3, -9]) );
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
// alert( getMaxSubSum([-2, -1, 1, 2]) );
// alert( getMaxSubSum([100, -9, 2, -3, 5]) );
// alert( getMaxSubSum([1, 2, 3]) );
// alert( getMaxSubSum([-1, -2, -3]) );

// function camelize(str) {
//     if (str === "") {return str}
//     let arr = str.split("-")
//     let res = arr.map( (element, index) => element === arr[0] ? 
// 	element : element[0].toUpperCase() + element.slice(1) )
// 	return result.join('')
    
// }
// alert(camelize("background-color"))

// function filterRange(arr, a, b) {
//     return arr.filter(item => a <= item && b >= item)
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered );

// alert( arr )

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++)     {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// let arr = [5, 3, 8, 1];
// alert( arr )

// let arr = [5, 2, 1, -10, 8]
// let sortArr = arr.sort()

// alert(sortArr.reverse())

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//     return arr.slice().sort()
// }

// let sorted = copySorted(arr)

// alert(sorted)
// alert(arr)

// function Calculator() {

//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//     };
  
//     this.calculate = function(str) {
  
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]
  
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
  
//       return this.methods[op](a, b);
//     }
  
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }

// скопипастил, тяжело-тяжело
// let calc = new Calculator;

// alert( calc.calculate("3 + 7") );

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result );

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];
/* let names = users.find(item => alert(item.name))
alert(names.slice()) на 3 вызова*/

// let names = users.map(item => item.name)
// alert(names)

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }))

// alert( usersMapped[0].id );
// alert( usersMapped[0].fullName );

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// alert(arr[0].name); 
// alert(arr[1].name);
// alert(arr[2].name); 

// let arr = [1, 2, 3];

// function shuffle(array) {
// array.sort(() => Math.random() - 0.5);
// }

// shuffle(arr)
// alert(arr)

// function getAverageAge(users) {
//     return users.reduce((prop, user) => prop + user.age, 0) / users.length
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // 28

// function unique(arr) {
//     let result = []
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str)
//       }
//     }
//     return result
// }

// let strings = ["кришна", "кришна", "харе", "харе",
// "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) );
  
// function groupById(arr) {
//     return arr.reduce((obj, val) => {
//       obj[val.id] = val
//       return obj
//     }, {})
// }

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
  
// let usersById = groupById(users);
// console.log(usersById)

// function unique(arr) {
//     let res = Array.from(new Set(arr))
//     return res
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) );

// function aclean(arr) {
//     let map = new Map()
  
//     for (let word of arr) {
//       let sorted = word.toLowerCase().split("").sort().join("")
//       map.set(sorted, word)
//     }
//     return Array.from(map.values())
//   }
  
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
//   alert( aclean(arr) );

// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];

// let checkMessages = new WeakSet()

// checkMessages.add(messages[0])
// checkMessages.add(messages[1])
// checkMessages.add(messages[2])

// messages.pop()
// alert(messages.length)

// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
  
// function sumSalaries(salaries) {
//     let sum = 0
//     for (let salary of Object.values(salaries)) {
//         sum += salary
//     }
//     return sum
// }

// console.log( `Amount of salaries: ${sumSalaries(salaries)}` );

// let user = {
//     name: 'John',
//     age: 30
// };

// function count(obj) {
//     return Object.keys(obj).length
// }

// alert( count(user))

// let user = {
//     name: "John",
//     years: 30
// };

// let {name, years: age, isAdmin = false} = user

// alert( name );
// alert( age );
// alert( isAdmin );

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries) {
//     let max = 0
//     let maxName = null
  
//     for (let [name, salary] of Object.entries(salaries)) {
//       if (max < salary) {
//         max = salary
//         maxName = name
//       }
//     }
//     return maxName
// }

// let date = new Date(2012, 1, 20, 3, 12)
// alert(date)

// let date = new Date(2012, 0, 3);

// function getWeekDay () {
//     let options = { weekday: 'short'};   

//     alert(new Intl.DateTimeFormat('ru-RU', options).format(date))
// }
// getWeekDay()

// let date = new Date(2012, 0, 3);
// alert(getLocalDay(date));

// function getLocalDay(date) {
//     let days = [7,1,2,3,4,5,6]
//     return(days[date.getDay()])
// }

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date)

//     dateCopy.setDate(dateCopy.getDate() - days)
//     return dateCopy.getDate()
// }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) );
// alert( getDateAgo(date, 2) );
// alert( getDateAgo(date, 365) );

// let lastday = function(y,m) {
//     return  new Date(y, m +1, 0).getDate()
// }

// console.log(lastday(2012, 1))

// function getSecondsToday() {
//     let date = new Date()
//     let seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
//     return seconds
// }

// console.log(`С начала текущего дня прошло ${getSecondsToday()} секунд!`)

// function getSecondsToTomorrow() {
//     let date = new Date()
//     let allSeconds = 24 * 3600
//     let seconds = allSeconds - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds())
//     return seconds
// }

// console.log(`До завтрашней даты осталось ${getSecondsToTomorrow()} секунд!`)

// function formatDate(date) {
//     let sec = new Date() - date;
//     let below10 = (n) => ((n < 10) ? '0' + n : n)
//     let year = below10(date.getFullYear())
//     let month = below10(date.getMonth()+1)
//     let day = below10(date.getDate())
//     let hour = below10(date.getHours())
//     let min = below10(date.getMinutes())

//     if (sec <= 1000) {
//         return "прямо сейчас"
//     } else if (sec < 1000 * 60) {
//         return `${sec / 1000} сек. назад`
//     } else if (sec < 1000 * 60 * 60) {
//         return `${sec / (1000 * 60)} мин. назад`
//     } else {
//         return `${day}.${month}.${year}, ${hour}:${min}`
//     }
// }

// console.log( formatDate(new Date(new Date - 1)) ); 
// console.log( formatDate(new Date(new Date - 30 * 1000)) ); 
// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
// console.log( formatDate(new Date(new Date - 86400 * 1000)) );

// let user = {
//     name: "Василий Иванович",
//     age: 35
// };

// let userCopy = JSON.parse(JSON.stringify(user))
// console.log(userCopy)

// let room = {
//     number: 23
// };
  
// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;
  
// alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key == 'occupiedBy' || key == 'self') ? undefined : value;
// }))