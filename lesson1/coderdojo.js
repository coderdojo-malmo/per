canvas = document.querySelector('canvas');
context = canvas.getContext('2d');

x = 0;

setInterval(function() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 400, 400);

    context.fillStyle = 'red';
    context.fillRect(x, 50, 10, 10);

    x += 1;
}, 16);
