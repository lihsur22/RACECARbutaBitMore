var db, pos, playC;
var game, Play, form;
var gameState = 0;
var allPlayer

function setup(){
    createCanvas(500,500);

    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playC == 4)
    {
        game.update(1);
        if(gameState == 1)
        {
            clear();
            game.play();
        }
    }
    console.log(Play);
}