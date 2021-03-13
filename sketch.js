const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas;
var music;
var ball;

function preload(){
    
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    World.add(world,ground);
    World.add(world,ground);
     isStatic: true
    }
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
createSprite(random(20,750))
    ellipseMode(RADIUS);


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(bos) && box.bounceOff(surface1)){
    
    }
}
