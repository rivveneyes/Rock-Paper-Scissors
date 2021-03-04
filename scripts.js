const imgContainer=document.querySelector('.img-container');
const userpicked= document.querySelector("h3");




//clone Node insert or replace in childNoder OF userpicked
imgContainer.addEventListener("click", e=>{
    let option =e.target;
    let dupli = option.cloneNode(true)
    let imgPicks = userpicked.childNodes;
    
    if(option.className=="option"&& imgPicks.length<=1){
    userpicked.appendChild(dupli);
    return
}
if( option.className=="option"&&imgPicks.length>=2){
    userpicked.replaceChild(dupli,imgPicks[1])
}})

