const audio = document.getElementById('clickSound');
const muteIcon = document.getElementById('muteIcon');

let pontos = 0;
let pontosPorClique = 1;
let preco = {
  dobroPonto: 50,
  autoClick: 100
};

function playClickSound() {
  audio.currentTime = 0;
  if (!audio.muted) {
    audio.play();
  }
}

function aumentarPontuacao() {
  pontos += pontosPorClique;
  atualizarTela();
}

function toggleMute() {
  audio.muted = !audio.muted;
  if (audio.muted) {
    muteIcon.src = "assets/gatomutado.jpg";
  } else {
    muteIcon.src = "assets/gatodesmutado.jpg";
  }
}

function comprar(item) {
  if (pontos >= preco[item]) {
    pontos -= preco[item];
    if (item === 'dobroPonto') {
      pontosPorClique *= 2;
    } else if (item === 'autoClick') {
      setInterval(aumentarPontuacao, 1000);
    }
    preco[item] = Math.floor(preco[item] * 2);
    atualizarTela();
  } else {
    alert("Pontos insuficientes!");
  }
}

function atualizarTela() {
  document.getElementById("points").textContent = pontos;
  document.getElementById("preco-dobroPonto").textContent = preco.dobroPonto;
  document.getElementById("preco-autoClick").textContent = preco.autoClick;
}
