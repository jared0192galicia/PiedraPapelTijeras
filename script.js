var selectionMachine;
var ptBoot = 0;
var ptPlayer = 0;
var empate = 0;

var partBoot = 0;
var partPlayer = 0;

let ptMax = prompt("Hasta cuantos puntos decea jugar?");
let partidas = 1;
let partidasMax;

// funtion init
function run() {

    //  validation for the number of the árts and the points
    while (ptMax > 9 || (ptMax % 2 == 0)) {
        ptMax = prompt("Elija un numero impar menor que 9");
    }

    partidasMax = prompt("Numero de partidas a jugar:");


    while (partidasMax > 9 || (partidasMax % 2 == 0)) {
        ptMax = prompt("Elija un numero impar menor que 9");
    }

    // Asignament funtions to components for event click
    btnRock.onclick = selectedRock;
    btnPaper.onclick = selectedPaper;
    btnHand.onclick = selectedHand;
    machineSelection.onclick = animationError;

}

/**
 * The function "selectedRock" selects the "rock" option and determines the winner of the game.
 */

function selectedRock() {
    selectOption();
    winner(0);
}

/**
 * The function selects an option and declares the winner as paper.
 */
function selectedPaper() {
    selectOption();
    winner(1);
}

/**
 * The function selects an option and declares the winner as player 2.
 */
function selectedHand() {
    selectOption();
    winner(2);
}

/**
 * The function determines the winner of a game based on the selection of the player and the selection
 * of the machine, updates the score and displays a message indicating the outcome.
 * @param selec - The parameter "selec" is likely an integer representing the selection made by the
 * player in a game (e.g. rock, paper, or scissors).
 */
function winner(selec) {

    var color = "str";

    // Compare who winner
    if (selec == selectionMachine) {
        color = "rgb(230,230,250)";
        empate++;
        countEmpate.innerHTML = empate;
        leyend.innerHTML = "Empate!";

    } else if (selec == 0 && selectionMachine == 1) {
        color = "rgb(230,2,2)";
        ptBoot++;
        countBoot.innerHTML = ptBoot;
        leyend.innerHTML = "Perdiste!";

    } else if (selec == 1 && selectionMachine == 0) {
        color = "rgb(2,230,2)";
        ptPlayer++;
        countPlayer.innerHTML = ptPlayer;
        leyend.innerHTML = "Ganaste!";

    } else if (selec == 0 && selectionMachine == 2) {
        color = "rgb(2,230,2)";
        ptPlayer++;
        countPlayer.innerHTML = ptPlayer;
        leyend.innerHTML = "Ganaste!";

    } else if (selec == 2 && selectionMachine == 0) {
        color = "rgb(230,2,2)";
        ptBoot++;
        countBoot.innerHTML = ptBoot;

    } else if (selec == 1 && selectionMachine == 2) {
        color = "rgb(230,2,2)";
        ptBoot++;
        countBoot.innerHTML = ptBoot;
        leyend.innerHTML = "Perdiste!";

    } else if (selec == 2 && selectionMachine == 1) {
        color = "rgb(2,230,2)";
        ptPlayer++;
        countPlayer.innerHTML = ptPlayer;
        leyend.innerHTML = "Ganaste!";

    } else {
        color = "rgb(2,230,350)";
        alert('Sin definir');
    }

    leyend.style.color = color;

    // Compare if they are winner with the last point
    if (ptBoot == ptMax) {
        alert("Haz Perdido!")
        partBoot++;
        countPartidasBoot.innerHTML = partBoot;
        partidaTerminada();
    } else if (ptPlayer == ptMax) {
        alert("Haz Ganado!!")
        partPlayer++;
        partidaTerminada();
        countPartidasPlayer.innerHTML = partPlayer;
    }
}

/**
 * The function resets the game scores and increments the number of games played, but if the maximum
 * number of games has been reached, it redirects to a Rick Astley video.
 */
function partidaTerminada() {
    if (partidas < partidasMax) {

        partidas++;
        ptBoot = 0;
        ptPlayer = 0;
        empate = 0;

        countBoot.innerHTML = empate;
        countEmpate.innerHTML = empate;
        countPlayer.innerHTML = empate;

        console.log(partidas + " <= " + partidasMax)

    } else {
        alert("La partida termino");
        window.location.href = "https://youtu.be/dQw4w9WgXcQ";
    }
}

/**
 * The function randomly selects a class from an array and adds it to an element's class list.
 */
function selectOption() {
    let actualClass = "fa-hand-back-fists";
    let clases = ["fa-hand-back-fist", "fa-hand", "fa-hand-peace"];

    selectionMachine = Math.floor(Math.random() * 3);
    console.log("Ejecutar cada 1 seg");
    machineSelection.removeAttribute("class");
    machineSelection.classList.add("fa-solid");
    actualClass = clases[selectionMachine];
    machineSelection.classList.add(actualClass);
    
    console.log(machineSelection.className)

    setTimeout(() => {
        console.log("Stop")
        window.clearInterval();
    }, 1000);
}

/**
 * The function animates a machine selection by changing its color and applying CSS animations.
 */
function animationError() {
    // Set animation error to boot component
    machineSelection.style.color = "white";
    machineSelection.style.animationDuration = "0.3s";
    machineSelection.style.animationName = "boot-click";

    // Delay 1s and set animation default
    setTimeout(() => {
        console.log("1 Segundo esperado")
        machineSelection.style.animationDuration = "5s";
        machineSelection.style.animationName = "rock-anm";
    }, 1000);
}

run();
