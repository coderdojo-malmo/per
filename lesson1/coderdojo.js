var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var x = 0;

setInterval(function() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 400, 400);

    context.fillStyle = 'red';
    context.fillRect(x, 50, 10, 10);

    x += 1;
}, 16);
