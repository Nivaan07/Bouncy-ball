var canvas;

var rect1;
var rect2;
var rect3;
var rect4;
var box;

function preload(){}


function setup(){
    canvas = createCanvas(400,400);


    var rect1 = createSprite(200,200,10,10);
    rect1.shapeColor = "red";
    var rect2 = createSprite(300,300,30,30);
    rect2.shapeColor = "blue";
    var rect3 = createSprite(350,300,30,30);
    rect3.shapeColor = "yellow";
    var rect4 = createSprite(250,300,30,30);
    rect4.shapeColor = "green";

    //create box sprite and give velocity

    var box = createSprite(random(20,750));
    box.shapeColor = "white";
    box.velocityY = 0.5;
}

function draw() {

    drawSprites();
    background("grey");
    //create edgeSprite
    createEdgeSprites();

    //add condition to check if box touching surface and make it box


    if(box. isTouching (rect1) && box.bonceOff(rect1)){

        rect1.shapeColor = "red";
    }
}
