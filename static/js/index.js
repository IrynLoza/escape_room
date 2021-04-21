/****KEYPAD****/
function keypadMouseOver() {
    document.getElementById('keypad').style.borderColor = 'orchid';
}

function keypadMouseOut() {
    document.getElementById('keypad').style.borderColor = 'white'
}

function zoomKeypad() { 
   if (document.getElementById('hidden-keypad').style.opacity == 0) {
    document.getElementById('hidden-keypad').style.opacity = 10;
    document.getElementById('hidden-keypad').style.width = '700px';
    document.getElementById('hidden-keypad').style.height = '500px';
    document.getElementById('keypad-image').style.width = '300px';
    document.getElementById('keypad-image').style.height = '380px';
   } else {
    document.getElementById('hidden-keypad').style.opacity = 0;
    document.getElementById('hidden-keypad').style.width = '70px';
    document.getElementById('hidden-keypad').style.height = '50px';
    document.getElementById('keypad-image').style.width = '30px';
    document.getElementById('keypad-image').style.height = '38px';
   }

   
}


// #hidden-keypad {
//     width: 70px;
//     height: 50px;
//     border: 2px solid white;
//     position: absolute;
//     bottom: 5%;
//     left: 15%;
//     opacity: 0;
//     background-color: #051217;
//     background-image: radial-gradient(circle, #071e26, #051217);
// }
// .active-keypad {
//     width: 300px;
//     height: 380px;
//     border: 1px solid white;
//     position: absolute;
//     top: 19%;
//     left: 20%;

/****LIGHT****/
function onOffLight() {

    if(document.getElementById('light-top').style.borderBottomColor === 'white') {
        // document.getElementById('mirror').style.borderColor = 'orchid';
        // document.getElementById('picture').style.borderColor = 'orchid';
        // document.getElementById('keypad').style.borderColor = 'orchid';
        document.getElementById('light-top').style.borderBottomColor = 'orchid';
        document.getElementById('light-bottom').style.borderTopColor = 'orchid';
        document.getElementById('wall-note').style.color = 'orchid';
        document.getElementById('wall-note').style.opacity = '1';
        document.getElementById('fish').src="static/images/fish_get_up.png"; 
        // document.getElementById('pillow').style.borderColor = 'orchid';
        }else{
            document.getElementById('light-top').style.borderBottomColor = 'white';
            document.getElementById('light-bottom').style.borderTopColor = 'white';
            // document.getElementById('mirror').style.borderColor = 'white';
            // document.getElementById('picture').style.borderColor = 'white';
            // document.getElementById('keypad').style.borderColor = 'white';
            // document.getElementById('wall-note').style.color = 'black';
            document.getElementById('wall-note').style.opacity = '0';
            document.getElementById('fish').src="static/images/fish_sleep.png"; 
            // document.getElementById('pillow').style.borderColor = 'white';
        }
      
}

function lightMouseOver() {
    document.getElementById('on-off-light-rope').style.background = 'orchid';
}

function lightMouseOut() {
    document.getElementById('on-off-light-rope').style.background = 'white';
}

/****MIRROR****/
function mirrorMouseOver() {
    document.getElementById('mirror').style.borderColor = 'orchid';
}

function mirrorMouseOut() {
    document.getElementById('mirror').style.borderColor = 'white';
}

// function zoomMirror() { 
//     if (document.getElementById('mirror').className != 'zoom-mirror') {
//         document.getElementById('mirror').className = 'zoom-mirror';
//     } else {
//         document.getElementById('mirror').className = 'mirror';
//     }
    
// }


/****PICTURE****/
function pictureMouseOver() {
    document.getElementById('picture').style.borderColor = 'orchid';
}

function pictureMouseOut() {
    document.getElementById('picture').style.borderColor = 'white';
    
}

function movePicture() {
    if (document.getElementById('picture').className == 'picture') {
        document.getElementById('picture').className = 'picture-offset'
        document.getElementById('picture-note').style.color = 'orchid'
    } else {
        document.getElementById('picture').className = 'picture'
        document.getElementById('picture-note').style.color = 'white'
    }
}

/****SOFA****/
function pillowMouseOver() {
    document.getElementById('pillow').style.borderColor = 'orchid';
}

function pillowMouseOut() {
    document.getElementById('pillow').style.borderColor = 'white';
}

function movePillow() {
    if (document.getElementById('pillow').className == 'pillow') {
        document.getElementById('pillow').className = 'pillow-offset'
        document.getElementById('sofa-note').style.color = 'orchid'
    } else {
        document.getElementById('pillow').className = 'pillow'
        document.getElementById('sofa-note').style.color = 'white'
    }
}
