//I tried to create a constructor to create a new sketch
//to run this in the beginning of my program but I was having
//such difficulties.

let sketch = function(p) {//created a function called sketch
  


p.button1;
p.button2;
p.button3;
p.button4;
 
p.choice = [];
p.menuCounter = 1;
 
p.color1;
p.color2;
 
p.setup = function() {//creating canvas and buttons with constrcutor
    p.createCanvas(600, 400);
    p.color1 = color(168, 44, 138);
    p.color2 = color(131, 155, 218);
    p.button1 = new Bubble(130, 150, p.color1);
    p.button2 = new Bubble(550, 150, p.color2);
 
    p.button3 = new Bubble(130, 150, p.color1);
    p.button4 = new Bubble(550, 150, p.color2);
 
 
}
p.draw = function() { //created functions for the menu
    p.background(0);
    if(menuCounter == 1) {
        menu();
    } else  {
        menu3();
    }
}
 
 
function Bubble(x, y,col,str) {//gave function bubble
    this.str = "START";//arguments
    this.x = x;
    this.y = y;
    this.col = col;
    this.str = str;
    this.r = 48;
 
    this.display = function () {
        fill(this.col);
        ellipse(this.x, this.y, this.r, this.r);
        text("" + this.str, this.x, this.y + this.r);//the button
    }
 
    this.hover = function (xx, yy) {
        return (dist(xx, yy, this.x, this.y) < this.r);
    }
 
    this.report = function (xx, yy) {
        text('val=' + this.str, xx, yy);
    }
 
    this.clicked = function (pick) {
        if (pick === 'O') {
            this.str = 'O';
        } else if (pick === 'X') {
            this.str = 'X';
        } else {
            this.str = 'ELSE->' + pick;
        }
 
        console.log(this.str);
        if (this.hover(mouseX, mouseY)) {
            this.col = color(227, 70, 27);
            menuCounter = menuCounter + 1;
        }
    }
}
 
function menu() {
 
    p.button1.display();
    //button2.display();
 
    textSize(25);
    fill(p.color1);
    //textAlign(RIGHT);
    //text("PLAY-", 70, 30);
    textAlign(CENTER);
    text("Rules-", 70, 50);
    textAlign(LEFT);
    textSize(30);
    text("Use the club and hit the ball into the hole ", 70, 80);
 }
 

 
function menu3() {
 
    p.button1.report(50, 50);
   
    
 
}
 
 
function mousePressed() {
 
    if (menuCounter == 1) {
 
        if (p.button1.hover(mouseX, mouseY)) {
            p.button1.clicked('Start');
        }
 }
    }
  var myp5 = new p5(sketch);