let gameSequence=[];
let userSequence=[];

let gameStarted=false;
let level=0;

let buttons=["firstclr","secondclr","thirdclr","fourthclr"];

document.addEventListener("keypress",function(){
    if(gameStarted==false){
        gameStarted=true;
        console.log("Game Started");
        levelUp();
    }
});


let h2=document.querySelector("h2");
function levelUp(){
    userSequence=[]; 
    level++;
    h2.innerText=`Level ${level}`;
    
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=buttons[randomIndex];
    let randomButton=document.querySelector( `.${randomColor}`);
    flashButton(randomButton);
    gameSequence.push(randomColor);
    // console.log(gameSequence);
}

function flashButton(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
};

// function userflashButton(btn){
//     btn.classList.add("userflash");
//     setTimeout(function(){
//         btn.classList.remove("userflash");
//     },250);
//     };

function checkAns(index){
    
    if(gameSequence[index]==userSequence[index]){
        if(gameSequence.length==userSequence.length){
           setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over!yourscore was<b>${level}</b> <br>Pess any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";  
        },150);
        reset();
    }
}

function buttonPressed(){
    // console.log(this);
    let buttonpresssednow=this;
    flashButton(buttonpresssednow);
    userColor=buttonpresssednow.getAttribute("id");
    userSequence.push(userColor);
    // console.log(userSequence);
    checkAns(userSequence.length-1);

}

let btns=document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",buttonPressed);
}

function reset(){
    gameStarted=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}

