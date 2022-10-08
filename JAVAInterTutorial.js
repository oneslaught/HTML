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