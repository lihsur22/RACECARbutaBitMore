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
    }

    play() {
        form.hideAll();
        textSize(35);
        text("Game Has Started", 250, 50);
        Player.playerInfo();
        if(allPlayer !== undefined){
            var dispPos = 130;
            for(var plr in allPlayer){
                if(plr === 'player' + Play.index)
                fill("red");
                else
                fill("black");
                dispPos += 20;
                text(allPlayer[plr].name + ":" + allPlayer[plr].distance,120,dispPos);
            }
        }
        if(keyIsDown(UP_ARROW) && Play.index !== null){
            Play.distance += 50;
            Play.update();
        }
    }
};