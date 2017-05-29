var   Engine = Matter.Engine,
      // Render = Matter.Render,
      World = Matter.World,
      Events = Matter.Events,
      Constraint = Matter.Constraint,
      Bodies = Matter.Bodies;

var engine;
var world;
var box1;
var boxes = [];
var particles = [];
var boundaries = [];
var constraints = [];

function preload() {
  // ding = loadSound("beep.mp3");
}

function mousePressed(){

    var tempParticle = new Particle(mouseX, mouseY, random(5, 30));
    particles.push(tempParticle);

}




var setup = function(){
  createCanvas(800, 600)
  background(360,100,100)
  colorMode(HSB);

  // create matter engine
  engine = Engine.create();
  world = engine.world;

  tempBoundary = new Boundary(width / 2 , height -20 , width, 5, Math.PI );
  boundaries.push(tempBoundary);

  leftBoundary = new Boundary(0,height / 2,10,height, Math.PI);
  boundaries.push(leftBoundary);

  rightBoundary = new Boundary(width - 20,height / 2, 10, height, Math.PI);
  boundaries.push(rightBoundary);

  // create two particles
  p1 = new Particle(100, 30, 10);
  p2 = new Particle(150, 60, 10);
  particles.push(p1);
  particles.push(p2);




  var options = {
    bodyA:  p1.body,
    bodyB:  p2.body,
    length: 150,
    stiffness: .4
  }

  var constraint = Constraint.create(options)
  World.add(world, constraint);

  Engine.run(engine);


  // create collision function
  function collision(event){
    var pairs = event.pairs;
    for (var i = 0; i < pairs.length; i++){
        var bodyA = pairs[i].bodyA;
        var bodyB = pairs[i].bodyB;
        // console.log(bodyA.label, bodyB.label)
      }
  }

  // register callback to collision function
  Events.on(engine, 'collisionStart', collision);

}

var draw = function() {
  background(100,20,100);
  for (b of boxes){
    b.show();
  }

  for (p of particles){
    p.show();
  }

  for (b of boundaries){
    b.show();
  }
}
