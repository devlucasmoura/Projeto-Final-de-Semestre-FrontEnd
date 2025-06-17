$('.dropdown-toggle').dropdown()

function toggleContrast() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');

  }
  
  let fontSize = 16;
  function changeFontSize(change) {
    fontSize += change;
    document.body.style.fontSize = fontSize + 'px';
  }
  
  document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const celular = document.getElementById('celular').value;
    const fixo = document.getElementById('fixo').value;
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const confirmar = document.getElementById('confirmar').value;
    const feedback = document.getElementById('feedbackMsg');
  
    if (nome.length < 15 || nome.length > 60) {
      feedback.textContent = 'O nome deve ter entre 15 e 60 caracteres.';
      feedback.classList.add('show');
      return;
    }
  
    if (!/^\+55\d{2}-\d{8}$/.test(celular) || !/^\+55\d{2}-\d{8}$/.test(fixo)) {
      feedback.textContent = 'Formato de telefone inválido. Use (+55)XX-XXXXXXXX';
      feedback.classList.add('show');
      return;
    }
  
    if (!/^[a-zA-Z]{6}$/.test(login)) {
      feedback.textContent = 'O login deve conter exatamente 6 letras.';
      feedback.classList.add('show');
      return;
    }
  
    if (!/^[a-zA-Z]{8}$/.test(senha)) {
      feedback.textContent = 'A senha deve conter exatamente 8 letras.';
      feedback.classList.add('show');
      return;
    }
  
    if (senha !== confirmar) {
      feedback.textContent = 'As senhas não coincidem.';
      feedback.classList.add('show');
      return;
    }
  
    localStorage.setItem('login', login);
    localStorage.setItem('senha', senha);
    window.location.href = 'login.html';
  });
  