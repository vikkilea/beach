namespace SpriteKind {
    export const MapTile = SpriteKind.create()
}
function setupStatics () {
    MAP_WIDTH = 12
    MAP_HEIGHT = 12
    MAP_TILE_SIZE = 17
}
function setupMap () {
    s_tiles = []
    x = 0
    for (let index = 0; index < MAP_WIDTH; index++) {
        s_tiles_inner = []
        y = 0
        for (let index = 0; index < MAP_HEIGHT; index++) {
            tile = sprites.create(assets.image`sand_tile`, SpriteKind.MapTile)
            tile.setPosition(MAP_TILE_SIZE * x, MAP_TILE_SIZE * y)
            s_tiles_inner.push(tile)
            y += 1
            console.log(y)
        }
        x += 1
        s_tiles.push(s_tiles_inner)
        console.log(x)
    }
}
function setupPlayer () {
    s_player = sprites.create(assets.image`player`, SpriteKind.Player)
}
function setup () {
    setupStatics()
    setupMap()
    setupPlayer()
    gameIsSetup = TRUE
}
function movePlayer () {
    controller.moveSprite(s_player)
}
function helpers2 () {
    TRUE = 1
    FALSE = 0
}
let FALSE = 0
let TRUE = 0
let gameIsSetup = 0
let s_player: Sprite = null
let tile: Sprite = null
let y = 0
let s_tiles_inner: Sprite[] = []
let x = 0
let s_tiles: Sprite[][] = []
let MAP_TILE_SIZE = 0
let MAP_HEIGHT = 0
let MAP_WIDTH = 0
helpers2()
setup()
forever(function () {
    if (gameIsSetup == TRUE) {
        movePlayer()
    }
})
