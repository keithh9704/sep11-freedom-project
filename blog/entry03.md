# Entry 3
##### 2/3/25
### Context
Over the winter break and 2 weeks after transitioning to github instead of tinkering in [kaboom playground](https://kaboomjs.com/play) made me learn more about how kaboom as a tool functions more and learned how to apply the javascript code when applying opening and closing statements.

When transitioning to github from kaboom playground I found out that some code need a comma( , ) to close out a certain element such as a semicolon( ; ) in html css code. 
Example:
``` js
const level = addLevel(LEVELS[levelIdx || 0], {
	tileWidth: 64,
	tileHeight: 64,
	tiles: {
		"@": () => [
			sprite("bigdog"),
			area(),
			body({ jumpForce: JUMP_FORCE }),
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
```
* There are many commas of end of code that build on top of each other.   

After figuring that out I went to go learn how to make a next stage of the game I learned mostly all the basics of making one level.
```js
player.onCollide("portal", () => {
	if (levelIndex < LEVELS.length - 1) {
		go("game", {
			levelIndex: levelIndex + 1,
		})
	} else {
		go("win")
	}
})
scene("win", () => {
	add([
		text("You beat the game!!"),
		pos(12),
	])
		onKeyPress(start)
})
```
* When the sprite named "player" collides with the sprite named "portal" the if statement checks the created variable of levelIndex (made from the function called game that stores all the sprites and user functions) is less than the length of the array of LEVELS.
    * If levelindex is lower than the length of the array in the variable levels then the player gets sent to that value that has different positioned sprites.
    * If levelindex is higher than the length of the array in the variable levels then it sends the player to the win scene.

With this function in my code It needs more than parkour to make the game challenging which is making collectables.
* First I had to create a parameter that are along side levelidx `scene("game", ({levelidx, score }) => {})` Then I had to apply this parameters to a couple of my existing code. 
Example:
``` js
player.onCollide("portal", () => {
		play("portal")
		if (levelIdx < LEVELS.length - 1) {
			go("game", {
				levelIdx: levelIdx + 1,
				score: score,
			})
		} else {
			go("win", { score: score })
		}
	})

scene("win", ({ score }) => {

	add([
		text(`You win. You also collected ${score} coins!`, {
			width: width(),
		}),
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
```
* The first `score: score` In the `player.onCollide` doesn't reset the score back to zero when going to the next level.
* The second `score:score` In the `player.onCollide` is used for if you want to show how much coins the player collected within the levels which is used later in the scene function called win.
* Lastly score is added in the function start to reset the score to 0 and also helps when making the text to show how many collectables they got.
``` js
const scoreBoard = add([
		text(score),
		pos(12),
        fixed(),
	])
```
This makes the count on the top left.

Now on to making the collectable, I would add 
``` js
"$": () => [
			sprite("coin"),
			area(),
			anchor("bot"),
			"coin",
		    ],
```
In the sprites section of the code and add $ to the levels array
```js
const LEVELS = [
	[
	"@   $   ^      $   ^    >",
	"=========================",
	],
	[
	"@ $     ^ ^   $  ^     $ >",
	"===    ============    ===",
	],
]
```
Which runs perfectly on github and was pretty proud of myself figuring this out without any external help. 
### EDP 
I am still on the 2nd stage of Engineering Design Process which is researching the problem since I am still learning all the kaboom functions to make a game that can challenge the user to complete the game.
### Skills 
I strengthen the way on __How to Learn__ by being curious about what if i remove this code what would happen? or what if I put this here what would happen? Also I strengthen my __organization__ by sorting img files in a folder instead of having them in different places in my repo which helps me to redirect the images files to use them in my code.
### Next Steps
I am at the almost on the end of learning kaboom functions for making a platformer so I look forward to learn how to make the user double jump and create an enemy that could send the user to gameover.
[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
