namespace SpriteKind {
    export const MapTile = SpriteKind.create()
    export const Guest = SpriteKind.create()
}
function guestManager () {
	
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    spawnNewGuest()
})
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
	
}
function movePlayer () {
    controller.moveSprite(s_player)
}
function helpers2 () {
    TRUE = 1
    FALSE = 0
}
function spawnNewGuest () {
    new_guest = sprites.create(assets.image`myImage`, SpriteKind.Guest)
    guests.push(new_guest)
}
let new_guest: Sprite = null
let FALSE = 0
let TRUE = 0
let gameIsSetup = 0
let s_player: Sprite = null
let guests: Sprite[] = []
let TILEMAP: tiles.TileMapData = null
helpers2()
setup()
forever(function () {
    guestManager()
    updateGuests()
})
forever(function () {
    if (gameIsSetup == TRUE) {
        movePlayer()
        scene.cameraFollowSprite(s_player)
    }
})
