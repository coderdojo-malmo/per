canvas = document.querySelector('canvas')
context = canvas.getContext('2d')

velocity = 1
x = 0
y = 0

keyUp = 0
keyDown = 0
keyLeft = 0
keyRight = 0

document.onkeydown = function(event) {
    if (event.keyCode == 38) {
        keyUp = 1
    }
    if (event.keyCode == 40) {
        keyDown = 1
    }
    if (event.keyCode == 37) {
        keyLeft = 1
    }
    if (event.keyCode == 39) {
        keyRight = 1
    }
}

document.onkeyup = function(event) {
    if (event.keyCode == 38) {
        keyUp = 0
    }
    if (event.keyCode == 40) {
        keyDown = 0
    }
    if (event.keyCode == 37) {
        keyLeft = 0
    }
    if (event.keyCode == 39) {
        keyRight = 0
    }
}

setInterval(function() {
    context.fillStyle = 'black'
    context.fillRect(0, 0, 400, 400)

    context.fillStyle = 'red'
    context.fillRect(x, y, 10, 10)

    if (keyUp) {
        y = y - 1
    }
    if (keyDown) {
        y = y + 1
    }
    if (keyLeft) {
        x = x - 1
    }
    if (keyRight) {
        x = x + 1
    }
}, 16)
