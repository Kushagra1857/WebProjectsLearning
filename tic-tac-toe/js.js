let turn = "X";
let boxes = document.querySelectorAll(".box");
let counter = 0
let gameover = false;

const changeTurn = function () {
  return turn === "X" ? "O" : "X";
};

// to check win
const checkWin = function () {
    let boxtext2 = document.querySelectorAll(".boxtext"); // boxtext contains a nodelist of 9 boxtexts and thus we verify each of the column separately
    // console.log(boxtext2);
    
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];
    wins.forEach((e) => {
        if (boxtext2[e[0]].innerText === boxtext2[e[1]].innerText && boxtext2[e[1]].innerText === boxtext2[e[2]].innerText && boxtext2[e[0]].innerText !== "") {
            
            document.querySelector(".chance").innerText =
            boxtext2[e[0]].innerText + " won";
            gameover = true;
            resetGame()
        }
        
    });
    // counter++
    
};

// game logic
Array.from(boxes).forEach(function (box) {
    let boxtext = box.querySelector(".boxtext");
    box.addEventListener("click", function (e) {
        if(!gameover){
            if (boxtext.innerHTML == "") {
                boxtext.innerHTML = turn;
                counter++
                // console.log(counter);
              turn = changeTurn();
              checkWin();
              if(counter === 9 && !gameover) {
                // checkWin()
                document.querySelector('.chance').innerText = `Game Tie Play again`
                gameover = true
                resetGame()
              }
              if (!gameover) {
                  document.querySelector(".chance").innerHTML = `Chance of: ${turn}`;
                }
            }
        }
    });
});

// reset game
const resetGame = function()
{
    let p = document.createElement('p')
    p.innerHTML = `<button class="resetButton">New Game</button>`
    document.querySelector('.chance').appendChild(p)

    document.querySelector('.resetButton').addEventListener('click', function(e){
        let boxtext3 = document.querySelectorAll('.boxtext')
        Array.from(boxtext3).forEach(element =>{
            element.innerHTML = ''
        })
        document.querySelector('.chance').innerHTML = ''
        turn = "X"
        gameover = false
        counter = 0

    })

}