"""

Car 1

"""
"""

Car 2

"""
"""

Sender Reaktion nach Empfang des Signals

"""

def on_received_number(receivedNumber):
    if id2 == receivedNumber:
        radio.send_string("CAR 1")
        basic.pause(1000)
        radio.send_number(temp)
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    CAR_2 = 0
    CAR_1 = ""
    if CAR_1 == receivedString:
        basic.show_string("CAR 1")
        basic.pause(1000)
        basic.show_string("Temp")
        basic.show_number(temp)
        basic.show_string("C")
    if CAR_2 == 0:
        basic.show_string("CAR 1")
        basic.pause(1000)
        basic.show_string("Temp")
        basic.show_number(temp)
        basic.show_string("C")
radio.on_received_string(on_received_string)

id2 = 0
temp = 0
temp = input.temperature()
id2 = 0

def on_forever():
    global id2
    if input.is_gesture(Gesture.LOGO_DOWN):
        id2 = 5
        radio.send_number(id2)
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)

def on_forever3():
    if id2 == 6:
        radio.send_string("CAR 2")
        basic.pause(1000)
        radio.send_number(temp)
    basic.clear_screen()
basic.forever(on_forever3)
