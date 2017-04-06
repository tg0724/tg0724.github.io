//second task
function checkerboard(width,height){


var checkerboard = ""
for (j = 0; j < height; j++){
  if (j % 2){
  for (i = 0; i < width; i++){
    if (i % 2){
        checkerboard = checkerboard + "#"
      } else {
        checkerboard = checkerboard + " "
      }
    }
  } else {
  for (i = 0; i < width; i++){
    if (i % 2){
        checkerboard = checkerboard + " "
      } else {
        checkerboard = checkerboard + "#"
      }
    }

  }
    checkerboard = checkerboard + "\n"

}
console.log(checkerboard);
}

//third task
function triangle(height) {
	triangle = "";
	for (var row = height; row > 0; row--) {
    	for (var col = row; col > 0; col--) {
    		triangle = triangle + col;
    	}
    	triangle = triangle + "\n";
	}
	console.log(triangle);
}

triangle(5);

var x,y,chr;
for(x=1; x<=6; x++)
{
   for (y=1; y<x; y++)
     {
    chr=chr+("#");
      }
 console.log(chr);
 chr='';
}




//fourth task

var html = document.documentElement;

var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function(){
  console.log(checkerboard(5,5));
});

var html = document.documentElement;

var ButtonB = document.getElementById("bg-button");
ButtonB.addEventListener("click", function(){
  console.log(triangle);
});
