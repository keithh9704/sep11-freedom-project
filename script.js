kaboom({
    background: [173, 200, 230],
});
loadSprite("nario", "images/nario.png"),
loadSprite("grass", "images/grass_block.png"),
loadSprite("spike", "images/spike.png"),
loadSprite("portal", "images/portal.png"),
loadSprite("star", "images/star.png"),
loadSprite("enemy","images/deadly_mushroom.png"),
setGravity(2400)
const playerSpeed = 500
const playerJump = 1000
const LEVELS = [
    [
    "                 =                ",
    "                              *   ",
    "@            *                    ",
    "             =                    ",
    "                             ^ ^ >",
    "========                  ========",
    ],
    [
    "@                                         ",
    "                                       >  ",
    "                              ===         ",
    "========            ======                ",
    "            -                             ",
    ],
    [
    "                  ***            ",
    "                 *   *    =      ",
    "                          =      ",
    "                          =      ",
    "@                         =      ",
    "                          =      ",
    "                          =      ",
    "    ^   *  = # ^ #  ^ #   =   ^ >",
    "=================================",
    ],
    [
    "@    ^           *       *       *        ^  >",
    "==========       =       =       =       =====",
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
            "-": () => [
                sprite("grass"),
                area(),
                body({ isStatic: true }),
                anchor("bot"),
                enemyMovement(),
            ],
            "^": () => [
                sprite("spike"),
                area(),
                body({ isStatic: true }),
                anchor("bot"),
                "danger",
            ],
            "#": () => [
                sprite("enemy"),
                area(),
                anchor("bot"),
                body(),
                enemyMovement(),
                "enemy",
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
    onKeyPress("up", () => {
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
                go("win", { score: score })
            }
        })
    function enemyMovement(speed = 100) {
        return {
            add() {
            this.on("collide", (obj, col) => {
             if (col.isLeft() || col.isRight()) {
                 speed = -speed
             }
          })
       },
        update() {
        this.move(speed, 0)
        },
      }
   }
    player.onUpdate(() => {
        camPos(player.worldPos())
     })

    player.onPhysicsResolve(() => {
        camPos(player.worldPos())
    })
    player.onGround((mushroom) => {
		if (mushroom.is("enemy")) {
			player.jump(playerJump * 1.5)
			destroy(mushroom)
			addKaboom(player.pos)
		}
	})
    player.onCollide("danger", () => {
        go("lose")
    })
    player.onCollide("enemy", (e, col) => {
		if (!col.isBottom()) {
			go("lose")
		}
	})
    player.onUpdate(() => {
		if (player.pos.y >= 600) {
			go("lose")
		}
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
    add([
      text("up arrow to jump, left arrow to move left, right arrow to move right"),
      pos(20, 100),
      fixed(),
    ])
  })
scene("lose", () => {
	add([
	 text("GAME OVER. Press Any Key to try again"),
     pos(12),
  	])
    onKeyPress(start)
})
scene("win", ({score}) => {
	add([
		text(`You beat the game!! You Collected ${score} Coins! Press Any Key to play again`),
        pos(12),
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
