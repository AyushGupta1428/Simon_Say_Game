let gameSeq=[];
let userSeq=[];
let score = [];
let btns = ["red","yellow","green","purple"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",() =>{
    if(start == false){
        console.log("Game Started");
        start = true;
        levelUp();
    }
});
function GameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() =>{
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let Index = Math.floor(Math.random()*4);
    let Rndm = btns[Index];
    let button = document.querySelector(`.${Rndm}`);
    gameSeq.push(Rndm);
    GameFlash(button);
}
function check(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over!! <b>Your Score Was ${level}</b> <br>Please Press Any Key To Start Again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() =>{
            document.querySelector("body").style.backgroundColor="#4f5359";
        })
        Reset();
    }
}

function userFlash(btn){
    console.log("this Button Was Pressed");
    btn.classList.add("touch");
    setTimeout(() =>{
        btn.classList.remove("touch");
    },50);
}
function BtnPress(){
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    check(userSeq.length-1);
    
}
let allBtn = document.querySelectorAll(".box");
    for(btn of allBtn){
        btn.addEventListener("click",BtnPress);
    }

function Reset(){
    gameSeq=[];
    userSeq=[];
    level = 0;
    start = false;
}