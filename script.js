kaboom({
    background: [173, 200, 230],
});
loadSprite("nario", "images/nario.png"),
loadSprite("grass", "images/grass_block.png"),
loadSprite("spike", "images/spike.png"),
loadSprite("portal", "images/portal.png"),
loadSprite("star", "images/star.png"),
setGravity(2400)
const playerSpeed = 500
const playerJump = 1000
const LEVELS = [
    [
     "@  ^  *  >",
	 "==========",
    ],
    [
    "@  ^  ** >",
    "==========",
    ],
]
scene("game", ({ levelIdx, score }) => {
const level = addLevel(LEVELS[levelIdx || 0], {
        tileWidth: 64,
        tileHeight: 64,
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
            "*": () => [
                sprite("star"),
                area(),
                anchor("bot"),
                "star",
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
    player.onCollide("portal", () => {
        if (levelIdx < LEVELS.length - 1) {
            go("game", {
            levelIdx: levelIdx + 1,
            score: score
            })
            } else {
                go("win")
            }
        })
    player.onUpdate(() => {
        camPos(player.worldPos())
     })

    player.onPhysicsResolve(() => {
        camPos(player.worldPos())
    })
    player.onCollide("danger", () => {
        go("lose")
    })
    player.onCollide("star", (star) => {
		destroy(star)
        score++
        scoreBoard.text = score
	})
    const scoreBoard = add([
		text(score),
		pos(12),
		fixed(),
	])
  })
scene("lose", () => {
	add([
	 text("You Lose. Press Any Key to try again"),
  	])
    onKeyPress(start)
})
scene("win", () => {
	add([
		text(`You beat the game!!`),
	])
    onKeyPress(start)
})
    function start() {
        go("game", {
            levelIdx: 0,
            score: 0,
        })
    }
    start()
