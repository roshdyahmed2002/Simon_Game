var level=1;
var anyButtonPressed=false;
var colorArr = [];
var colorIndex=0;
var title=document.querySelector(".title");
var levelP=document.querySelector(".levelP");
var audio = new Audio();



var buttons = document.querySelectorAll(".button");
// Initial event listeners for starting the game
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', startGame);
}
// Function to play the audio
function playAudio(audioUrl) {
    audio.src = audioUrl; // Set the source of the audio file
    audio.play();
}
function startGame() {
    console.log("RAND AGAINNNN");
    // Remove initial event listeners after first click

    if(anyButtonPressed==false){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener('click', startGame);
    }
    console.log("ONE TIME")
    anyButtonPressed=true;
    }
    console.log("level: "+level)
    // Start the game
    title.innerHTML="<h1 class='title'>GAME STARTED</h1>"

    rand();
}




function rand(){
        //green=1 red=2 yellow=3 blue=4
//var colorArr = [];
colorArr = [];
for(var i=0;i<level;i++){
    var rand=(Math.floor(Math.random()*4))+1;
    colorArr.push(rand);
}
console.log(colorArr)

//var greenbutton;
for(var i=0;i<colorArr.length;i++){

    var delay = 1000 * i*2;

    if(colorArr[i]===1){
        setTimeout(function(){
            var greenbutton= document.querySelector(".greenbtn")
          //  playAudio("sounds/green.mp3")
            greenbutton.classList.add("lightgreen")
            setTimeout(
                function(){
                  greenbutton.classList.remove("lightgreen")
                },1000)
        }  
       ,delay)
    
    }
    if(colorArr[i]===2){
        setTimeout(function(){
            var redbutton= document.querySelector(".redbtn")
          //  playAudio("sounds/red.mp3")
            redbutton.classList.add("lightred")
            setTimeout(
                function(){
                  redbutton.classList.remove("lightred")
                },1000) 
        },delay)
 
    }
    if(colorArr[i]===3){
        setTimeout(function(){
            var yellowbutton= document.querySelector(".yellowbtn")
        //    playAudio("sounds/yellow.mp3")
            yellowbutton.classList.add("lightyellow")
            setTimeout(
                function(){
                  yellowbutton.classList.remove("lightyellow")
                },1000)
        },delay)

    }
    if(colorArr[i]===4){
        setTimeout(function(){
            var bluebutton= document.querySelector(".bluebtn")
       //     playAudio("sounds/blue.mp3")
            bluebutton.classList.add("lightblue")
            setTimeout(
                function(){
                  bluebutton.classList.remove("lightblue")
                },1000)
        },delay)

    }
}


//var colorIndex=0;
colorIndex=0;
console.log("INDEXX AHOO: "+colorIndex)
var greenbutton= document.querySelector(".greenbtn");
greenbutton.addEventListener('click',greenFunc)

var redbutton= document.querySelector(".redbtn");
redbutton.addEventListener('click',redFunc)

var yellowbutton= document.querySelector(".yellowbtn");
yellowbutton.addEventListener('click',yellowFunc)

var bluebutton= document.querySelector(".bluebtn");
bluebutton.addEventListener('click',blueFunc)
}



function greenFunc(){
    playAudio("sounds/green.mp3")
    console.log("CURRENT COLOR: "+colorArr[colorIndex]+"currentINDEX: "+colorIndex)
    if(1===colorArr[colorIndex]){
        colorIndex++;
        console.log("YOU WON")
        if(colorIndex===colorArr.length){
            console.log("TRUEEEEEEEE")
            level++;
            levelP.textContent="Level: "+level;
            console.log("colorIndex: "+colorIndex)
            document.querySelector(".greenbtn").removeEventListener('click', greenFunc);
           // rand();
           setTimeout(rand(),5000)

        }
    }
    else{
        console.log("YOU LOST")
        playAudio("sounds/wrong.mp3")

        //title.textContent="GAME OVER, YOU LOST /n PRESS ANY BUTTON TO RESTART"
        title.innerHTML="<h1 class='title'>GAME OVER, YOU LOST <br> PRESS ANY BUTTON TO RESTART</h1>"
        level=1;
        document.querySelector(".greenbtn").removeEventListener('click', greenFunc);
        document.querySelector(".redbtn").removeEventListener('click', redFunc);
        document.querySelector(".yellowbtn").removeEventListener('click', yellowFunc);
        document.querySelector(".bluebtn").removeEventListener('click', blueFunc);

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', startGame);
        }
        anyButtonPressed=false;
        levelP.textContent="Level: "+level;
     }

}


function redFunc(){
    playAudio("sounds/red.mp3")

    console.log("CURRENT COLOR: "+colorArr[colorIndex]+"currentINDEX: "+colorIndex)
    if(2===colorArr[colorIndex]){
        colorIndex++;
        console.log("YOU WON")
        if(colorIndex===colorArr.length){
            console.log("TRUEEEEEEEE")
            level++;
            levelP.textContent="Level: "+level;
            console.log("colorIndex: "+colorIndex)
            document.querySelector(".redbtn").removeEventListener('click', redFunc);
            setTimeout(rand(),5000)
          //  rand();
        }
    }
    else{
        console.log("YOU LOST")
        playAudio("sounds/wrong.mp3")

       // title.textContent="GAME OVER, YOU LOST /n PRESS ANY BUTTON TO RESTART"
       title.innerHTML="<h1 class='title'>GAME OVER, YOU LOST <br> PRESS ANY BUTTON TO RESTART</h1>"

        level=1;
        document.querySelector(".greenbtn").removeEventListener('click', greenFunc);
        document.querySelector(".redbtn").removeEventListener('click', redFunc);
        document.querySelector(".yellowbtn").removeEventListener('click', yellowFunc);
        document.querySelector(".bluebtn").removeEventListener('click', blueFunc);

        
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', startGame);
        }
        anyButtonPressed=false;
        levelP.textContent="Level: "+level;

    }

}


function yellowFunc(){
    playAudio("sounds/yellow.mp3")

    console.log("CURRENT COLOR: "+colorArr[colorIndex]+"currentINDEX: "+colorIndex)
    if(3===colorArr[colorIndex]){
        colorIndex++;
        console.log("YOU WON")
        if(colorIndex===colorArr.length){
            console.log("TRUEEEEEEEE")
            level++;
            levelP.textContent="Level: "+level;
            console.log("colorIndex: "+colorIndex)
            document.querySelector(".yellowbtn").removeEventListener('click', yellowFunc);
            setTimeout(rand(),5000)
            //rand();
        }
    }
    else{
        console.log("YOU LOST")
        playAudio("sounds/wrong.mp3")

        //title.textContent="GAME OVER, YOU LOST /n PRESS ANY BUTTON TO RESTART"
        title.innerHTML="<h1 class='title'>GAME OVER, YOU LOST <br> PRESS ANY BUTTON TO RESTART</h1>"
        level=1;
        document.querySelector(".greenbtn").removeEventListener('click', greenFunc);
        document.querySelector(".redbtn").removeEventListener('click', redFunc);
        document.querySelector(".yellowbtn").removeEventListener('click', yellowFunc);
        document.querySelector(".bluebtn").removeEventListener('click', blueFunc);

        
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', startGame);
        }
        anyButtonPressed=false;
        levelP.textContent="Level: "+level;

    }

}

function blueFunc(){
    playAudio("sounds/blue.mp3")

    console.log("CURRENT COLOR: "+colorArr[colorIndex]+"currentINDEX: "+colorIndex)
    if(4===colorArr[colorIndex]){
        colorIndex++;
        console.log("YOU WON")
        if(colorIndex===colorArr.length){
            console.log("TRUEEEEEEEE")
            level++;
            levelP.textContent="Level: "+level;
            console.log("colorIndex: "+colorIndex)
            document.querySelector(".bluebtn").removeEventListener('click', blueFunc);
            setTimeout(rand(),5000)
            //rand();
        }
    }
    else{
        console.log("YOU LOST")
        playAudio("sounds/wrong.mp3")

        //title.textContent="GAME OVER, YOU LOST /n PRESS ANY BUTTON TO RESTART"
        title.innerHTML="<h1 class='title'>GAME OVER, YOU LOST <br> PRESS ANY BUTTON TO RESTART</h1>"

        level=1;
        document.querySelector(".greenbtn").removeEventListener('click', greenFunc);
        document.querySelector(".redbtn").removeEventListener('click', redFunc);
        document.querySelector(".yellowbtn").removeEventListener('click', yellowFunc);
        document.querySelector(".bluebtn").removeEventListener('click', blueFunc);

        
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', startGame);
        }
        anyButtonPressed=false;
        levelP.textContent="Level: "+level;
    }

}

