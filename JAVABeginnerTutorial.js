var apples = 5, pears = 10;
var piecesOfFruit = apples + pears;
var piecesForEachPerson = piecesOfFruit / 3;

if (2.1 < 2) {
   
} else {

}

for (var i = 1; i < 3; i++) {
    alert(i);
}

var add = function (a, b) {
    return a + b;
};

var result = add(1, 2);

var helloFrom = function (personName) {
    return "Привет, я " + personName;
}

var people = ['Свинка Пэппа', 'Братик Джордж', 'Мама Свин'];

people.push('Папа Свин');
people.push('Шрек');

people.pop();

for (var i=0; i < people.length; i++) {
    var greeting = helloFrom(people[i]);
    alert(greeting);
}

var press = {
    name: "Don`t press 'OK'",
    num: 123,
    talk: function () { alert("Не нажимай 'OK'"); }
};

press.talk();