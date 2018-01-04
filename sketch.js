let ball;
let brick;
let fontCN; 
let fontJP;
let fontKR; 
let fontWin; 

function preload(){
	fontJP = loadFont('A-OTF-ShinGoPr5-Regular.otf');
	fontCN = loadFont('Arial Unicode.ttf');
	fontKR = loadFont('AppleGothic.ttf');
	fontWin = loadFont('KozMinPr6N-Medium.otf');
}

function setup() {
	createCanvas(1200, 900);
	ball = new Ball();
	paddle = new Paddle();
	brick = new Bricks();
}	

function draw() {
	background(255);

	ball.display();
	ball.update();
	ball.checkEdge();
  	
  	paddle.display();
  	paddle.update();
  	paddle.repelBall();
  	paddle.checkEdge();
 
  	brick.display();
	strokeWeight(30);
	stroke(235,0,75);
	noFill(0);
	rect(0,0,1200,900);

	if (brick.you) {
		noStroke();
		fill(21);
		textFont(fontWin);
		textSize(50);
		text('You Win!!', 450,320);
		text('本年もどうぞよろしくお願い致します。', 150,395);
		textSize(30);
		text('by 品田祐介', 480,450);	
	}
}

function keyPressed(){
	if(key === 'a' || key ==='A'){
		paddle.isMovingLeft = true;
	} else if (key === 'd' || key ==='D'){
		paddle.isMovingRight = true;
	}
}

function keyReleased(){
	paddle.isMovingLeft = false;
	paddle.isMovingRight = false;
}



