const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, backgroundIMG;
var box1, box2, box3, box4, box5, ground, log1, log2, log3, log4, angryBird, pig, pig2;

function preload() {
    backgroundIMG = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(725,300,70,70);
    box2 = new Box(900,300,70,70);
    box3 = new Box(725,175,70,70);
    box4 = new Box(900,175,70,70);
    box5 = new Box(812.5,100,70,70);
    ground = new Ground(600, 390, 1200, 20);
    log1 = new Log(810, 200, 250, PI/2);
    log2 = new Log(810, 100, 250, PI/2);
    log3 = new Log(810, 50, 150, -PI/7);
    log4 = new Log(810, 50, 150, PI/7);
    angryBird = new AngryBird(100, 100);
    pig = new Pig(812.5, 300);
    pig2 = new Pig(812.5, 100);
    
}

function draw(){
    background(backgroundIMG);

    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display(); 
    box5.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    angryBird.display();
    pig.display();
    pig2.display();
   
}