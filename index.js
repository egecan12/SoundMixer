let action = true; //this is to understand thee button has been preesed or not

window.addEventListener("keypress", playsong);

// there is a bug.whenever you chage the button the first hit is always null
window.addEventListener('keyup', function playsong2(e) {

    let a, key;

    switch (e.keyCode) {
        case 81:
            a = document.querySelector(`audio[data-key="113"]`)
            key = document.querySelector(`div[data-keycode="113"]`);
            break;
        case 87:
            a = document.querySelector(`audio[data-key="119"]`);
            key = document.querySelector(`div[data-keycode="119"]`);
            
            break;
        case 69:
            a = document.querySelector(`audio[data-key="101"]`);
            key = document.querySelector(`div[data-keycode="101"]`);
            break;
        case 65:
            a = document.querySelector(`audio[data-key="97"]`);
            key = document.querySelector(`div[data-keycode="97"]`);
            break;
        case 83:
            a = document.querySelector(`audio[data-key="115"]`);
            key = document.querySelector(`div[data-keycode="115"]`);
            break;
        case 68:
            a = document.querySelector(`audio[data-key="100"]`);
            key = document.querySelector(`div[data-keycode="100"]`);
            break;
        case 90:
            a = document.querySelector(`audio[data-key="122"]`);
            key = document.querySelector(`div[data-keycode="122"]`);
            break;
        case 88:
            a = document.querySelector(`audio[data-key="120"]`);
            key = document.querySelector(`div[data-keycode="120"]`);
            break;
        case 67:
            a = document.querySelector(`audio[data-key="99"]`);
            key = document.querySelector(`div[data-keycode="99"]`);
            break;
        default:
            a = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            key = document.querySelector(`div[data-keycode="${e.keyCode}"]`);
            
            break;
    }
    
    key.classList.remove("press");

    if (!a) return;
    a.pause();
    a.currentTime = 0;


});


function playsong(e) {

    const a = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`div[data-keycode="${e.keyCode}"]`);
    console.error(e.keyCode);
    key.classList.add("press");

    if (!a) return;
    a.play();
    console.warn(e.keyCode);



}




var keys = document.querySelectorAll('.sound');

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {

    e.target.classList.remove("press");

}