window.onload = function() {
    function value(x, y) {
        return (x +(Math.random() * (y - x)));
    }
    let object = " ";
    setInterval(() => {
        const a = value(2, 30);
        const elem = document.createElement("div"); 
        const duration = value(10, 12);
        elem.className = "object"
        Object.assign(elem.style, {
            "height": `${a}px`,
            "width":  `${a}px`,
            "background-color": `rgba(${value(0, 300)},${value(0, 300)},${value(0, 300)})`,
            "animation-duration": `${duration}s`,
            "top": `${value(0, 100)}%`,
            "left": `${value(0, 100)}%`
        })
        document.body.appendChild(elem)
        setTimeout(() => {
            document.body.removeChild(elem)
        }, duration*1000)
    }, 500);

    $("#btn").click(function () {
        alert("Не тыкай меня, я стесняюсь 😳")
    });

    $('i').css('background', '#4CAF50');

    const div = document.createElement('div');
    div.textContent = "Больше ";
    div.setAttribute('class', 'note');
    document.body.appendChild(div);

    const span = document.createElement('span');
    span.textContent = "буковок";
    div.appendChild(span);

    div.parentNode.removeChild(div);

    const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

    const resize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    window.addEventListener('load', function () {

    resize();

    let pos, vel;
    pos = {
        x: 10,
        y: 10
    };
    vel = {
        x: 1,
        y: 1
    };

    const loop = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pos.x += vel.x;
        pos.y += vel.y;
        if (pos.x < 5 || pos.x > canvas.width - 5) {
        vel.x *= -1;
        }
        if (pos.y < 5 || pos.y > canvas.height - 5) {
        vel.y *= -1;
        }
        ctx.fillRect(pos.x - 5, pos.y - 5, 10, 10);
    };

    setInterval(loop, 1000 / 60);
    });
};

const currentHeight = $('i').height(),
    currentColor = $('i').css('green');
$.isArray([1, 2, 3]);

$.isFunction(function () { });

$.isNumeric(10);
