function quizGame(){
    const startEl = document.getElementById("startbutton");
    const startContainerEl = document.getElementById("start-container");
    const quizEl = document.getElementById ("quiz");
    

    function startGame(){
        startEl.setAttribute("class", "btn btn-lg");
        startContainerEl.setAttribute("class", "container d-none");
        quizEl.setAttribute("class", "container");

    let clicks = []; 

    //select all the memory buttons
    const memoryEls = document.querySelectorAll(".memory-js");
    const answerEl = document.querySelectorAll(".opt-js");

    //add event listeners for all of the memory buttons

//     memoryEls.forEach(function(memoryEl){
//          memoryEl.addEventListener("click", function(){
//              console.log(memoryEl);
//              clicks.push(memoryEl);
//              if(clicks.length < 2){
//              return;
//          }
//          if(
//             clicks[0] !== clicks [1] &&
//             clicks[0].innerText === clicks[1].innerText){
        
//             alert("winner");
//         }
//          clicks = [];
//     });
// }); 
}
   startEl.addEventListener("click", startGame);
}

quizGame();

