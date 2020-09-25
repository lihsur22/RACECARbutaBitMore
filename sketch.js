var db, pos, playC;
var game, Play, form;
var gameState = 0;
var allPlayer;
var cars, c1, c2, c3, c4;

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);

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
}