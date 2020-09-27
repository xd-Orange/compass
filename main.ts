let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (degrees < 135) {
        basic.showString("E")
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (degrees < 225) {
        basic.showString("S")
        music.playTone(880, music.beat(BeatFraction.Whole))
    } else if (degrees < 315) {
        basic.showString("W")
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else {
        basic.showString("N")
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
