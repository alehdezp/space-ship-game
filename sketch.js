var nave;
var ancho = 480;
var alto = 640;

function setup() {

  nave = new SpaceShip();


  createCanvas(ancho, alto);
  nave.setSpaceShip(ancho, alto);
}

function draw() {

  background(10);
  nave.show();
  nave.update();

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    nave.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    nave.moveRight(ancho);
  }
}

function keyReleased() {
  if (keyIsPressed === false)
    nave.stop();
}
