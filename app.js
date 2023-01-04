// implement scroll screen
/* How we are implementing is adding event listner to each navbar link then by that targetting the section and then using setInterval
now what setInterval does is it is like an infinite loop until you clear the interval now we are using getBoundingClient() funcion to 
get the top offset from screen  */ 


let links = document.querySelectorAll("#navbar a"); 

for( let i  of links){
 i.addEventListener('click', function(event){
    event.preventDefault(); 
 
     let targetSectionid = event.target.textContent.toLowerCase().trim(); 
    let section = document.getElementById(targetSectionid); 

     if(section!=null){
        
     
     
     var interval = setInterval(function(){
        let sectionCoordinates = section.getBoundingClientRect(); 
      
        // to check if we have reached the end  of the screen 
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            clearInterval(interval);
        }
         if(sectionCoordinates.top>=0){
            window.scrollBy(0, 50); 
             sectionCoordinates.top -=50;
         }else{
            clearInterval(interval); 
            return; 
         }
        

     }, 30)
    }

 })
}
//implemnting skill animation 
let skillContainer = document.getElementById("skill-container"); 
let indicators = document.querySelectorAll(".indicator"); 

let animation = false; 
window.addEventListener("scroll", checkScroll); 

// continuous scrolling 
function checkScroll(){
   let coordinates = skillContainer.getBoundingClientRect(); 
   if(animation==false && coordinates.top<window.innerHeight){
      intialize(); 
      animation=true; 
      console.log("screen is visible"); 
      fillBars(); 
   }else if(coordinates.top>window.innerHeight){
      
      intialize();  
      animation = false;
   }

}
// intialize bars

function intialize(){
   for(let i =0; i<indicators.length; i++){
    indicators[i].style.width=0; 
   }
}

function fillBars(){
   for(let i of indicators){
      let targetWidth = i.getAttribute("data-val"); 
      let currWidth = 0; 
      let interval = setInterval(function(){
         if(currWidth>targetWidth){
            clearInterval(interval);
            return; 
          
         }else{
            currWidth++; 
            i.style.width=currWidth+ '%'; 
         }

      }, 9)
      
   }
}
