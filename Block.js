class Block{
  constructor(x, y, width, height) {
   
    this.image = loadImage("images/block.png");
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
      
      // rect(pos.x,pos.y,this.width, this.height);

      if(this.body.speed<5){
        var angle = this.body.angle;
        var pos= this.body.position;
        
        push();
        // translate(pos.x,pos.y);
        // rotate(angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,30,40);
        pop();

      }else {
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility)
        image(this.image,this.body.position.x,this.body.position.y,30,40);
        pop();
      }
     
  }
countScore(){
  if(this.visibility<240&&this.visibility>0){
    Score=Score+0.5
  }
}
  
}