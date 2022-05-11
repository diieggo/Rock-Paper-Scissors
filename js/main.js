// Score
let playerScore = 0;
let cpuScore = 0;
var playerPoints = document.querySelector(".player_points");
var cpuPoints = document.querySelector(".cpu_points");
// Player options
var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
// Pop up
var popup = document.querySelector(".popup_content");
var close_btn = document.querySelector(".close_btn");
var playerBorderResult = document.querySelector(".player_border_result");
var cpuBorderResult = document.querySelector(".cpu_border_result");
var gameResult = document.querySelector(".game_result");
var gameImg = document.querySelector(".game_img");
// Results
var playerResult = document.querySelector(".player_result");
var cpuResult = document.querySelector(".cpu_result");
// Restart
var rstBtn = document.querySelector(".rst_btn");

function cpuChoice() {
    var cpuOption = ["rock", "paper", "scissors"];
    var Randomnumber = Math.floor(Math.random() * (3 - 0)) + 0;
    cpuOption = cpuOption[Randomnumber];
    return cpuOption;
}

function win() {
    playerBorderResult.style.borderColor = "#3CE900";
    cpuBorderResult.style.borderColor = "red";
    gameResult.innerHTML = "You Win";
    playerPoints.innerHTML = playerScore;
    cpuPoints.innerHTML = cpuScore;
    gameImg.src = "img/cat-with-wry-smile_emoji.png";
}

function lost() {
    playerBorderResult.style.borderColor = "red";
    cpuBorderResult.style.borderColor = "#3CE900";
    gameResult.innerHTML = "You Lost";
    playerPoints.innerHTML = playerScore;
    cpuPoints.innerHTML = cpuScore;
    gameImg.src = "img/crying-cat_emoji.png";
}

function draw() {
    playerBorderResult.style.borderColor = "#3CE900";
    cpuBorderResult.style.borderColor = "#3CE900";
    gameResult.innerHTML = "It's a Draw";
    gameImg.src = "img/grinning-cat_emoji.png";
}

function play(playerOption) {
    var cpuOption = cpuChoice();
    if (playerOption == cpuOption) {
        draw();
    } else if (playerOption == "rock" && cpuOption == "scissors") {
        playerScore++;
        win();
    } else if (playerOption == "paper" && cpuOption == "rock") {
        playerScore++;
        win();
    } else if (playerOption == "scissors" && cpuOption == "paper") {
        playerScore++;
        win();
    } else {
        cpuScore++;
        lost();
    }
}

function main() {
    rock.addEventListener('click', ()=> {
        play("rock");
        popup.className = "popup_content popup_show";
    })
    paper.addEventListener('click', ()=> {
        play("paper");
        popup.className = "popup_content popup_show";
    })
    scissors.addEventListener('click', ()=> {
        play("scissors");
        popup.className = "popup_content popup_show";
    })
}

close_btn.addEventListener('click', ()=> {
    popup.className = "popup_content";
});

rstBtn.addEventListener('click', ()=> {
    playerPoints.innerHTML = 0;
    cpuPoints.innerHTML = 0;
    playerScore = 0;
    cpuScore = 0;
});

main();