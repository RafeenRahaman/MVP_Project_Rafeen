let lives = 10;
let state = 1;
let tree;
let apple;
let basket;
let myXPos = 730;
let myYPos = 700;
let myspeed = 100;
let score = 0;
let applespeed = 25;
let randomX;
let appleY = 0;
let practice = false;
let difficulty = 0

randomX = Math.floor(Math.random() * 1300);
function preload() {
  tree = loadImage("TREE.png");
  apple = loadImage("APPLE.png");
  basket = loadImage("BASKET.png");
  win = loadImage("WIN.jpeg");
  lose = loadImage("LOSE.png")
}
function setup() {
  createCanvas(1460, 820);
}
function draw() {
  if (state == 1) {
    background(0, 213, 255);
    rectMode(CENTER);
    fill(155, 103, 0);
    rect(730, 770, 1460, 100);
    imageMode(CENTER);
    image(tree, 730, 410, 800, 800);
    image(apple, 730, 200, 150, 150);
    image(apple, 1000, 300, 150, 150);
    image(apple, 450, 300, 150, 150);
    fill(134, 0, 0);
    textSize(32);
    text("Start!", 690, 230);
    text("Difficulty", 940, 320);
    text("Options", 400, 320);
  }
  if (state == 2) {
    clear();
    background(0, 213, 255);
    rectMode(CENTER);
    fill(155, 103, 0);
    rect(730, 770, 1460, 100);
    imageMode(CENTER);
    image(tree, 730, 410, 800, 800);
    image(basket, myXPos, myYPos, 150, 150);
    if (keyIsDown(LEFT_ARROW)) {
      myXPos -= myspeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      myXPos += myspeed;
    }
    let myTop = myYPos - 75;
    let myLeft = myXPos - 75;
    let myRight = myXPos + 75;
    if (myXPos > 1460) {
      myXPos = 1310;
    }
    if (myXPos < 0) {
      myXPos = 150;
    }
    let Xspawn = randomX;
    image(apple, Xspawn, appleY, 150, 150);
    appleY += applespeed;
    if (appleY >= 830) {
      appleY = 0;
      randomX = Math.floor(Math.random() * 1300);
      lives -= 1
    }
    let appleBottom = appleY + 75;
    let appleRight = Xspawn + 75;
    let appleLeft = Xspawn - 75;
    if (myLeft > appleRight || myRight < appleLeft || myTop > appleBottom) {
    } else {
      score++;
      appleY = 0
      randomX = Math.floor(Math.random() * 1300);
    }
    fill(255);
    textSize(40);
    text("Score: " + score, 20, 30);
    text("Lives: " + lives, 200, 30)
    if (score == 20) {
        state = 5
    }
    if (lives == 0) {
        state = 6
    }
  }
  if (state == 3) {
    clear();
    background(0, 213, 255);
    rectMode(CENTER);
    fill(155, 103, 0);
    rect(730, 770, 1460, 100);
    imageMode(CENTER);
    image(tree, 730, 410, 800, 800);
    image(apple, 730, 200, 150, 150);
    image(apple, 1000, 300, 150, 150);
    image(apple, 450, 300, 150, 150);
    fill(134, 0, 0);
    textSize(32);
    text("Easy", 690, 230);
    text("Hard", 940, 320);
    text("Back", 400, 320);
  }
  if (state == 4) {
    clear();
    background(0, 213, 255);
    rectMode(CENTER);
    fill(155, 103, 0);
    rect(730, 770, 1460, 100);
    imageMode(CENTER);
    image(tree, 730, 410, 800, 800);
    image(apple, 730, 200, 150, 150);
    image(apple, 1000, 300, 150, 150);
    image(apple, 450, 600, 150, 150);
    fill(134, 0, 0);
    textSize(32);
    text("Practice \nMode \nOn/Off", 940, 280);
    text("Back", 400, 620);
  }
  if (state == 5) {
    clear();
    background(0, 213, 255);
    rectMode(CENTER);
    fill(155, 103, 0);
    rect(730, 770, 1460, 100);
    imageMode(CENTER);
    image(win, 730, 410, 800, 800);
  }
  if (state == 6) {
    clear();
    background(0, 213, 255);
    rectMode(CENTER);
    fill(155, 103, 0);
    rect(730, 770, 1460, 100);
    imageMode(CENTER);
    image(lose, 730, 410, 800, 800);
  }
  fill(255, 255, 255)
  textSize(32)
  
  if (practice == false) {
      text('Practice: Off', 1000, 50)
  }
  else {
      text('Practice: On', 1000, 50)
  }
  if (difficulty == 0) {
    text('Difficulty: Easy', 700, 50)
  }
  else 
  text('Difficulty: >:)', 700, 50)
  if (practice == true) {
    lives = 'Infinite'
  }
}
function mouseClicked() {
  if (state == 1) {
    if (mouseX >= 580 && mouseX <= 880 && mouseY >= 50 && mouseY <= 350) {
      state = 2;
    }
    if (mouseX >= 850 && mouseX <= 1150 && mouseY >= 50 && mouseY <= 350) {
      state = 3;
    }
    if (mouseX >= 300 && mouseX <= 600 && mouseY >= 150 && mouseY <= 450) {
      state = 4;
    }
  }
  if (state == 3) {
    if (mouseX >= 300 && mouseX <= 600 && mouseY >= 150 && mouseY <= 450) {
      state = 1;
    }
    if (mouseX >= 580 && mouseX <= 880 && mouseY >= 50 && mouseY <= 350) {
      myspeed = 100;
      applespeed = 25;
      difficulty = 0
    }
    if (mouseX >= 850 && mouseX <= 1150 && mouseY >= 50 && mouseY <= 350) {
      myspeed = 50;
      applespeed = 50;
      difficulty = 1
    }
  }
  if (state == 4) {
    if (mouseX >= 850 && mouseX <= 1150 && mouseY >= 50 && mouseY <= 350) {
        if (practice == true) {
            practice = false
        }
        else {
            practice = true
        }
    }
    if (mouseX >= 300 && mouseX <= 600 && mouseY >= 450 && mouseY <= 750) {
        state = 1
    }
  }
}
