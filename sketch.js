var dog, happyDog;
var database;
var foodStock, foodS;

function preload(){
	dogImg= loadImage("Dog.png");
  happyDog= loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(300, 350);
  dog.addImage(dogImg);
  dog.scale= 0.4;

  database= firebase.database();

  foodStock=database.ref('food');
foodStock.on("value", readStock);

feed=createButton("Dog Food");
feed.position(100, 350);
feed.mousePressed();
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStocks(foodS);
  dog.addImage(happyDog);
}

  drawSprites();

}

function readStock(data){
  foodS= data.val();
  console.log(foodS);
}
function writeStocks(x){
  var x=foodS-1;
  database.ref('/').update({
  food:x
})

}

