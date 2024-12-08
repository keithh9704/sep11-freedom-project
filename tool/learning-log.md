# Tool Learning Log

## Tool: **Kaboom**

## Project: **A platformer game**

---

### 10/14/24:
* To "install kaboom you use `<script src="https://unpkg.com/kaboom@3000.0.1/dist/kaboom.js"></script>` In the html then in the script.js you use `kaboom();`
* To add something you use add([ ]); (this is really important since it can combine muliple kaboom codes)
* you can create sprite by loadSprite(Name , location); (you have to have images for sprites in the repo) Ex: (bob, Sprite/bob.png)
* You can create sound by loadsound( , ); (you must have an .mp3 that has the sound in the repo) Ex: (bob, Sound/bob.mp3)
* sprite(spritename) spawns in the sprite you created
* pos(#,#) you can position the sprite/objects you add in add([ ]);
* scale(#) the size of the sprite/object
* rotate(#) rotate the sprite/object
* color(#, #, #) the color of the sprite/object (this uses the rgb numbers)
### 10/26/24:
used kaboom playground and went on [gravity](https://kaboomjs.com/play?example=movement) and [movement](https://kaboomjs.com/play?example=movement) options then tried to combined both of them
* To set gravity you need to use setGravity(#);
    * To use gravity properly you need body() to respond to gravity
        * body() comes with .isgrounded() and .jump() which makes the character jump
        * .isgrounded and .jump() is best used with an if statement ex:
         ```js
         if (var.isGrounded()) {
            var.jump()
         }
         ```
    * Alongside with body() you need keybinds such as onKeyDown and onKeyPress
        * onKeyDown does the action when the user holds on the key
        * onKeyPress does the action when the user presses the key (if pressed again nothing will happen unless the character is already on the ground)
    * To accurately set how far you jump or move you define a varible you have to create in () of jump or along with `player.move(0, myVar)`
        * 100 = 1 when you create how fast the character jumps or moves.
            * if you wanted to add 5 movement speed then it's 500 because if you put 5 the character will move really really slowly.
* To make a platform you need to use
    ```js
    add([
	rect(width(), #),
	area(),
	pos(#, height() - #),
	body({ isStatic: true }),
    ])
    ```
    * area() and body ({isStatic: true}) is really important since the character will go though the platform without them
    * rect(width(), #) makes the width of the platform
    * pos(#, height()- #) the first value positions the start of a platform to a coordinate point. the height()- # positions how high the platform will be with the use of a coordinate point.
        * The reason why you use height()- # because for platformer games they start at the bottom not the top so without height()- # you have to use huge numbers like 900 to put the platform on the bottom
* An a-ha moment I had was when you jump with the character if you press space again it would hover midjump for a couple muilsecond. I wanted to fix that but didn't know how. Then when I read what onKeyDown does i realize the fix is to change onKeyDown to onKeyPress so when i press the button during the jump nothing will happen.
* My question now is what other functions can I use to improve the game experience?
* The next thing is to possibly make a level and learn collisions
### Started at 11/4/24, Finished at 11/11/24
* To make a level you have to create a variable first called levels that equals to `addLevel([ ]` then under the `addlevel([]` you add { } and inside those brackets you add these components.
    * tile width: #
    * tile height: #
    * pos: (#,#) the 1st number moves blocks left to right while the 2nd number moves block up or down. This code doesn't matter when you are using camera to follow the "player"/sprite.
    * A symbol representing a sprite such as @, A symbol representing the blocks such as =, A symbol representing the collectables such as $.
        * An example of the code is
        ``` js
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
        },
        ```
        * area() and body() ,like I learn 10/26/14, gives these sprites gravity but a thing I learn this week about area and body is that giving collectables an area() makes the collectable be able to be collected.
        * Then we have `anchor("bot"),` which makes the flow of the level anchored and without it the level flow would be all of the place.
        * We have player under character bean and coin under the collectable because somewhere under this code we have a variable called player which makes the character move and jump (The code I learn 10/26/14). A variable called coin which makes the coin collectable.
        * I went and go learned how to make the coin collectable and it looks something like this
        ``` js
        player.onCollide("coin", (coin) => {
	        destroy(coin)
            })
        ```
        * All this means is that if the player touches the coin the coin would disappear. you could add sound effects like play(blahblah.mp4) or/and somewhere in the code space have a variable named score and when the coin collides with the character it adds to the score and Many more.
* After setting up symbols for the platformer on [ ] we left open, we would add something like this:
    ```
    "@  =  $",
    "=======",
    ```
    * The quotion marks determind the end point of the plaformer/the void.
    * You must have the , after you are done with that part of the platformer or else it would crash the whole game
    * You would put every height of the platformer into one single line like this `"@  =  $", "=======",` but it looks really unorganized and it would hurt your future self.

Today I used the [Kaboom playground](https://kaboomjs.com/play) again because In my opinion it helps me learn the different things that kaboom can do. To figure out how each code works I would delete them and see what function gets removed and then I write them down here. Sometimes I find like the , in making level + creating code and anchor("bot") have really different levels of importance but is really crucial to platformers.
Next time I will try to add different things to the level of the platformer like things that goes that makes to the gameover screen and try to create a gameover screen.
### 11/18/24 Finished at 11/24/24
* to restart a level after you reached gameover you have to create a scene first with.
``` js
scene("lose(nameofvar)".,()=>{
    add ([
        text("lopum")
        pos(#)
    ])
    onKeyPress(start)
})
```
* The reason why the variable is in quotation marks is because it's not really a variable and giving this scene a name can make different functions go to this function. such as:
``` js
player.onUpdate(() => {
        if (player.pos.y >= 480) {
            go("lose")
        }


    })


```
* What this function does is when the player sprite y axis goes to 480 or lower it would run `lose` with the code `go("lose")` which is the scene that goes to gameover.
* With the use of naming the scene kaboom allows functions such as player.onUpdate be able to run a function in a function which is really helpful since it's like an if else statement but for games.
* The reason why we don't use the if else statement because It ruins the running of the code and the code will be really complex/hard to read/troubleshoot for any problems.


* Going back to the gameover scene, that code would only work once if it wasn't for `onKeyPress(start)`.
    * The player will have to press any key to play the level again. The start inside of the parentheses is a function that makes the player play the level again.
    * The function looks something like this
    ``` js
    function start() {
        go("game")
    }
    start()
    ```
    * The name `"game"` is the function that stores all the code for player movements. All of the sprites and names of all the sprites, the collection of coins, and when the player sprite goes to pos y = 480.
    * go("game") makes the function start run the whole function called game.
    * start() is used to call the function.
* When making a sprite(asset) that makes the player go to the gameover screen, first we have to make the object.
* With the help with [Kaboom playground](https://kaboomjs.com/play) I could quickly learn that it's really similar to what I learned last week 11/11/24
``` js
"^": () => [
    sprite("spike"),
    area(),
    anchor("bot"),              
    "danger",
],
```
* The only difference is that the spike doesn't have a body() since
    * the player won't be able to stand on the sprite/asset
* The reason why the player won't be able to stand on the sprite/asset is because this sprite/asset has the name danger which can be used as a function that would lead to gameover screen.
* The function looks something like this
``` js
player.onCollide("danger", () => {
        go("lose")
    })


```
* .onCollide is a function that if the player touches the sprite/asset named danger it would go to the scene called lose which is the gameover scene.
### 12/8/24 used [Kaboom playground](https://kaboomjs.com/play) again
* To make the camera follow your character you would need to first define a sprite that will be your "player" which what I learn back in (11/11/24) then create a variable that sets the name player into a variable. This would look something like this:
``` js
var varName = level.get("player")[0]
```
* level comes from the variable that creates the levels and the sprites that are used. (such as the codes i learned back 11/11/24)
* the .get() gets the sprites used for the platformer to be connected to this variable.
    * you can see there is a "player" inside of the (). This isn't really necessity since the [0] is mainly used to make this variable run
    * The reason why the 0 inside of the brackets mainly makes this variable run because just like an a array this selects the whole code to be run by this variable when making different features to the platformer.
 * Now that the player variable is set up we can use `campos` and `worldpos`.
 * the code for camera
 ``` js
player.onUpdate(() => {
	camPos(player.worldPos())
})
player.onPhysicsResolve(() => {
	camPos(player.worldPos())
})
 ```
 * .onUpdate looks familiar from (11/24/24) and what camPos does with player.worldpos is that everytime the user moves it sets the viewpoint at the sprite.
 * .onPhysicsResolve makes the user viewpoint always on the sprite. without .onPhysicsResolve if u run into a block the viewpoint won't not be on the sprite anymore which makes the viewpoint weird.

<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
