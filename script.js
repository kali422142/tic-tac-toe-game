let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container");
let  message = document.querySelector("#msg");

let turnO =   true;// player x ,,, player y

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

const resetGame = () =>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true;

        checkwineer();
    })
})

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
  const showwinner = (winner)=>{
    message.innerText = `Congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

  }

const checkwineer = () =>{
    for(let pattern of winpatterns){
        
        let =  positionval1 = boxes[pattern[0]].innerText;
        let =  positionval2  =   boxes[pattern[1]].innerText;
        let =  positionval3 =  boxes[pattern[2]].innerText;
    

 if(positionval1 !="" && positionval2 != "" && positionval3 != ""){
    if(positionval1 === positionval2 && positionval2 === positionval3){
        console.log("Winner is ",positionval1);
        showwinner(positionval1);
    }
 }

}
}
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);