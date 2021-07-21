class Polygon{
    constructor(){
        this.polygon = Bodies.circle(50,200,20);
        World.add(world,this.polygon);
        this.image = loadImage("images/polygon.png");
    }
    display(){
        imageMode(CENTER)
  image(this.image ,this.polygon.position.x,this.polygon.position.y,40,40);

    }
}