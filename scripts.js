const imgContainer=document.querySelector('.img-container');
const userpicked= document.querySelector("h3");
const pcPicked=document.querySelectorAll("h3")[1];
const images =imgContainer.querySelectorAll('img');
const startButton = document.querySelector("button");
let totalWins=0;


imgContainer.addEventListener("click", e=>{
    let option =e.target;
    let dupli = option.cloneNode(true)
    let imgPicks = userpicked.childNodes;

    if(option.className=="option"&& imgPicks.length<=2){
    userpicked.appendChild(dupli);
    userpicked.replaceChild(dupli,imgPicks[1])
}
})

startButton.addEventListener("click", e=>{

if(userpicked.childNodes.length>1){
let scoreDisplay = document.querySelector("h2");
let ptag = document.createElement("P");
let pcDisplay= document.querySelector(".computer");
let randomNum = (Math.floor(Math.random()*3));
let pcPick =images[randomNum].cloneNode(true);
let userPick =userpicked.childNodes[1];
let declaration=checkWin(userPick.id ,pcPick.id);


pcDisplay.appendChild(pcPick);
pcDisplay.replaceChild(pcPick, pcDisplay.childNodes[1]);
ptag.innerText=declaration;

scoreDisplay.innerHTML=`YOUR WINS: ${totalWins}`
scoreDisplay.appendChild(ptag);
scoreDisplay.replaceChild(ptag, scoreDisplay.childNodes[1])
winner(declaration)


}
else{
    alert('please pick a option')
}
})

function checkWin(user,pc){

    if (user === pc){
        
   return "its a tie!";
        
    }
   
    if(user==="rock"){
       if( pc==="paper"){return "You Lose"}
        
       else if(pc ==="scissors"){
        totalWins++ 
        return "You Win"; 
       };
   }
   
   if(user==="paper"){
       if( pc==="scissors"){return "You Lose"}
   
       else if(pc ==="rock"){
        totalWins++   
        return "You Win";
        };
   }
   
   if(user==='scissors'){
     if(pc ==="rock"){return "You Lose"}
   
       else if( pc==="paper"){
        totalWins++   
        return "You Win";
        }}
}

function winner(answer){

    if(answer =="You Win"){
        userpicked.style.borderColor="blue";
        pcPicked.style.borderColor="black";        
     }
      else if(answer =="You Lose"){
        userpicked.style.borderColor="black";
        pcPicked.style.borderColor="blue";
      }
    else {
        userpicked.style.borderColor="black";
        pcPicked.style.borderColor="black";        
  }
}