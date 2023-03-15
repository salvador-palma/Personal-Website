
var eyes = document.getElementById("eyes");

function showCoords(event) {
    var posx = event.clientX * 15 / window.innerWidth;
    var posy = event.clientY * 15 / window.innerHeight;
  
    var posxx = Math.min(Math.max(10.32, posx), 14.2);
    var posyy = Math.min(Math.max(4.02, posy),6);
    eyes.style.left = posxx + "%";
    eyes.style.top = posyy + "%";
    
}



eyes.style.transform = "translate(-"+x+",-"+y+")";
