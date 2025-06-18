class AuthManager {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    // inicializa o sistema de autenticação
    init() {
        this.checkLoginStatus();
        this.setupAuthUI();
    }

    // verifica se o usuário está logado
    checkLoginStatus() {
        const loggedUser = localStorage.getItem('loggedUser');
        if (loggedUser) {
            this.currentUser = JSON.parse(loggedUser);
            return true;
        }
        return false;
    }

 
    // função de logout
    logout() {
        this.currentUser = null;
        localStorage.removeItem('loggedUser');
        this.updateAuthUI();
        
        // Redireciona para a página inicial
        window.location.href = 'index.html';
    }

    // verifica se o usuário está logado
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // obtém o usuário atual
    getCurrentUser() {
        return this.currentUser;
    }

    // configura a interface de autenticação
    setupAuthUI() {
        // aguarda o DOM estar carregado
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.updateAuthUI();
            });
        } else {
            this.updateAuthUI();
        }
    }

    // atualiza a interface baseada no status de login
    updateAuthUI() {
        // atualiza a navegação
        this.updateNavigation();
    }

    // atualiza a navegação baseada no status de login
    updateNavigation() {
        // atualiza os botões de autenticação na navbar
        const authButtons = document.getElementById('auth-buttons');
        if (authButtons) {
            if (this.isLoggedIn()) {
                authButtons.innerHTML = `
                    <span class="text-success me-2">Olá, ${this.currentUser.login}!</span>
                    <button onclick="authManager.logout()" class="btn btn-danger">Logout</button>
                `;
            } else {
                // verifica se estamos na página principal ou em subpáginas
                const isMainPage = window.location.pathname.includes('index.html') || window.location.pathname === '/';
                const pathPrefix = isMainPage ? '/Projeto-Final-de-Semestre-FrontEnd/html/' : './';
                
                authButtons.innerHTML = `
                    <a href="${pathPrefix}cadastro.html" class="btn custom-btn-red me-2">Cadastre-se</a>
                    <a href="${pathPrefix}login.html" class="btn custom-btn-blue">Entrar</a>
                `;
            }
        }
    }

    // função para proteger páginas (opcional)
    requireLogin(redirectUrl = 'html/login.html') {
        if (!this.isLoggedIn()) {
            alert('Você precisa estar logado para acessar esta página!');
            window.location.href = redirectUrl;
            return false;
        }
        return true;
    }

    // função para mostrar informações do usuário
    showUserInfo() {
        if (this.isLoggedIn()) {
            alert(`Usuário logado: ${this.currentUser.login}`);
        } else {
            alert('Nenhum usuário logado');
        }
    }
}

// cria uma instância global do gerenciador de autenticação
const authManager = new AuthManager();

// função global para logout (para compatibilidade)
function logout() {
    authManager.logout();
}

// função global para verificar login (para compatibilidade)
function isLoggedIn() {
    return authManager.isLoggedIn();
}

// função global para obter usuário atual (para compatibilidade)
function getCurrentUser() {
    return authManager.getCurrentUser();
}

// atualiza a interface a cada 5 segundos (para sincronizar entre abas)
setInterval(() => {
    const wasLoggedIn = authManager.isLoggedIn();
    authManager.checkLoginStatus();
    const isLoggedInNow = authManager.isLoggedIn();
    
    // se o status mudou, atualiza a interface
    if (wasLoggedIn !== isLoggedInNow) {
        authManager.updateAuthUI();
    }
}, 5000);

console.log('Sistema de Autenticação carregado!');

