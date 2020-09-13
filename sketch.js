var db, pos, playC;
var game, Play, form;
var gameState = 0;

function setup(){
    createCanvas(500,500);

    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){}