
/**
 * 0 -> Roca
 * 1 -> papel
 * 2 -> Tijeras
 */

var selectionMachine;
var ptBoot = 0;
var ptPlayer = 0;
var empate = 0;

var partBoot = 0;
var partPlayer = 0;

let ptMax = prompt("Hasta cuantos puntos decea jugar?");
let partidas = 1;
let partidasMax;

// Funcion inicial
function run() {

    while (ptMax > 9 || (ptMax % 2 == 0)) {
        ptMax = prompt("Elija un numero impar menor que 9");
    }

    partidasMax = prompt("Numero de partidas a jugar:");


    while (partidasMax > 9 || (partidasMax % 2 == 0)) {
        ptMax = prompt("Elija un numero impar menor que 9");
    }

    btnRock.onclick = selectedRock;
    btnPaper.onclick = selectedPaper;
    btnHand.onclick = selectedHand;
    machineSelection.onclick = animationError;

}
/**
 * Funciones de botones
 */
function selectedRock() {
    selectOption();
    winner(0);
}
function selectedPaper() {
    selectOption();
    winner(1);
}
function selectedHand() {
    selectOption();
    winner(2);
}

// Selecciona a el ganador segun las elecciones realizadas
function winner(selec) {

    var color = "str";

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

    // Compueba si existe algun ganador el ultimo punto
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

// Aumenta la partida y reincia los puntos
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
        window.location.href = "https://adistancia.unsis.edu.mx/mod/folder/view.php?id=200433";
    }
}

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

function animationError() {
    machineSelection.style.color = "white";
    machineSelection.style.animationDuration = "0.3s";
    machineSelection.style.animationName = "boot-click";
    setTimeout(() => {
        console.log("1 Segundo esperado")
        machineSelection.style.animationDuration = "5s";
        machineSelection.style.animationName = "rock-anm";
    }, 1000);
}

run();
