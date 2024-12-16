# Entry 2
##### 12/14/24

### Context
While learning my tool [Kaboom](https://kaboomjs.com) I learned a lot of things the past month and 3 quarters. Such as create blocks to stand on with sprites and create a player with a sprite so the sprite identifies as player can stand on the sprites that are identified as grass/coin/danger.
 ```js
        tiles: {
            "@": () => [
            sprite("bean"),
            area(),
            body(),
            anchor("bot"),
            "player",
            ],
            "=": () => [
            sprite("grass"),
            area(),
            body({ isStatic: true }),
            anchor("bot"),
            ],
            "$": () => [
            sprite("coin"),
            area(),
            anchor("bot"),
            "coin",
            ],
            "^": () => [
            sprite("spike"),
            area(),
            anchor("bot"),
            "danger",
            ],
        },
```
The parts of this code that are really important are `area()`, `body()`, `anchor("bot")` that prevents the player sprite from going through the sprites that are identified as grass/coin/danger.

Learned how add movement that are binded to keys which look like:
``` js
onKeyPress("space", () => {
        if (player.isGrounded()) {
            player.jump()
        }
    })
    onKeyDown("left", () => {
        player.move(-SPEED, 0)
    })
    onKeyDown("right", () => {
        player.move(SPEED, 0)
    })
```
* __onKeyDown__ does the action when the user holds on the key 
 * __onKeyPress__ does the action when the user presses the key (if pressed again nothing will happen unless the character is already on the ground)
* The .move (SPEED,0) moves your character to the right and the name right defaults to your right arrow and if you want to switch to wasd keybinds you would replace right to d.
* same thing with .move with (-SPEED,0) but this moves the character to the left and if u want to change to wasd keybind you replace right to a.


I also learned how to create a gameover screen and make a sprite go to the gameover screen. which looked like:
```js
scene("lose".,()=>{
    add ([
        text("lopum")
        pos(#)
    ])
    onKeyPress(start)
    player.onUpdate(() => {
        if (player.pos.y >= 480) {
            go("lose")
        }
    })
    player.onCollide("danger", () => {
        go("lose")
    })
```
* The name `"game"` is the function that stores all the code for player movements. All of the sprites and names of all the sprites. Also since the gameover scene was named lose I learned that if u use player.onUpdate it automatically updates the players location to the computer then making it into a conditional could directly make it run the scene lose. Same thing as .onCollide, if the sprite identified as a player touches another sprite called danger it would run the lose scene.


And last I learned how to input where the camera is centered at the character.
``` js
player.onUpdate(() => {
    camPos(player.worldPos())
})
player.onPhysicsResolve(() => {
    camPos(player.worldPos())
})
```
* This is really similar to learning how to make the user go to the gameover screen with .OnUpdate.
* .onPhysicsResolve makes the user viewpoint always on the sprite. Without .onPhysicsResolve if u run into a block the viewpoint won't not be on the sprite anymore which makes the viewpoint weird.
### EDP
I am currently at the 2nd stage of the Engineering Design Process. This stage is researching the problem. Right now I am slowly learning what kaboom presents to the user(me) about their platformer maker. I learned how to create blocks that the sprite can stand on, making gameover scenes if the sprite interacts with another sprite and falls out of the screen, movement keys that the character can use to move around the platformer.
### Skills
I learned to have a __growth mindset__ the more I work with kaboom because whenever I am trying to learn a new concept kaboom is showing me instead of being mad and doesn't get the kaboom code. I would reread what is wrong, see how many brackets there are so every section of a code is closed, attempt to solve the problem then ask for hints if I need it. This also connects to  __Attention to Detail__ skill since I am carefully looking at if there are unclosed sections of code or missing variable names and much more


### Next Steps
Since the winter break is coming up two goal I have which are is to move away from the [Kaboom playground](https://kaboomjs.com/play) and start to tinker on my IDE and Learn how to make a sprite that sends the user to the next level of the platformer then adding different structure to the platformer to challenge the user.

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)