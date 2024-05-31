basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(1000)
})
