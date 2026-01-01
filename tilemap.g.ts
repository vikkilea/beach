// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1c000c0001040b01020202020202040b0102020202020202020202020202020408070b0e0a0a0a0a0a0a0f0b0803030303030303030303030303030708070b08030303030303070d0c03030303030303030303030303030708070b0e0a0a0a0a0a0a0f0b0803030303030303030303030303030708070b03030303030303030b0803030303030303030303030303030708030202020202020202020203030303030303030303030303030307080303030303030303030303030303030303030303030303030303070803030303030303030303030303030303030303030303030303030708030303030303030303030303030303030303030303030303030307080303030303030303030303030303030303030303030303030303070803030303030303030303030303030303030303030303030303030705090909090909090909090909090909090909090909090909090906`, img`
............................
............................
............................
............................
............................
............................
............................
............................
............................
............................
............................
............................
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,myTiles.tile2,myTiles.tile1,myTiles.tile6,myTiles.tile8,myTiles.tile5,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "carpark_space":
            case "tile2":return tile2;
            case "road":
            case "tile1":return tile1;
            case "payment hut":
            case "tile6":return tile6;
            case "entrance_barrier_down0":
            case "tile8":return tile8;
            case "entrance_barrier_up":
            case "tile9":return tile9;
            case "carpark_end_left":
            case "tile5":return tile5;
            case "carpark_ending_right":
            case "tile3":return tile3;
            case "payment_hut_highlight":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
