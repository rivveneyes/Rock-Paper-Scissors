const imgContainer=document.querySelector('.img-container');
const userpicked= document.querySelector("p");




//right now im pulling images from the actaull site and appending them to the p tag 
imgContainer.addEventListener("click", e=>{
    let option =e.target;
    if(e.target.className=="option"){
        console.log("hit")
    userpicked.appendChild(e.target)
    }
})

