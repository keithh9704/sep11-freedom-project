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

<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
