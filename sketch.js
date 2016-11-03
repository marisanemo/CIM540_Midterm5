wineColor = 0,1;
wineBody = 0,1,2;


var topBoundary = 20;
var midBoundary = 150;
var bottomBoundary = 350;

var buttonSize = 100;

var colorArea = "";
var bodyArea = "";
var wineArea = "";

var seafoodImg;

function setup() {
createCanvas(400,500);

wineColor0 = 80;
wineColor1 = 230;


wineBody0 = 20;
wineBody1 = 150;
wineBody2 = 280;

answerBox = 50;

answerWine = "";
answerFood = "";


seafoodImg = loadImage("assets/images.jpg")

}

function draw () {
  background("beige");

//winecolor buttons

  fill(247, 243, 150);
  rect(wineColor0, topBoundary, buttonSize, buttonSize);
  fill("black");
  textSize(18);
  text("white wine", wineColor0+10, topBoundary+50);
  
  
  fill(114, 47, 55);
  rect(wineColor1, topBoundary, buttonSize, buttonSize);
  fill("white");
  textSize(18);
  text("red wine", wineColor1+15, topBoundary+50);

//winebody buttons

  fill("white");
  rect(wineBody0, midBoundary, buttonSize, buttonSize);
  fill("black");
  textSize(18);
  text("light", wineBody0+30, midBoundary+50);
  text("bodied", wineBody0+20, midBoundary+70);
 
  
  fill("gray");
  rect(wineBody1, midBoundary, buttonSize, buttonSize);
  fill("white");
  textSize(18);
  text("medium", wineBody1+15, midBoundary+50);
  text("bodied", wineBody1+20, midBoundary+70);
  
  
  fill("black");
  rect(wineBody2, midBoundary, buttonSize, buttonSize);
  fill("white");
  textSize(18);
  text("full", wineBody2+30, midBoundary+50);
  text("bodied", wineBody2+20, midBoundary+70);

//response box
fill("white");
 strokeWeight(3);
rect(answerBox, bottomBoundary, 300, 100);

//color 
 if (mouseY > topBoundary && mouseY < topBoundary+100) {
 if (mouseX > wineColor0 && mouseX < wineColor0+100) {
      console.log("white");
    colorArea = "white";
 }
 }
 if (mouseY > topBoundary && mouseY < topBoundary+100) {
 if (mouseX > wineColor1 && mouseX < wineColor1+100) {
        console.log("red");
    colorArea = "red";
}
}
//body
if (mouseY > midBoundary && mouseY < midBoundary+100) {
if (mouseX > wineBody0 && mouseX < wineBody0+100) {
      console.log("light");
    bodyArea = "light";
}
}
if (mouseY > midBoundary && mouseY < midBoundary+100) {
if (mouseX > wineBody1 && mouseX < wineBody1+100) {
      console.log("medium");
    bodyArea = "medium";
}
}
if (mouseY > midBoundary && mouseY < midBoundary+100) {
if (mouseX > wineBody2 && mouseX < wineBody2+100) {
      console.log("full");
    bodyArea = "full";
}
}
if (mouseY > bottomBoundary && mouseY < bottomBoundary+100) {
if (mouseX > answerBox && mouseX < answerBox+100) {
      console.log("food");
    wineArea = "food";
}
}else{
  wineArea="";
}

//answers

fill(0, 102, 153);
textSize(35);
text(answerWine, 90, 410);


//fill(0, 102, 153);
//textSize(25);
//text(answerFood, 130, 600);
}

function mousePressed() {
   if((colorArea == "white") && (bodyArea == "light")){
    answerWine = "Pinot Grigio";
}
   if((colorArea == "white") && (bodyArea == "medium")){
    answerWine = "Savignon Blanc";
}  
  if((colorArea == "white") && (bodyArea == "full")){
    answerWine = "Chardonay";
}  
  if((colorArea == "red") && (bodyArea == "light")){
    answerWine = "Pinot Noir";
}
   if((colorArea == "red") && (bodyArea == "medium")){
    answerWine = "Merlot";
}
  if((colorArea == "red") && (bodyArea == "full")){
    answerWine = "Malbec";
}
}

function food (tempX, tempY, tempDiameter, tempImg) {
   // this.x = tempX;
   // this.y = tempY;
   // this.diameter = tempDiameter;
  //  this.img = tempImg;

    this.display = function(showHide) {
//food 
  if(text == "Pinot Grigio"){
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.diameter, this.diameter);
  }
}
}