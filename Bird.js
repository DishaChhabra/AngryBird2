// extends means using baseClass we make Bird class
class Bird extends BaseClass{
  constructor(x,y){
    // updates all the things changes in constructor function
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    // updates all the things changes in display function
    super.display();
  }
}