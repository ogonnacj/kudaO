const bar = document.querySelector(".nav_bar");
bar.addEventListener("click",navHandler)

function navHandler(e){
  e.preventDefault();
  const nav = document.querySelector(".list");
  const displayProperty = nav.style.display;
  if((nav.style.display == "") || (nav.style.display.toLowerCase() == "none")){
    nav.style.display = "block";
    nav.style.backgroundColor="white";
  }else{
    nav.style.display = "none";
  }

}


const icon =document.querySelector('.icon');
icon.addEventListener("click",drop_down);
const drop =document.querySelector(".show")


function drop_down(e){
  e.preventDefault();
  
    if((drop.style.display == "") || (drop.style.display.toLowerCase() == "none")){
      drop.style.display = "block";
      drop.style.backgroundColor="white";
    }else{
      drop.style.display = "none";
    }
  
}

// const icon =document.querySelector(".icon")
// const drop =document.querySelector(".show")

//   icon.addEventListener('click',()=>{
//     if((this.drop.style.display == "") || ( this.drop.style.display.toLowerCase() == "none")){
//       // drop.style.display = "block";
//       this.drop.style.backgroundColor="white";
//     }else{
//       this.drop.style.display = "none";
//     }
    
//   })



