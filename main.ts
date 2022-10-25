let x = 0
let y = 0
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(100)
            led.plot(x, y)
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
