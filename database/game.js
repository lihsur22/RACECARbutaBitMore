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

    start() {
        if(gameState == 0)
        {
            Play = new Player();
            Play.readCount();
            form = new Form();
            form.display();
        }
    }
};