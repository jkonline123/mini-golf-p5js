//John P. Kontolios "Mini Golf" March 22, 2019
//https://github.com/processing/p5.js/wiki/p5.js-overview
//https://creative-coding.decontextualize.com/making-games-with-p5-play/
//https://p5js.org/libraries/
//https://molleindustria.github.io/p5.play/docs/classes/Sprite.html
//and ALL Dan Shiffmans videos!

//I made a mini golf game and many components of this game came from the
//p5.play library. This ment I needed to read up on p5.play and what
//it had to offer

//if I dont click the canvas when I first run the program, everytime I press the 
//space bar for another ball the program restarts


//created global variables
let hole;
let club;
let ball; 
let img;
let img1;
let img2;
let score = 0;
let button;

//created objects
let pole = {
  x:370,
  y: 120,
  w: 10,
  h: 220
}

let grass = {
  x: 0,
  y: 325,
  w: 400,
  h: 80,
}
  
//created an object
let flag = {
 x: 369,
 y: 333,
 x1: 300,
 y1: 327,
 x2: 371,
 y2: 311
//  display: function() {
//     fill(255,0,0);
//     triangle(this.x,this.y,this.x1,this.y1,this.x2,this.y2);
// }
}

//preloading images to make sure there ready to go
function preload() {
  img = loadImage("golf/golfpic.jpg");
  img1 = loadImage("golf/gclub.png");
  img2 = loadImage("golf/woods.jpg");
}

//myp5.setup();tried to make a new sketch using a function
//and then trying to call it but it didnt work


function setup() {
  createCanvas(400, 400);
	image(img,0,0,windowWidth,windowHeight);//made the image the window size
  holeIn1 = new Group ();//I need to create an array told
  for (let i = 0; i < 11; i++) {//hold all the balls in the hole
  hole = createSprite(//this is how you create a control
    374,354,20,20);//or object to use and play with
  hole.shapeColor = color(0);//this is how you color it
  //hole.setVelocity(1,1);//wanted to have it moving side to side
  holeIn1.add(hole);//this keeps track of how many balls
  }
  club = createSprite(0, 0,20,200);
  club.shapeColor = color(128);
  //club.addAnimation(img1);//I tried to add a picture of a club
  //on the club object but it didnt let me
  ball = createSprite(80, 350, 15, 10);
  ball.shapeColor = color(255);
}
// function resetSketch() {//I tried to create a function
//   //menu();//resetSketch to restart game but it didnt work
//   image(img,0,0,windowWidth,windowHeight);
//   score = 0;
// }
function draw() {
  //cursor("golf/gclub.png", mouseX, mouseY);//attached
  //an image of a golf club to my cursor but it is too small
  //to use to play with and this is due to 32xpixelsby 32 pixels
  //restriction 
  image(img,0,0,windowWidth,windowHeight);
  fill(0,255,0);
  rect(grass.x,grass.y,grass.w,grass.h);
  fill(180);
  rect(pole.x,pole.y,pole.w,pole.h);
  fill(255,0,0);
  triangle(flag.x,flag.y,flag.x1,flag.y1,flag.x2,flag.y2);
  //image(img,0,0,windowWidth,windowHeight); the background  image didnt show here
  //flag.display
  club.velocity.x = (mouseX-club.position.x)*0.2;
  club.velocity.y = (mouseY-club.position.y)*0.2;
  ball.overlap(holeIn1, getHole);//this makes ball disapear
  club.displace(ball);//this makes club be able to move ball
	drawSprites();//this is how you call function draw for
  //console.log(mouseX,mouseY);//sprites in play
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("GOLF",0,0,width-20,height-292);//wrote the word golf
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if(holeIn1.length > 0) {//have an if else statement
    text(score, width/2, height/2);//if the amount of
   } else {//balls in hole is less than zero keep score
   image(img2,0,0,width,height);//any other time be ready
   text("you win!", width/2, height/2);//to have new image and say you win!
  button = createButton('reset');//tried to create button
  button.position(19, 19);//to reset game but it didnt work
  //button.mousePressed(resetSketch);
}
  function getHole(club, holeIn1) {//this function counts
    holeIn1.remove();//score as well as removes balls from
    ball.remove();//hole in conjuction with raising flag
    score += 10;//every point made
     //x += 2;
     flag.y -= 30;
     //x1+= 2;
    flag.y1-= 30;
    //x2 += 2;
    flag.y2 -= 30;
  }
 if (keyIsPressed === true){//this enables me to continue playing by getting more balls
  ball = createSprite(80,350,15,10);//by pressing any key
  ball.shapeColor = color(255);
   }
  }

//If I had more time I would have liked to get rid of the white
//spot, have the location of the hole move up and down inside the
//green, I would like to have changed the flag color everytime
//you make a shot in the whole, and I would have loved for the
//start menu and reset button to work. An finally figure out 
//why if I do not click and I press any key th   e program restarts

  

