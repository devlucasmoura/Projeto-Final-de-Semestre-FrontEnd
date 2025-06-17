const aumentarFonteBtn = document.getElementById('aumentarFonte');
const diminuirFonteBtn = document.getElementById('diminuirFonte');
const resetFonteBtn = document.getElementById('resetFonte');
const fonteAcessibilidade = document.querySelector('.textoAcessibilidade');

let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16; // Recupera o tamanho da fonte do localStorage ou usa 16 como padrão

// deixa do tamanho normal
fonteAcessibilidade.style.fontSize = `${currentFontSize}px`;

aumentarFonteBtn.addEventListener('click', () => {
  currentFontSize += 2;
  updateFontSize();
});
// limite pro tamanho da fonte
diminuirFonteBtn.addEventListener('click', () => {
  if (currentFontSize > 10) { 
    currentFontSize -= 2;
    updateFontSize();
  }
});
//botão para voltar pro tamanho normal
resetFonteBtn.addEventListener('click', () => {
  currentFontSize = 16; 
  updateFontSize();
});
// Salva o tamanho da fonte no localStorage
function updateFontSize() {
  fonteAcessibilidade.style.fontSize = `${currentFontSize}px`;
  localStorage.setItem('fontSize', currentFontSize); 
}
