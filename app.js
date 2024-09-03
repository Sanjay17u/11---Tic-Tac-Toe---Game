const boxes = document.querySelectorAll(".box")
const resetBtn = document.querySelector(".reset-btn")
const newGameButton = document.querySelector(".msg-button")
const msgContainer = document.querySelector(".msg-container");
const gameMsg = document.querySelector(".msg") 

let turnO = true

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true
    enabledBoxes()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("Box Clicked")
        if(turnO === true) {
            box.innerHTML = "X"
            turnO = false    
        } else {
            box.innerHTML = "O"
            turnO = true
        }
        box.disabled = true

        checkWinner()
    })
})

const enabledBoxes = () => {
    for (const box of boxes) {
        box.disabled = false
        box.innerHTML = ""
    }
}
const disabledBoxes = () => {
    for (const box of boxes) {
        box.disabled = true
    }
}

const showWinner = (winner) => {
    gameMsg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes()
}


const checkWinner = () => {
    for(const pattern of winPatterns) {
        const pos1Val = boxes[pattern[0]].innerText
        const pos2Val = boxes[pattern[1]].innerText
        const pos3Val = boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val & pos2Val === pos3Val) {
                console.log("winner", pos1Val)
                showWinner(pos1Val);
            }
        }
    }
}

newGameButton.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)
