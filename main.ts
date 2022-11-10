let x = 0
let y = 0
let dx = 0
basic.forever(function () {
    basic.clearScreen()
    if (x == 4) {
        dx = -1
    } else if (x == 0) {
        dx = 1
    }
    x += dx
    led.plot(x, y)
    basic.pause(100)
})
