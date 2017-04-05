var html = document.documentElement;

var myDebt = 0;

var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(){
  myDebt += 100;
  console.log("My debt = $" + myDebt);
});

var bgButton = document.getElementById("bg-button");


bgButton.addEventListener("click", function(){
  if (html.style.backgroundColor != "lightpink"){
    html.style.backgroundColor = "lightpink";
  } else{
    html.style.backgroundColor = "white";
  }
});

var simpsonButton = document.getElementById("simpson-button");
// var simpsonWrapper = document.getElementById("simpson-wrapper")


var simpson = [];
simpson[0] = "assets/media/fake_bart.png";
simpson[1] = "assets/media/krusty.gif";
simpson[2] = "assets/media/milhouse.gif";
simpson[3] = "assets/media/prince_lisa.png";


var simpsonWrapper = document.getElementById("simpson-wrapper")

simpsonButton.addEventListener("click", function(){
  var img = document.createElement("img");
  img.src = simpson[Math.floor(Math.random() * 4)];
  simpsonWrapper.appendChild(img);
  event.stopPropagation();
});

html.addEventListener("click", function(event){
  console.log(event.clientX + "," + event.clientY);

  var sticker = document.createElement("div");
  sticker.classList.add("sticker");
  html.appendChild(sticker);
  sticker.style.left = (event.clientX - 10)  + "px";
  sticker.style.top = (event.clientY - 10) + "px";
});
