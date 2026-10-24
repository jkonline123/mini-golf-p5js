let button1;
var button2;
var button3;
var button4;
 
var choice = [];
var menuCounter = 1;
 
var color1;
var color2;
 
function setup() {
    createCanvas(600, 400);
    color1 = color(168, 44, 138);
    color2 = color(131, 155, 218);
    button1 = new Bubble(130, 150, color1);
    button2 = new Bubble(550, 150, color2);
 
    button3 = new Bubble(130, 150, color1);
    button4 = new Bubble(550, 150, color2);
 
 
}
 
function draw() {
    background(0);
    if (menuCounter == 1) {
        menu();
    } else  {
        menu3();
    }
}
 
 
function Bubble(x, y, col, str) {
    this.str = "START";
    this.x = x;
    this.y = y;
    this.col = col;
    //this.str = str;
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
 
    button1.display();
    //button2.display();
 
    textSize(25);
    fill(color1);
    //textAlign(RIGHT);
    //text("PLAY-", 70, 30);
    textAlign(CENTER);
    text("Rules-", 70, 50);
    textAlign(LEFT);
    textSize(30);
    text("Use the club and hit the ball into the hole ", 70, 80);
 }
 

 
function menu3() {
 
    button1.report(50, 50);
   
    
 
}
 
 
function mousePressed() {
 
    if (menuCounter == 1) {
 
        if (button1.hover(mouseX, mouseY)) {
            button1.clicked('Start');
        }
 

         }
    } 