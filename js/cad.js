'use strict';

let btn = document.querySelector('#cad')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfirmarsenha = document.querySelector('#labelConfirmarsenha')
let validConfirmarSenha = false

let login = document.querySelector('#usuario')
let labelLogin = document.querySelector('#labelUsuario')
let validLogin = false

//.regex para  auxiliar na validaçao do email

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
//.

let btnOlho = document.querySelector('#olhoSenha');
let password = document.getElementById("#senha");

let btnOlhoconfirm = document.querySelector('#olhoConfirm');
let passwordConfirm = document.getElementById("#confirmarSenha");

let cpfLabel = document.querySelector('#cpfLabel');
let cpf = document.querySelector('#cpf')
let validCPF = false

let cep = document.querySelector('#cep')
let cepLabel = document.querySelector('#cepLabel')
let validCEP = false

let msgError = document.querySelector('#msgError')

let msgSucess = document.querySelector('#msgSucess')

//. deixar a senha visivel ou invisivel(senha)
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
//.
      //* deixar o confirmar senha visivel ou invisivel 
btnOlhoconfirm.addEventListener('click', () => {
    let inputConfirmarsenha = document.querySelector('#confirmarSenha')

    if(inputConfirmarsenha.getAttribute('type') == 'password'){
        inputConfirmarsenha.setAttribute('type', 'text')
        btnOlhoconfirm.classList.remove('fa-eye');
        btnOlhoconfirm.classList.add('fa-eye-slash');
    } else {
        inputConfirmarsenha.setAttribute('type', 'password')
        btnOlhoconfirm.classList.remove('fa-eye-slash');
        btnOlhoconfirm.classList.add('fa-eye');
    }
})
//.

//* validaçao do nome(valido apenas se tiver no minimo 15  e no maximo 60 (a limitaçao do 60 está no length do html(max length)))
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 15){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome Completo *Mínimo 15 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false

    } else {
        labelNome.setAttribute('style', 'color: black')
        labelNome.innerHTML = 'Nome Completo'
        nome.setAttribute('style', 'border-color: green')
        nome.style.borderWidth = '2px';
        validNome = true

    }
})
//*
//* validaçao do login(tem que ter exatamente 6 letras(no html ta limitando))
login.addEventListener('keyup', () => {
    if(login.value.length !== 6){
        labelLogin.setAttribute('style', 'color: red')
        labelLogin.innerHTML = 'Login *Precisa de exatamente 6 caracteres'
        login.setAttribute('style', 'border-color: red')
        validLogin = false


    } else {
        labelLogin.setAttribute('style', 'color: black')
        labelLogin.innerHTML = 'Login'
        login.setAttribute('style', 'border-color: green')
        login.style.borderWidth = '2px';
        validLogin = true

    }
})
//.
//. senha tem que ter exatamente 8 letras(no html ta limitando))
senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Precisa de exatamente 8 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false


    } else {
        labelSenha.setAttribute('style', 'color: black')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        senha.style.borderWidth = '2px';
        validSenha = true

    }
})
//.
//. confirmando se as duas senhas sao iguais
confirmarSenha.addEventListener('keyup', () => {
    if(senha.value != confirmarSenha.value){
              confirmarSenha.setAttribute('style', 'color: red');
              labelConfirmarsenha.setAttribute('style', 'color: red');
              labelConfirmarsenha.innerHTML =  'Confirmar Senha *Senhas diferentes'
              confirmarSenha.setAttribute('style', 'border-color: red');
              validConfirmarSenha = false

            } else {
              confirmarSenha.setAttribute('style','color: black');
              confirmarSenha.setAttribute('style', 'border-color: green');
              labelConfirmarsenha.setAttribute('style', 'color: black', 'border-color: green');
              labelConfirmarsenha.innerHTML = 'Confirmar Senha'
              confirmarSenha.style.borderWidth = '2px';
              validConfirmarSenha = true
            
            }
          }
        
)

//.

//. funçao para validar o email
function validateEmail() {
    const emailValue = email.value.trim();

    if (emailValue.length <= 2) {
        labelEmail.innerHTML = 'E-mail *Mínimo 3 caracteres';
        labelEmail.style.color = 'red';
        email.style.borderColor = 'red';
        validEmail = false

    } 
    else if (!emailRegex.test(emailValue)) {
        labelEmail.innerHTML = 'E-mail *Formato inválido (ex: nome@exemplo.com)';
        labelEmail.style.color = 'red';
        email.style.borderColor = 'red';
    } 
    else {
        labelEmail.innerHTML = 'E-mail';
        labelEmail.style.color = 'black';
        email.style.borderColor = 'green'; // Indica sucesso
        email.style.borderWidth = '2px';
        validEmail = true
    }
}

email.addEventListener('keyup', validateEmail);
email.addEventListener('blur', validateEmail);
//.
// Função para validar CPF(contas para saber se o cpf existe)
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

function aplicarMascaraCPF(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 3) value = value.replace(/^(\d{3})/, '$1.');
    if (value.length > 7) value = value.replace(/^(\d{3})\.(\d{3})/, '$1.$2.');
    if (value.length > 11) value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})/, '$1.$2.$3-');
    
    input.value = value.substring(0, 14);
}

document.getElementById('cpf').addEventListener('keyup', function() {
    aplicarMascaraCPF(this);
    
    const cpf = this.value.replace(/\D/g, '');
    const valido = cpf.length === 11 ? validarCPF(this.value) : false;
    const mensagem = document.getElementById('cpf-mensagem');
    
    if (cpf.length === 0) {

        cpf.setAttribute('style', 'color: red', 'border-color: red');
    
    } else if (cpf.length < 11) {
        this.style.borderColor = 'red';
        cpfLabel.innerHTML = 'CPF *Digite os 11 números do CPF';
        cpfLabel.style.color = 'red';
    } else if (valido) {
        this.style.borderColor = 'green';
        this.style.borderWidth = '2px';
        cpfLabel.innerHTML = 'CPF válido';
        cpfLabel.style.color = 'black';
        
    } else {
        this.style.borderColor = 'red';
        cpfLabel.textContent = 'CPF inválido';
        cpfLabel.style.color = 'red';
    }
});
//. limparo formulario(endereço)
const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''

}


//. preenche o formulario com as info validas
const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf

}



const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limparFormulario();
    
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json`;
//. validar cpf
    if(cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')){
            cepLabel.innerHTML = 'CEP não encontrado*';
            cepLabel.style.color = 'red';
        } else {
        preencherFormulario (endereco);
            cepLabel.innerHTML = 'CEP';
            cepLabel.style.color = 'black';

    }

    } else {
        cepLabel.innerHTML = 'CEP inválido'
        cepLabel.style.color = 'red'
    }


}
document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);



let celular = document.getElementById('celular');
//. validar do numero de cell(dd)
celular.addEventListener('input', () => {
    var limparValor = celular.value.replace(/\D/g, "").substring(0,11);

    var numerosArray = limparValor.split("");

    var numeroFormatado = "";

    if (numerosArray.length > 0) {
        numeroFormatado +=`(${numerosArray.slice(0,2).join("")})`;
    }

    if (numerosArray.length > 2 ){
        numeroFormatado +=` ${numerosArray.slice(2,7).join("")}`;
    }

    if (numerosArray.length > 7) {
        numeroFormatado +=`-${numerosArray.slice(7,11).join("")}`;

    }

    celular.value = numeroFormatado;
}
);

//código para formatar número de telefone fixo igual ao celular
let fixo = document.getElementById('fixo');

fixo.addEventListener('input', () => {
    var limparValor = fixo.value.replace(/\D/g, "").substring(0, 10);

    var numerosArray = limparValor.split("");

    var numeroFormatado = "";

    if (numerosArray.length > 0) {
        numeroFormatado += `(${numerosArray.slice(0, 2).join("")})`;
    }

    if (numerosArray.length > 2) {
        numeroFormatado += ` ${numerosArray.slice(2, 6).join("")}`;
    }

    if (numerosArray.length > 6) {
        numeroFormatado += `-${numerosArray.slice(6).join("")}`;
    }

    fixo.value = numeroFormatado;
});










//. validar se todas informaçoes de cadastro sao validas./

function cadastrar() {
    
    if(validNome && validEmail && validLogin && validSenha && validConfirmarSenha ) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nome: nome.value, 
                email: email.value, 
                login: login.value,
                senha: senha.value

            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSucess.setAttribute('style', 'visibility: visible')
        msgSucess.innerHTML = 'Cadastrado com sucesso! Redirecionando...'
        msgError.setAttribute('style', 'visibility: hidden')
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = '/login.html'

        }, 3000)

    } else {
        msgError.setAttribute('style', 'visibility: visible')
        msgError.innerHTML = 'Preencher todos os campos corretamente'
        msgSucess.setAttribute('style', 'visibility: hidden')
        msgSucess.innerHTML = ''
        
        setTimeout(function(){msgError.setAttribute('style', 'visibility: hidden');}, 3000)

    }   
    }




btn.addEventListener('click', ()=>{
    cadastrar()
})

  btn.addEventListener('click', function(event) {
    event.preventDefault();
  });

  senha.addEventListener('input', () => {
    // Remove caracteres que não são letras (A-Z ou a-z)
    senha.value = senha.value.replace(/[^a-zA-Z]/g, "");});

    confirmarSenha.addEventListener('input', () => {
    // Remove caracteres que não são letras (A-Z ou a-z)
    confirmarSenha.value = confirmarSenha.value.replace(/[^a-zA-Z]/g, "");});

        login.addEventListener('input', () => {
    // Remove caracteres que não são letras (A-Z ou a-z)
    login.value = login.value.replace(/[^a-zA-Z]/g, "");});

    //formatar número do cep sem alterar valor da API dos correios