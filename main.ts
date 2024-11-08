basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
