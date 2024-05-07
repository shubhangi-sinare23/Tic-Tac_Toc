let boxes = document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset-btn");

let newGameBtn =document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg");


let turnO = true;// player0 player x means o than print o other x



const winPatterns = [
 [0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[3, 4 ,5],
[6, 7, 8],
];
 const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 }



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        
        if(turnO) {
            box.innerText = "o";   //print 0
            turnO = false; //turn of x
        }else {
            box.innerText = "x";  //print x
            turnO = true;   // turn of o
        }
        box.disabled = true;


checkWinner();
        
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}; 
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}; 

const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
    //   console.log(pattern[0], pattern[1], pattern[2]);
    //   console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]])


    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

  if(pos1Val != "" && pos2Val != "" && pos3Val !="") {

    if(pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
    }
  }


    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);