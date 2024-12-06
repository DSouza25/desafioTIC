var celulas = ["", "", "", "", "", "", "", "", ""];
var vez = "x";
var celulasClasse = document.querySelectorAll(".celula");

function verificaCelula(posicaoCelula) {//verifica se a celula está disponível para seleção
  if (celulas[posicaoCelula] === "") {
    return true;
  } else {
    return false;
  }
}

function verificaVitoria() {
  if (
    (celulas[0] === celulas[1] && celulas[1] === celulas[2] && celulas[1] !== "") ||
    (celulas[3] === celulas[4] && celulas[4] === celulas[5] && celulas[4] !== "") ||
    (celulas[6] === celulas[7] && celulas[7] === celulas[8] && celulas[7] !== "") ||
    (celulas[0] === celulas[3] && celulas[3] === celulas[6] && celulas[3] !== "") ||
    (celulas[1] === celulas[4] && celulas[4] === celulas[7] && celulas[4] !== "") ||
    (celulas[2] === celulas[5] && celulas[5] === celulas[8] && celulas[5] !== "") ||
    (celulas[0] === celulas[4] && celulas[4] === celulas[8] && celulas[4] !== "") ||
    (celulas[2] === celulas[4] && celulas[4] === celulas[6] && celulas[4] !== "")
) {
    return true;
  }else{
    return false;
  }
}

function verificaEmpate(){
    let empate = true;
    for (let i = 0; i < celulas.length; i++) {
        if(celulas[i] === ""){
            empate = false;
        }
    }
    return empate;
}

function selecionaCelula(valorCelula) {
  if (verificaCelula(valorCelula)) {
    celulas[valorCelula] = vez;
    celulasClasse[valorCelula].classList.add(vez);
    if(verificaVitoria()){ // verifica se existe um vencedor após a ultima jogada
        alert(`-----------------------\n    [ ${vez.toUpperCase()} ] é o campeão!\n-----------------------\n\n\nClique em OK para reiniciar o jogo.`);
        location.reload();
    }else{
        if(verificaEmpate()){ // verifica se houve empate após a ultima jogada
            alert("-------------------------\n     O jogo velhou!\n-------------------------\n\nClique em OK para reiniciar.");
            location.reload();
        } 
    }
    //troca o turno
    if (vez == "x") {
      vez = "o";
    } else {
      vez = "x";
    }
  } else {
    alert("Celula já preenchida! Tente novamente.");
  }
}
