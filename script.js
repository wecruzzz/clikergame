function playClickSound() {
      const audio = document.getElementById('clickSound');
      audio.currentTime = 0;
      audio.play();}

       let pontos = 0;
    function aumentarPontuacao() {
      pontos++;
      document.getElementById("points").textContent = pontos;
    }

    function toggleMute() {
    const audio = document.getElementById('clickSound');
    const muteBtn = document.getElementById('muteBtn');

    audio.muted = !audio.muted;

   if (audio.muted) {
        muteIcon.src = "assets/gatomutado.jpg"; 
    } else {
        muteIcon.src = "assets/gatodesmutado.jpg"; 
    }
}
