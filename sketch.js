var mySong;
var myImg;
var analyzer;

function preload() {
  mySong = loadSound("./assets/songformyself.mp3");
  myImg = loadImage("./assets/giulio.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
  mySong.loop();
  //frameRate(20);
}

function draw() {
  if(mySong.isPlaying() === true) {
    background(230);
    image(myImg,width/2-height/7*2,height/7,height/7*4,height/7*4);
    
    var vol = analyzer.getLevel();
    noStroke();
    fill(0);
    ellipse(random(0,width),random(0,height),vol*300);
    
    angleMode(DEGREES);
    noFill();
    stroke(0);
    arc(width/2,height/7*6,width,vol*300,180,360);
  }
  
  if(mouseX>=width/2-height/7*2 && mouseX<=width/2+height/7*2 && mouseY>=height/7 && mouseY<=height/7+height/7*4) {
    tint(255, 60);
    textFont('Rock Salt');
    textAlign(CENTER);
    textSize(height/50);
    fill(0);
    text("Artist: The Sleeping Tree",width/2,height/14*5);
    text("Title: The Song For Myself",width/2,height/14*6);
    text("Album: Leaves and Roots, 2008",width/2,height/14*7);
  } else {
    tint(255,255);
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}