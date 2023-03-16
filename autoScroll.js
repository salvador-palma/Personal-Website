const scroller = document.getElementById("project-scroller");

const w = scroller.scrollWidth;
var state = 0;
var saveState=0;
var speed = true;
var prev_pos=scroller.scrollLeft-1;

window.addEventListener('load', () => {
    self.setInterval(() => {
        if(state == 0 && speed){
            if (scroller.scrollLeft != prev_pos) {
                prev_pos = scroller.scrollLeft;
                scroller.scrollTo(scroller.scrollLeft + 1, 0);
            }else{ state=1;}
        }else if (speed){
            if (scroller.scrollLeft != 0) {
                prev_pos = scroller.scrollLeft;
                scroller.scrollTo(scroller.scrollLeft - 1, 0);
            }else{ 
                prev_pos=-1;state=0;
            }
        }
    }, 25);
  });

const projects = document.getElementsByClassName("project-container");
for (i in projects){
    projects[i].addEventListener("mouseover", function(){   
        speed = false;
        saveState=state;
    });
    projects[i].addEventListener("mouseout", function(){
        speed = true;
        state=saveState;
    });
}