namespace SpriteKind {
    export const Doctor = SpriteKind.create()
    export const Monster = SpriteKind.create()
}

let isInGachaPhase = false
let gachaCount = 0

let ookusaDoctorSprite: Sprite = null
let monster01Sprite: Sprite = null
let monster02Sprite: Sprite = null
let monster03Sprite: Sprite = null
let monster04Sprite: Sprite = null
let monster05Sprite: Sprite = null
let monster06Sprite: Sprite = null
let monster07Sprite: Sprite = null
let monster08Sprite: Sprite = null
let monster09Sprite: Sprite = null
let monster10Sprite: Sprite = null

let monsterSprites: Sprite[] = []
let monsterNames = [
    "モンスター01",
    "モンスター02",
    "モンスター03",
    "モンスター04",
    "モンスター05",
    "モンスター06",
    "モンスター07",
    "モンスター08",
    "モンスター09",
    "モンスター10"
]

function emptySpriteImage(): Image {
    return img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
    `
}

function createPlaceholderSprites() {
    ookusaDoctorSprite = sprites.create(emptySpriteImage(), SpriteKind.Doctor)
    ookusaDoctorSprite.setPosition(80, 60)

    monster01Sprite = sprites.create(emptySpriteImage(), SpriteKind.Monster)
    monster02Sprite = sprites.create(emptySpriteImage(), SpriteKind.Monster)
    monster03Sprite = sprites.create(emptySpriteImage(), SpriteKind.Monster)
    monster04Sprite = sprites.create(emptySpriteImage(), SpriteKind.Monster)
    monster05Sprite = sprites.create(emptySpriteImage(), SpriteKind.Monster)
    monster06Sprite = sprites.create(emptySpriteImage(), SpriteKind.Monster)
    monster07Sprite = sprites.create(emptySpriteImage(), SpriteKind.Monster)
    monster08Sprite = sprites.create(emptySpriteImage(), SpriteKind.Monster)
    monster09Sprite = sprites.create(emptySpriteImage(), SpriteKind.Monster)
    monster10Sprite = sprites.create(emptySpriteImage(), SpriteKind.Monster)

    monsterSprites = [
        monster01Sprite,
        monster02Sprite,
        monster03Sprite,
        monster04Sprite,
        monster05Sprite,
        monster06Sprite,
        monster07Sprite,
        monster08Sprite,
        monster09Sprite,
        monster10Sprite
    ]

    for (let index = 0; index < monsterSprites.length; index++) {
        monsterSprites[index].setPosition(80, 60)
        monsterSprites[index].setFlag(SpriteFlag.Invisible, true)
    }
}

function showTitleScreen() {
    isInGachaPhase = false
    scene.setBackgroundColor(9)
    game.splash("777 GACHA", "Aボタンでスタート")
}

function showDoctorTutorial() {
    scene.setBackgroundColor(7)
    game.showLongText("わしは おおくさ博士。", DialogLayout.Bottom)
    game.showLongText("このゲームでは ガチャを引いて モンスターを集めるんじゃ。", DialogLayout.Bottom)
    game.showLongText("やることは かんたん。Aボタンで ガチャを引くだけじゃ！", DialogLayout.Bottom)
}

function enterGachaPhase() {
    isInGachaPhase = true
    scene.setBackgroundColor(6)
    game.showLongText("ガチャフェーズ！ Aボタンで ガチャを引こう。", DialogLayout.Center)
}

function pullGacha() {
    let monsterIndex = randint(0, monsterNames.length - 1)
    let monsterName = monsterNames[monsterIndex]

    gachaCount += 1
    game.showLongText("ガチャ " + gachaCount + "回目！", DialogLayout.Center)
    game.showLongText(monsterName + "を 手に入れた！", DialogLayout.Center)
    game.showLongText("もう一度 Aボタンで ガチャを引けるぞ！", DialogLayout.Bottom)
}

function startGame() {
    createPlaceholderSprites()
    showDoctorTutorial()
    enterGachaPhase()
}

showTitleScreen()
startGame()

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isInGachaPhase) {
        pullGacha()
    }
})
