enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    hungriness += -1
})
timeanddate.onMinuteChanged(function () {
    happiness += -1
    hungriness += 1
})
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    happiness += 2
})
basic.showIcon(IconNames.Meh)
timeanddate.set24HourTime(1, 0, 0)
let happiness = 5
let hungriness = 1
basic.forever(function () {
    if (hungriness >= 2) {
        basic.showIcon(IconNames.Sad)
    }
    if (hungriness <= 0) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (happiness >= 10) {
        basic.showIcon(IconNames.Happy)
    } else {
        if (happiness >= 5) {
            basic.showIcon(IconNames.Asleep)
            basic.pause(500)
        }
        if (happiness <= 0) {
            basic.showIcon(IconNames.Angry)
            basic.pause(500)
        }
    }
})
