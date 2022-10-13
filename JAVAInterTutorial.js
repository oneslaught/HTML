const handleClick = function (event) {
    // Что-то
};

const req = new XMLHttpRequest();
req.onload = function (event) { /* Что-то */ };
req.open('get', 'some-file.txt', true);
req.send();

const jsonString = JSON.stringify({
    make: "Пицца",
    model: "Муха",
    miles: 8800
});

const car = JSON.parse(jsonString);
car.model = "W.W";

console.log(window.innerHeight);

const doSomething = function () {
    const a = 10;
const doSomethingElse = function () {
    console.log(a);
};
doSomethingElse();
};

doSomething();

window.onload = function() {
    function value(x, y) {
        return (x +(Math.random() * (y - x)));
    }
    let object = " ";
    for (let i = 0; i < 100; i++) {
        const a = value(2, 30);
        const elem = document.createElement("div"); 
        const duration = value(0, 100);
        elem.className = "object"
        elem.id = i
        Object.assign(elem.style, {
            "height": `${a}px`,
            "width":  `${a}px`,
            "background-color": `rgba(${value(0, 300)},${value(0, 300)},${value(0, 300)})`,
            "animation-duration": `${value(10, 12)}s`,
            "top": `${value(0, 100)}%`,
            "left": `${value(0, 100)}%`
        })
        document.body.appendChild(elem)
        setTimeout(elem, duration)
    }
};