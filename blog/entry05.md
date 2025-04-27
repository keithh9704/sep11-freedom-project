# Entry 5
##### 4/26/25
### Content
Over the time from last blog to present day I finished my mvp of the platformer game I made and planning to go beyond mvp with additional feature I learned from kaboom. Some beyond MVP features I learned was adding sound to the game
```js
loadsound('Name', "location of that mp3")

player.onCollide("coin", (coin) => {
	destroy(coin)
	play("Name")
})
```
This creates a sound from the .mp3 after the player collides with the sprite called coin by usnig the code `play("Name")` since we loaded the sound from the code `loadsound('Name', "location of that mp3")`.

I also learned a feature where a player can move an object by interacting with the sprite. The code looks something like this
```js
"0": () => [
			sprite("block"),
			area(),
			body({ mass: 10 }),
			anchor("bot"),
		],
```
For a stable sprite you usually use `body({ isStatic: true })` to the sprite so it can stay floating in the air for unique parkour jumps. Instead of `isStatic: true` you give the body a __mass__ so you can move the sprite by colliding with the player sprite. There is no limit of how much mass you can give the sprite since you could still move the sprite if it's has 0 mass or 1000 mass. The only difference is the speed of how the sprite can be moved, If the mass is 0 you can move the sprite pretty fast or if the mass is 1000 you can still move the sprite but it would be really slow.
[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)