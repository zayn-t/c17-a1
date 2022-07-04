var box1, box2, box3
function setup() 
{
  createCanvas(400, 400); 

  box1 = new Box(100,50,40,40,2.5)
  box2 = new Box(150,100,20,25,1)
  box3 = new Box(200,150,30,30,2)
}

function draw() 
{
  background(220);
  box1.show()
  box1.move() 
  box2.show()
  box2.move()
  box3.show()
  box3.move()
}

