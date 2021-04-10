radio.onReceivedNumber(function (receivedNumber) {
    if (id == receivedNumber) {
        radio.sendString(CAR_1)
        basic.pause(1000)
        radio.sendNumber(temp)
    }
    if (id2 == receivedNumber) {
        radio.sendString(CAR_2)
        basic.pause(1000)
        radio.sendNumber(temp)
    }
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (CAR_1 == receivedString) {
        basic.showString("CAR 1")
        basic.pause(1000)
        basic.showString("Temp")
        basic.showNumber(temp)
        basic.showString("C")
        basic.pause(1000)
    }
    if (CAR_2 == receivedString) {
        basic.showString("CAR 2")
        basic.pause(1000)
        basic.showString("Temp")
        basic.showNumber(temp)
        basic.showString("C")
    }
})
let CAR_2 = ""
let id2 = 0
let CAR_1 = ""
let id = 0
let temp = 0
temp = input.temperature()
id = 0
basic.forever(function () {
    if (input.isGesture(Gesture.ScreenUp)) {
        id = 5
    }
    if (id == 5) {
        radio.sendNumber(id)
    }
    if (input.isGesture(Gesture.ScreenDown)) {
        id = 6
    }
    if (id == 6) {
        radio.sendNumber(id2)
    }
})
basic.forever(function () {
	
})
