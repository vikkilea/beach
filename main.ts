namespace SpriteKind {
    export const MapTile = SpriteKind.create()
    export const Guest = SpriteKind.create()
    export const Car = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    spawnNewGuest()
})
function helpers2 () {
    TRUE = 1
    FALSE = 0
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spawnNewCar()
})
function setupStatics () {
    TILEMAP = tilemap`level1`
}
function setupTilemap () {
    tiles.setCurrentTilemap(TILEMAP)
}
function setupPlayer () {
    s_player = sprites.create(assets.image`player`, SpriteKind.Player)
}
behaviors.onEnter(SpriteKind.Guest, "new", function (sprite) {
    direction = randint(-1, 1)
    vx = randint(2, 6) * direction
    vy = randint(2, 6) * direction
    sprite.setVelocity(vx, vy)
    behaviors.setState(sprite, "moving")
})
function setup () {
    setupStatics()
    setupTilemap()
    setupPlayer()
    gameIsSetup = TRUE
}
behaviors.onEnter(SpriteKind.Guest, "moving", function (sprite) {
    sprites.setDataNumber(sprite, "moving", randint(400, 500))
})
behaviors.onUpdate(SpriteKind.Guest, "moving", function (sprite) {
    sprites.changeDataNumberBy(sprite, "moving", -1)
    if (sprites.readDataNumber(sprite, "") <= 0) {
        behaviors.setState(sprite, "idle")
    }
})
function movePlayer () {
    controller.moveSprite(s_player)
    scene.cameraFollowSprite(s_player)
}
behaviors.onEnter(SpriteKind.Car, "new", function (sprite) {
	
})
function spawnNewGuest () {
    let guests: Sprite[] = []
    new_guest = sprites.create(assets.image`guest`, SpriteKind.Guest)
    behaviors.setState(new_guest, "new")
    sprites.setDataNumber(new_guest, "moving", 0)
    guests.push(new_guest)
}
function spawnNewCar () {
    let cars: Sprite[] = []
    new_car = sprites.create(assets.image`car`, SpriteKind.Car)
    behaviors.setState(new_car, "new")
    cars.push(new_car)
}
let new_car: Sprite = null
let new_guest: Sprite = null
let gameIsSetup = 0
let vy = 0
let vx = 0
let direction = 0
let s_player: Sprite = null
let TILEMAP: tiles.TileMapData = null
let FALSE = 0
let TRUE = 0
helpers2()
setup()
forever(function () {
    if (gameIsSetup == TRUE) {
        movePlayer()
    }
})
