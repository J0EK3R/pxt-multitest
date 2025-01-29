input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    MK6.stop(MK6.Module.M1)
    MK6.stop(MK6.Module.M2)
})
input.onButtonPressed(Button.A, function () {
    if (hub == 0) {
        speed1 += 10
        MK6.setChannel(MK6.Module.M1, MK6.Channel.A, speed1)
        MK6.setData(MK6.Module.M1)
    } else if (hub == 1) {
        speed2 += 10
        MK6.setChannel(MK6.Module.M2, MK6.Channel.A, speed2)
        MK6.setData(MK6.Module.M2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (hub == 0) {
        speed1 += -10
        MK6.setChannel(MK6.Module.M1, MK6.Channel.A, speed1)
        MK6.setData(MK6.Module.M1)
    } else if (hub == 1) {
        speed2 += -10
        MK6.setChannel(MK6.Module.M2, MK6.Channel.A, speed2)
        MK6.setData(MK6.Module.M2)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    hub += 1
    if (hub > 1) {
        hub = 0
    }
})
let speed2 = 0
let speed1 = 0
let hub = 0
hub = 0
speed1 = 0
speed2 = 0
MK6.init(MK6.Module.M2)
MK6.init(MK6.Module.M1)
basic.forever(function () {
    if (hub == 0) {
        basic.showNumber(speed1)
    } else if (hub == 1) {
        basic.showNumber(speed2)
    }
})
