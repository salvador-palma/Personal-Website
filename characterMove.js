
var eyes = document.getElementById("eyes");

function showCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    let text = "X coords: " + x + ", Y coords: " + y;
    var posx = x * 15 / window.innerWidth;
    var posy = y * 15 / window.innerHeight;
  
    var posxx = Math.min(Math.max(10.32, posx), 14.2);
    var posyy = Math.min(Math.max(4.02, posy),6);
    eyes.style.left = posxx + "%";
    eyes.style.top = posyy + "%";
    
}



eyes.style.transform = "translate(-"+x+",-"+y+")";
