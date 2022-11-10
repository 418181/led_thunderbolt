let x = 0
let dx = 0
basic.forever(function () {
    basic.clearScreen()
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    x += dx
    led.plot(x, 0)
    led.plot(x, 1)
    led.plot(x, 2)
    led.plot(x, 3)
    led.plot(x, 4)
    basic.pause(100)
})
