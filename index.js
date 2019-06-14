window.addEventListener("keydown",playsong);


function playsong(e){

    const a = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    const key =document.querySelector(`div[data-keycode="${e.keyCode}"]`)
    key.classList.add("press");

    if(!a) return;
    a.play();
    a.currentTime=0;
}

var keys = document.querySelectorAll('.sound');

keys.forEach( key => key.addEventListener("transitionend",removeTransition));

function removeTransition(e){

    e.target.classList.remove("press");

}





