input.onButtonPressed(Button.A, function on_button_pressed_a() {
    PixelArray.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    PixelArray.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    PixelArray.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    PixelArray.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    PixelArray.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    PixelArray.clear()
    PixelArray.show()
})
let PixelArray : neopixel.Strip = null
PixelArray = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function on_forever() {
    basic.pause(100)
    PixelArray.rotate(1)
    PixelArray.show()
})
