function Particle(x, y, r) {
  // this is a wrapper for the matter.js object

  var options = {
    friction: 0,
    restitution: 0.95
  }

  this.body = Bodies.circle(x, y, r, options);

  this.r = r;
  World.add(world, this.body);

  this.show = function() {

      var pos = this.body.position;
      var angle = this.body.angle;
      push()  ;

        translate(pos.x , pos.y);
        //rotate(angle);
        // console.log(255 * ((angle % 6.28) / 6.28 ));
        fill(255,0, 255 * ((Math.abs(angle) % Math.PI) / Math.PI ));
        ellipse(0,0,this.r * 2, this.r * 2);

      pop();

  }




}
