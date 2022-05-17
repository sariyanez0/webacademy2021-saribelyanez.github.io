function hue(){
  document.getElementById("box").style.backgroundColor ="lavender";
}

function move(){
  document.getElementById("box").style.position = "static";
}

function shape(){
  document.getElementById("box").style.borderRadius = "500px";
}

function border(){
  document.getElementById("box").style.borderStyle = "dashed";
}

function size(){
  document.getElementById("box").style.width = "200px";
  document.getElementById("box").style.height = "200px";
} 

function reset(){
  document.getElementById("box").style.width = "400px";
  document.getElementById("box").style.height = "400px";
  document.getElementById("box").style.borderRadius = "0px";
  document.getElementById("box").style.position = "absolute left:450px";
  document.getElementById("box").style.backgroundColor = "lightCoral";
  document.getElementById("box").style.borderStyle = "solid";

}
