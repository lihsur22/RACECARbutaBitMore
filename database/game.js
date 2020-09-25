class Game {
    constructor(){}

    getState() {
        var gameRef = db.ref('gameState');
        gameRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state) {
        db.ref('/').update(
            {
                gameState:state
            }
        )
    }

    async start() {
        if(gameState == 0)
        {
            Play = new Player();
            var refCount = await db.ref('playC').once("value");
            if(refCount.exists()){
                playC = refCount.val();
                Play.readCount();
            }
            form = new Form();
            form.display();
        }
        c1 = createSprite(100,200);
        c2 = createSprite(300,200);
        c3 = createSprite(500,200);
        c4 = createSprite(700,200);
        cars = [c1,c2,c3,c4];
    }

    play() {
        form.hideAll();
        //textSize(35);
        //text("Game Has Started", 250, 50);

        Player.playerInfo();

        if(allPlayer !== undefined)
        {
            var index = 0;
            var x = 0;
            var y;

            for(var plr in allPlayer){
                index = index + 1;
                x = x + 200;
                y = displayHeight - allPlayer[plr].distance;

                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if(index === Play.index + 1)
                {
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                }
            }
        }

        if(keyIsDown(UP_ARROW) && Play.index !== null){
            Play.distance += 10;
            Play.update();
        }
        drawSprites();
    }
};