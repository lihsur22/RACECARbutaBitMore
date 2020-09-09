var ball;
var db, pos;

function setup(){
    createCanvas(500,500);

    db = firebase.database();
    var childPos = db.ref("ball/pos");
    childPos.on("value",readDB,showErr);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(pos !== undefined) 
    {
        if(keyDown(LEFT_ARROW))
        {
            writePosition(-4,0);
        }
        else if(keyDown(RIGHT_ARROW))
        {
            writePosition(4,0);
        }
        else if(keyDown(UP_ARROW))
        {
            writePosition(0,-4);
        }
        else if(keyDown(DOWN_ARROW))
        {
            writePosition(0,4);
        }
    }
    drawSprites();
}

function writePosition(x,y){
    db.ref("ball/pos").set({
        x: ball.x + x,
        y: ball.y + y
    })
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}

function readDB(data) {
pos = data.val();
ball.x = pos.x;
ball.y = pos.y;
}

function showErr() {
    console.log("errorr");
}