
/**
 * 0 -> Roca
 * 1 -> papel
 * 2 -> Tijeras
 */

var selectionMachine;
var ptBoot = 0;
var ptPlayer = 0;
var empate = 0;

var ptMax = prompt("Hasta cuantos puntos decea jugar?");

function run() {

    btnRock.onclick = selectedRock;
    btnPaper.onclick = selectedPaper;
    btnHand.onclick = selectedHand;

}

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

function winner(selec) {
    if (selec == selectionMachine) {
        // alert('Empate');
        empate++;
        countEmpate.innerHTML = empate;
        leyend.innerHTML = "Empate!";

    } else if (selec == 0 && selectionMachine == 1) {
        // alert('Perdiste');
        ptBoot++;
        countBoot.innerHTML = ptBoot; 
        leyend.innerHTML = "Perdiste!";

    } else if (selec == 1 && selectionMachine == 0) {
        // alert('Ganaste');
        ptPlayer++;
        countPlayer.innerHTML = ptPlayer; 
        leyend.innerHTML = "Ganaste!";

    } else if (selec == 0 && selectionMachine == 2) {
        // alert('Ganaste');
        ptPlayer++;
        countPlayer.innerHTML = ptPlayer;
        leyend.innerHTML = "Ganaste!";

    } else if (selec == 2 && selectionMachine == 0) {
        // alert('Perdiste');
        ptBoot++;
        countBoot.innerHTML = ptBoot; 

    } else if (selec == 1 && selectionMachine == 2) {
        // alert('Perdiste');
        ptBoot++;
        countBoot.innerHTML = ptBoot; 
        leyend.innerHTML = "Perdiste!";

    } else if (selec == 2 && selectionMachine == 1) {
        // alert('Ganaste');
        ptPlayer++;
        countPlayer.innerHTML = ptPlayer;
        leyend.innerHTML = "Ganaste!";

    } else {
        alert('Sin definir');
    }

    if (ptBoot == ptMax) {
        alert("Haz Perdido!")
        window.location.reload()
    } else if (ptPlayer == ptMax) {
        alert("Haz Ganado!!")
        window.location.reload()
    }
}

function selectOption() {
    let actualClass = "fa-hand-back-fists";
    let clases = ["fa-hand-back-fist", "fa-hand", "fa-hand-peace"];

    // for (let i = 0; i < 3; i++) {
    // machineSelection.classList.remove(actualClass);
    selectionMachine = Math.floor(Math.random() * 3);

    machineSelection.removeAttribute("class");
    machineSelection.classList.add("fa-solid");

    actualClass = clases[selectionMachine];
    machineSelection.classList.add(actualClass);
    console.log(machineSelection.className)
    // }
}

run();
