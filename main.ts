let started = false

function showTitleScreen() {
    scene.setBackgroundColor(1)
    game.splash("777", "Aボタンでスタート")
}

function startGame() {
    if (started) {
        return
    }

    started = true
    scene.setBackgroundColor(9)
    game.showLongText("ゲームスタート！", DialogLayout.Center)
}

showTitleScreen()
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    startGame()
})
