const nomelogin = document.getElementById("login")
   const senha = document.getElementById ("senha")
   const bEnviar = document.getElementById ("enviar")
   const erro =  document.getElementById ("msg")
  

   //. validação de login utilizando informação do localstorage

function login() {

  const userLogin = document.getElementById('login').value;
  const userSenha = document.getElementById('senha').value;

  const listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

  const user = listaUser.find(u => u.login === userLogin && u.senha === userSenha);

  // verifica campos vazios e aplica mensagem de aviso
  if (userLogin === "" || userSenha === "") {
    erro.innerHTML = "Por favor, preencha todos os campos.";
    erro.style.color = "red";
    erro.style.textAlign = "center";

    if (userLogin === "") {
      nomelogin.style.border = "2px solid red";
    } else {
      nomelogin.style.border = "";
    }

    if (userSenha === "") {
      senha.style.border = "2px solid red";
    } else {
      senha.style.border = "";
    }
    return;
  }

// verifica se o usuário está cadastrado
  if (!user) {
    erro.innerHTML = "Usuário não cadastrado.";
    erro.style.color = "red";
    erro.style.textAlign = "center";
    return;
  }

  if (user) {
      erro.innerHTML= "Login bem-sucedido!"
      erro.style.color = 'green'
      erro.style.textAlign = 'center'

    setTimeout(() => {
      window.location.href = '../index.html';
    }, 3000);
  } else {
      erro.innerHTML= "Senha ou Usuário incorretos."
      erro.style.color = 'red'
      erro.style.textAlign = 'center'

      
  }
}

document.getElementById('enviar').addEventListener('click', function(event) {
  event.preventDefault();
  login();
});

   //. ver senha

let btnOlho = document.querySelector('#olhoSenha');


btnOlho.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
        btnOlho.classList.remove('fa-eye');
        btnOlho.classList.add('fa-eye-slash');
    } else {
        inputSenha.setAttribute('type', 'password')
        btnOlho.classList.remove('fa-eye-slash');
        btnOlho.classList.add('fa-eye');
    }
})
senha.addEventListener('input', () => {
    // Remove caracteres que não são letras (A-Z ou a-z)
    senha.value = senha.value.replace(/[^a-zA-Z]/g, "");});

    nomelogin.addEventListener('input', () => {
    // Remove caracteres que não são letras (A-Z ou a-z)
    nomelogin.value = nomelogin.value.replace(/[^a-zA-Z]/g, "");});
