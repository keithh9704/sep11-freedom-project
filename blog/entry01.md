# Entry 1
##### 10/28/24
### Context
While researching the tool I will use for this year I looked at phaser and kaboom. Phaser has good looking 2d games that may looks really interesting to code with so I download it on github I looked at a tutorial [make your first game](https://phaser.io/tutorials/making-your-first-phaser-3-game/part1) and on part 7 I tinkered with the jumping and movement speeds
```
function update ()
    {
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);


            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(240);


            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);


            player.anims.play('turn');
        }


        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-100);
        }
    }
```


Phaser uses if else statements for their movement keys, I changed up with the numbers that says velocity and it seems like for jumping speed __the more positive the number__ is lower jumping power it gets. then for velocity x the one with the cursor right, the higher it is the faster you move right. Same with left velocityX  but the more negative the number is the faster you move left. Even though this seems really interesting to work with and later I would learn to create 2d games, I wanted to tinker with kaboom since It looks more friendly in my eyes for me. so I chose Kaboom since they have their own playground which phaser doesn't (at least when I was researching) where you can tinker without having to go download kaboom to your github. I know eventually I would have to add it to my github but I feel like being familiar with your tool first is the better option. With Kaboom I was looking at the different things you could do and the one thing that stood upon me the most was making a platformer game. The platformer would look something like [this](https://kaboomjs.com/play?example=platformer) so I tinkered with the blocks and the enemies then I realized this tool is for me.


### Engineering Design Process
I am at the first stage of EDP (Engineering Design Process) . The stage is defining the problem. I feel like not everyone has access to mario 2d games except for those sketchy websites that may lag and ruin your experience of playing mario. So I want to make a bootleg mario game with different items and twists. maybe it would be called something funny like it's me nario for copyright reasons.


### Skills
I learned how to Research the different tools presented and debugging.
#### Researching
With tutorials and websites explaining how this js code does this after not researching something for a long time, I am slowly remembering what I learned last year and ready to learn more about how to research more efficiently this year.
#### Debugging
I have strength my ideas of what should I tinker and looking where would blank input be connected to so I can change either what the input does or how fast should the input be. Then when I get an error I Instantly look at the console and refer to that line of code.


### Next steps
Going to the 2nd stage of EDP, to research my problem, I have a feeling it may take awhile for me to get really comfortable with kaboom but I believe I can do get familiar with kaboom.



[Next](entry02.md)

[Home](../README.md)
