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

  // create a few particles

  prevParticle = null;
  for (x = 20; x < 400; x += 30){
    p = new Particle(x, 30, 10);
    particles.push(p);


    // insert a constraint to the previous particle, if it exists
    if(prevParticle){
      console.log(prevParticle)
      var options = {
        bodyA:  prevParticle.body,
        bodyB:  p.body,
        length: 60,
        stiffness: 1
      }
      var constraint = Constraint.create(options);
      World.add(world, constraint);
    }

    // set the previous particle to be this one
    prevParticle = p;

  }

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

  prevParticle = null;
  for (p of particles){
    p.show();

    if(prevParticle){
      line(p.body.position.x, p.body.position.y,
          prevParticle.body.position.x, prevParticle.body.position.y
          )
        prevParticle = p;
    }

  }

  for (b of boundaries){
    b.show();
  }





}
