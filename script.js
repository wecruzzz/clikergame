// Obtém os elementos de áudio e do ícone de mute do HTML
const audio = document.getElementById('clickSound');
const muteIcon = document.getElementById('muteIcon');

// Variáveis iniciais do jogo
let pontos =0; // Pontuação atual
let pontosPorClique = 1; // Quantidade de pontos ganhos por clique
const limitePontuacao = 500 // limite de pontos do jogo

// Preços das melhorias (upgrades)
let preco = {
  dobroPonto: 50,    
  autoClick: 100     
};

// Reproduz o som do clique se não estiver mudo
function playClickSound() {
  audio.currentTime = 0; // Reinicia o áudio para tocar desde o começo
  if (!audio.muted) {
    audio.play(); // Toca o som apenas se o áudio não estiver mudo
  }
}

function aumentarPontuacao() {
  if (pontos === limitePontuacao) {
    console.log("funcionou"); //limita a pontuação
    document.getElementById("points").textContent = "FIM"
  } else {
    pontos += pontosPorClique;
    atualizarTela(); // Atualiza os elementos da tela com a nova pontuação
  }
}


function verificarPontuação(){
 
}
// Alterna o estado de mudo (mute/unmute) e atualiza o ícone
function toggleMute() {
  audio.muted = !audio.muted; // Inverte o estado de mudo
  if (audio.muted) {
    muteIcon.src = "assets/gatomutado.jpg"; 
  } else {
    muteIcon.src = "assets/gatodesmutado.jpg"; 
  }
}

autoc = 0;

// Função para comprar melhorias dobroPonto ou autoClick
function comprar(item) {
  if (pontos >= preco[item]) { // Verifica se o jogador tem pontos suficientes
    // Subtrai o custo da melhoria dos pontos

    if (item === 'dobroPonto') {
      pontos -= preco[item]; 
      pontosPorClique *= 2; // Dobra os pontos por clique
    } else if (item === 'autoClick' && autoc == 0)  {
      pontos -= preco[item]; 

      autoc = 1;
      // Ativa um acrecimo automático de pontos a cada segundo
      setInterval(aumentarPontuacao, 1000);
    }

    // Aumenta o preço do item para futuras compras
    preco[item] = Math.floor(preco[item] * 2);

    atualizarTela(); 
  } else {
    alert("Pontos insuficientes!"); // Mensagem de erro se não tiver pontos
  }
}

// Atualiza os elementos da interface com as informações mais recentes
function atualizarTela() {
  document.getElementById("points").textContent = pontos;
  document.getElementById("preco-dobroPonto").textContent = preco.dobroPonto;
  document.getElementById("preco-autoClick").textContent = preco.autoClick;
}
