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

    // Кнопка
    const btn = document.createElement('input');
    btn.id = 'btn';
    btn.type = 'button';
    btn.value = 'Button';
    btn.onclick = function(){
        btn.style.backgroundColor = `hsl(${Math.random()*255},100%,75%)`
}
    document.body.appendChild(btn);
    
    $('i').css('background', '#4CAF50');
};

const currentHeight = $('i').height(),
    currentColor = $('i').css('green');
$.isArray([1, 2, 3]);

$.isFunction(function () { });

$.isNumeric(10);

localStorage.setItem('Пароль от почки', JSON.stringify({
    username: 'Почка',
    api_key: '123456789'
}));

const user = JSON.parse(localStorage.getItem('Пароль от почки'));

const lowerCaseString = 'водичка делает буль-буль';
