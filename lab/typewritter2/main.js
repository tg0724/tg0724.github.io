
var container = document.getElementById('container');

document.getElementById("ready").style.display="none";

function myFunction() {
    var person = prompt("Hi, I am glad that you are here! I am your music teacher. Can I have your name please?", "Superman");

    if (person != null) {
        document.getElementById("dem").innerHTML =
        "Hello " + person + "! How are you today? Are you ready for your first music class? <br><br>If you are ready, just click on the button.";
        document.getElementById("ready").style.display="block";
    }
}


function showhide()
   {
         var div = document.getElementById("answer");
  if (div.style.display !== "none") {
      div.style.display = "none";
      document.getElementById("music").style.display="block";
  }
  else {
      div.style.display = "block";
  }
   }


var letters ={
    KeyA: {},
    KeyB: {},
    KeyC: {},
    KeyD: {},
    KeyE: {},
    KeyF: {},
    KeyG: {},
    KeyH: {},
    KeyI: {},
    KeyJ: {},
    KeyK: {},
    KeyL: {},
    KeyM: {},
    KeyN: {},
    KeyO: {},
    KeyP: {},
    KeyQ: {},
    KeyR: {},
    KeyS: {},
    KeyT: {},
    KeyU: {},
    KeyV: {},
    KeyW: {},
    KeyX: {},
    KeyY: {},
    KeyZ: {}
    // Key1: {}，
    // Key2: {}，
    // Key3: {}，
    // Key4: {}，
    // Key5: {}，
    // Key6: {}，
    // Key7: {}，
    // Key8: {}，
    // Key9: {}，
    // Key0: {}
};



var a = 0;
for (key in letters){
  a += 1;
  letters[key].sound = "sound/" + a + ".wav";
  console.log(letters[key].sound);
};

var audio = document.getElementById("audio");

document.addEventListener("keydown", function(event){

  if (event.keyCode >= 65 && event.keyCode <= 90){
      audio.src = letters[event.code].sound;
      audio.play();
      console.log(audio.src);

    } else if (event.keyCode == 32){
  var div = document.createElement('div');
  div.classList.add('space');
  container.appendChild(div);
} else if (event.keyCode == 8){
  container.removeChild(container.lastChild);
}
});

var tCtx = document.getElementById('textCanvas').getContext('2d'),
    imageElem = document.getElementById('image');

document.getElementById('text').addEventListener('keyup', function (){
    tCtx.canvas.width = tCtx.measureText(this.value).width,10,50;
    tCtx.fillText(this.value, 0, 10);
    tCtx.font = "30px vernada";
    imageElem.src = tCtx.canvas.toDataURL();
    console.log(imageElem.src);
}, false);
