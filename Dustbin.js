class dustbin {
    constructor(x, y, width, height, options){
      options = {
        isStatic: true
    }
 
    this.Body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
}
display(){
    var pos = this.body.posistion;
    rectMODE(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
}