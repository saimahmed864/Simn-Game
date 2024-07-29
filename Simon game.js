let gameseq=[]
let userseq=[]
let h2=document.querySelector("h2")
let btns=["red","green","yellow","pink",]

let level=0;
let started=false;
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game started")
    started=true
   }
   levelup()
})
function gameflash(btn){
    btn.classList.add("gameflash")
    setTimeout(function(){
        btn.classList.remove("gameflash")
    }, 250);
}
function levelup(){
    userseq=[]
    level++
    h2.innerText=`level ${level}`;
let randidx=Math.floor(Math.random()*3)
   let randcol=btns[randidx]
   let randbtn=document.querySelector(`.${randcol}`)
   gameflash(randbtn)
   
   gameseq.push(randcol)
   console.log(gameseq)
}
function checkAns(idx) {
    
    if (gameseq[idx]===userseq[idx]) {
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000 );
        }
    } else {
        h2.innerHTML=`Game Over! Your score was <b>${level}<b>.<br>Press any key to start game`
        reset();
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        }, 150);
    }
}
// function gameover() {
//     document.classList.add("bgred")
// }
function btnpress(){
    console.log("button was pressed")
    let btn=this
    gameflash(this)
    
    let btncol=btn.getAttribute("id")
    userseq.push(btncol)
    console.log(userseq)
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}