OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("")
    OLED.writeNumNewLine(Environment.ReadDust(DigitalPin.P13, AnalogPin.P1))
    basic.pause(60000)
})
