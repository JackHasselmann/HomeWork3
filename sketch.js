var counter = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);
  counter = counter +1;
  console.log(counter);
  
  ellipse(counter, height/2, 10,10);
  ellipse(counter,height/4,20,20);
  ellipse(counter,height/2, 30,30);
  
  if(counter>=width){
    counter = 0;
  
  }

  }
