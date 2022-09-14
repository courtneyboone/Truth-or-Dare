input.onButtonPressed(Button.A, function () {
    Random = randint(0, 1)
    if (Random == 0) {
        basic.showString("Truth")
    }
    if (Random == 1) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    New = randint(0, 3)
    if (New == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (New == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (New == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
let New = 0
let Random = 0
basic.showString("Truth or Dare")
basic.showString("A to play")
basic.showString("B for next player")
