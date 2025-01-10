input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    mk6hub.stop(mk6hub.Hub.A)
    mk6hub.stop(mk6hub.Hub.B)
})
input.onButtonPressed(Button.A, function () {
    if (hub == 0) {
        speed1 += 10
        mk6hub.setChannel(mk6hub.Hub.A, mk6hub.Channel.A, speed1)
        mk6hub.senddata(mk6hub.Hub.A)
    } else if (hub == 1) {
        speed2 += 10
        mk6hub.setChannel(mk6hub.Hub.B, mk6hub.Channel.A, speed2)
        mk6hub.senddata(mk6hub.Hub.B)
    }
})
input.onButtonPressed(Button.B, function () {
    if (hub == 0) {
        speed1 += -10
        mk6hub.setChannel(mk6hub.Hub.A, mk6hub.Channel.A, speed1)
        mk6hub.senddata(mk6hub.Hub.A)
    } else if (hub == 1) {
        speed2 += -10
        mk6hub.setChannel(mk6hub.Hub.B, mk6hub.Channel.A, speed2)
        mk6hub.senddata(mk6hub.Hub.B)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    hub += 1
    if (hub >= 2) {
        hub = 0
    }
})
let speed2 = 0
let speed1 = 0
let hub = 0
hub = 0
speed1 = 0
speed2 = 0
mk6hub.init(mk6hub.Hub.A)
mk6hub.init(mk6hub.Hub.B)
basic.forever(function () {
    mk6hub.loop()
    basic.pause(100)
})
basic.forever(function () {
    if (hub == 0) {
        basic.showNumber(speed1)
    } else if (hub == 1) {
        basic.showNumber(speed2)
    }
})
