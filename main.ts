namespace SpriteKind {
    export const MapTile = SpriteKind.create()
    export const Guest = SpriteKind.create()
}
function guestManager () {
	
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    spawnNewGuest()
})
function helpers2 () {
    TRUE = 1
    FALSE = 0
}
function setupStatics () {
    TILEMAP = tilemap`level1`
}
function updateGuests () {
    for (let internal_g of guests) {
        guest(internal_g)
    }
}
function setupTilemap () {
    tiles.setCurrentTilemap(TILEMAP)
}
function setupPlayer () {
    s_player = sprites.create(assets.image`player`, SpriteKind.Player)
}
function setup () {
    setupStatics()
    setupTilemap()
    setupPlayer()
    gameIsSetup = TRUE
}
function guest (g: Sprite) {
    if (!(sprites.readDataBoolean(g, "moving"))) {
        direction = randint(-1, 1)
        vx = randint(2, 6) * direction
        vy = randint(2, 6) * direction
        g.setVelocity(vx, vy)
        sprites.setDataNumber(g, "moving", randint(400, 500))
    } else {
        sprites.changeDataNumberBy(g, "moving", -1)
    }
}
function movePlayer () {
    controller.moveSprite(s_player)
    scene.cameraFollowSprite(s_player)
}
function spawnNewGuest () {
    new_guest = sprites.create(assets.image`guest`, SpriteKind.Guest)
    sprites.setDataNumber(new_guest, "moving", 0)
    guests.push(new_guest)
}
let new_guest: Sprite = null
let vy = 0
let vx = 0
let direction = 0
let gameIsSetup = 0
let s_player: Sprite = null
let guests: Sprite[] = []
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
forever(function () {
    guestManager()
    updateGuests()
})
