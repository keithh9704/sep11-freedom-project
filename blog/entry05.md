# Entry 5
##### 4/26/25
### Content
Over the time from last blog to present day I finished my mvp of the platformer game I made and planning to go beyond mvp with additional feature I learned from kaboom. Some beyond MVP features I learned was adding [sound](kaboomjs.com/play?example=scenes) to the game
```js
loadsound('Name', "location of that mp3")

player.onCollide("coin", (coin) => {
	destroy(coin)
	play("Name")
})
```
This creates a sound from the .mp3 after the player collides with the sprite called coin by usnig the code `play("Name")` since we loaded the sound from the code `loadsound('Name', "location of that mp3")`.

I also learned a feature where a player can [move objects](https://kaboomjs.com/play?example=collision)by interacting with the sprite. The code looks something like this
```js
"0": () => [
			sprite("block"),
			area(),
			body({ mass: 10 }),
			anchor("bot"),
		],
```
For a stable sprite you usually use `body({ isStatic: true })` to the sprite so it can stay floating in the air for unique parkour jumps. Instead of `isStatic: true` you give the body a __mass__ so you can move the sprite by colliding with the player sprite. There is no limit of how much mass you can give the sprite since you could still move the sprite if it's has 0 mass or 1000 mass. The only difference is the speed of how the sprite can be moved, If the mass is 0 you can move the sprite pretty fast or if the mass is 1000 you can still move the sprite but it would be really slow.
#### Freedom Project MVP
For the past month I been following my checklist of what I have to do to piece my MVP together. I used my learning log and my tinkering code to help me 
* centering the camera to the player sprite 
```js
player.onUpdate(() => {
        camPos(player.worldPos())
     })

    player.onPhysicsResolve(() => {
        camPos(player.worldPos())
    })
``` 
* restart the game with a keypress 
``` js 
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
```
* functional star the players can collect + show how many stars has been collected. 
``` js
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
```
Then spring break came and I switched my attention to study for the sat. The deadline was around the corner so I wanted to finish my mvp quickly by adding levels to be qualified as an MVP. These were my levels 
``` js
[
    [
    "                ==        ",
    "                      *   ",
    "@            *            ",
    "            ===           ",
    "      ^              ^ ^ >",
    "========          ========",
    ],
    [
    "                  ***             ",
    "                 *   *    =       ",
    "                                  ",
    "                                  ",
    "                                  ",
    "                                  ",
    "                                  ",
    "@   ^   *  = # ^ #  ^ #  ^  ^  ^ >",
    "=================================",
    ],
    [
    "@    ^           *       *       *        ^  >",
    "==========       =       =       =       =====",
    ],
]
```
The symbols represented the sprites that will be shown in the game. Refer to my [last blog](entry.04.md), the only sprite I didn't add were the enemy sprite because while making these levels I felt like adding a beyond MVP feature such as enemies that can send the player to the gameover screen. The enemies are represented by hashtags.    
* For this game If u die once you will start over from the start so when they are at the final level It gives them a lot of pressure to not mess up. 
* 1st level has jumps that are beginner friendly and the stars are really easy to collect expect when you jump to the jumper platform, 9 times out of 10 you won't be able to get the star above the spikes.
* 2nd level you have to jump on top of the enemies head to get a jump boost so you can get the stars and land on the floating platform to jump into the portal to the next level.
* 3rd and last level(I am planning to add one to two more levels) you have to make 7 block jump 3 times while having one block of space to get to the next block. Then there are spikes to add more pressure to the player. 

I feel that this project is bare bones of my creativity so My next steps to show that I want to show a bit of my creativity out there is adding one to three more beyond mvp features like sound effects, learning how to apply sprite spreadsheets, moving platforms, power ups, and moveable platforms. 
### EDP


[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)