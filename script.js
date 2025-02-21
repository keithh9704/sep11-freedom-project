kaboom({
    background: [173, 200, 230],
});
loadSprite("nario", "images/nario.png"),
loadSprite("grass", "images/grass_block.png"),
loadSprite("spike", "images/spike.png"),
loadSprite("portal", "images/portal.png"),
setGravity(2400)
const playerSpeed = 500
const playerJump = 1000
    const level = addLevel([
        "@  ^   ",
	    "=======",
    ], {
        tileWidth: 64,
        tileHeight: 64,
        pos: vec2(100, 200),
        tiles: {
            "@": () => [
                sprite("nario"),
                area(),
                body({ jumpForce: playerJump }),
                anchor("bot"),
                "player",
            ],
            "=": () => [
                sprite("grass"),
                area(),
                body({ isStatic: true }),
                anchor("bot"),
            ],
            "^": () => [
                sprite("spike"),
                area(),
                body({ isStatic: true }),
                anchor("bot"),
                "danger",
            ],
            ">": () => [
                sprite("portal"),
                area(),
                anchor("bot"),
                "portal",
            ],
        },
    })

    const player = level.get("player")[0]

    onKeyPress("space", () => {
        if (player.isGrounded()) {
            player.jump(playerJump)
        }
    })

    onKeyDown("left", () => {
        player.move(-playerSpeed, 0)
    })

    onKeyDown("right", () => {
        player.move(playerSpeed, 0)
    })
