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
	for (var row = 0; row < height; row++) {
    	for (var col = 0; col <= row; col++) {
    		triangle = triangle + "#";
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
  chr = chr + "\n";


}
 console.log(chr);


function generatePyramid() {
    var totalNumberofRows = 5;
    var arr = new Array();
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {

            arr.push(j);
            console.log(j);
        }
        console.log("\n");
    }
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
