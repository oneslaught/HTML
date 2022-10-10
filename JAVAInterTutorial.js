var handleClick = function (event) {
    // Что-то
};
var button = document.querySelector('#big-button');
button.addEventListener('click', handleClick);


var req = new XMLHttpRequest();
req.onload = function (event) { /* Что-то */ };
req.open('get', 'some-file.txt', true);
req.send();

var jsonString = JSON.stringify({
    make: "Пицца",
    model: "Муха",
    miles: 8800
});

var car = JSON.parse(jsonString);
car.model = "W.W";

console.log(window.innerHeight);

var a = 10;

if (a > 5) {
    var b = 5;
}

var c = a + b;

var doSomething = function () {
    var a = 10;
var doSomethingElse = function () {
    console.log(a);
};
doSomethingElse();
};

doSomething();

$('#btn').click(function () {
    // Что-то
});

// Должно работать, но так как у меня руки из жопы то нет
window.onload = function() {
    function value(x, y) {
        return (x +(Math.random() * (y - x)));
    }
    var object = " ";
    for (var i = 0; i < 100; i++) {
        var a = value(2, 30);
        object += '<div class="object" style="height:  ' + a + 'px; width: ' + a + 'px; background-color: rgba('+value(0, 300)+','+value(0, 300)+','+value(0, 300)+'); animation-duration:'+value(10, 30)+'s; top:'+value(0, 100)+'%; left: '+value(0, 100)+'%;"></div>'
    }
    document.body.innerHTML = object;
};