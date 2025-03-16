# Entry 4
##### 3/10/25

### Content
Over the past month I started to plan out my mvp and do parts of my mvp by the deadline I set it to. So far this is my code
```js
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
        "@  ^  *",
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
    player.onCollide("danger", () => {
        go("lose")
    })
scene("lose", () => {
	add([
	 text("You Lose. Press Any Key to try again"),
  		])
})
scene("win", () => {
	add([
		text(`You beat the game!!`),
	])
})
```
 I have a basic sprite as the user, a sprite representing spike that sends the user to the gameover screen, a sprite that represents the platform the player will be standing on and two other sprites I am planning on using in the future. I have the basic movements of any flash game and a gameover scene that is responsive + a victory scene that will be inputed to my game in the future. This week and Next week I am planning on to work on making the levels, collectables and keeping track how many collectables they collected. I also learned more beyond mvp functions that may be helpful to make challenging levels such as double jump
``` js
"@": () => [
			sprite("bigdog"),
			area(),
			body(),
			anchor("bot"),
			doubleJump(),
			"player",
		],
    onKeyPress("space", () => {
	    player.doubleJump()
})
```
and moving enemies that are on "partol".
```js
function enemyMovement(speed = #) {
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
```
I also learned how to make them defeatable by jumping on there heads.
```js
player.onGround((ghost) => {
		if (ghost.is("enemy")) {
			player.jump(JUMP_FORCE * 1.5)
			destroy(ghost)
			addKaboom(player.pos)
			play("powerup")
		}
	})
```
You can make a special effect when you defeat the enemy with a kaboom display on where the ghost was defeated and/or make a sound when the enemy is defeated.
### EDP
I am on moving on from 2nd stage of Engineering Design Process and through went though stage 3-4 of the Engineering Design Process which is researching the problem creating a plan which i created two weeks ago and went on the stage 5-6 of the Engineering Design Process making the mvp/prototype and testing if each code is working how I wanted it to be. So far I am in the early stages of this part of the Engineering Design Process so I haven't reached any problems yet.
### Skills
Over the time between my last entry and this entry I strengthened my idea on how to decompose/break my mvp and creating deadlines for myself so I can manage my time
#### Decomposing My MVP
While making my plan on how I would create this game I was reminded just not put what the game needs to function. Each section should have mini tasks that build up to the big task so my plan could be really clear for future me and not as confusing if someone would see my thinking process of constructing My MVP. This is an example of me strengthening this skill
```
- [ ] Create the Sprites using background remover (deadline: 2/24/25)
  - [ ] Add movement to the user (deadline: 2/24/25)
    - [ ] Arrow Key movements + jumping key movements (deadline: 2/24/25)
    - [ ] Add How fast and high the user jumps (deadline: 2/24/25)
    - [ ] Make a collectable for the user to collect (deadline: 3/31/25)
      - [ ] Add a scoreboard on the top left (deadline: 3/31/25)
```
#### Time Management
Making a plan is easy enough to say yeah I will do this week and this that week but when you actually do it you could run into unexpected time crunch and U have to make an extension for yourself which is not a good habit. I thought how easy and how hard each task is and set a deadline it has be due by so I don't fail behind to the BIGGER deadline at april 21 to finish the MVP.

### Next Steps
After learning most the things I want to put on my game I am really excited to begin and continue making a game that I will be working for the next month and couple of weeks to provide entertainment for people that love to plan out there strategy to beat my game.

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
