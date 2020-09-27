var db, pos, playC;
var game, Play, form;
var gameState = 0;
var allPlayer;
var cars, c1, c2, c3, c4;
var c1Img, c2Img, c3Img, c4Img, grundImg, trackImg;

function preload(){
    c1Img = loadImage("images/car1.png");
    c2Img = loadImage("images/car2.png");
    c3Img = loadImage("images/car3.png");
    c4Img = loadImage("images/car4.png");
    grundImg = loadImage("images/ground.png");
    trackImg = loadImage("images/track.png");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);

    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playC == 4 && gameState != 2)
    {
        game.update(1);
    }
    if(gameState == 1)
    {
        clear();
        game.play();
    }
    if(gameState == 2)
    {
        game.end();
    }
}