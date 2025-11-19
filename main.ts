input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.compassHeading()))
})
basic.showString("Hello im John")
basic.forever(function () {
	
})
