document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que a página recarregue ao enviar o formulário

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validação básica no front-end
        if (email === '' || password === '') {
            errorMessage.textContent = 'Por favor, preencha todos os campos.';
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            return;
        }

        // Se passou na validação, limpa mensagens de erro anteriores
        errorMessage.textContent = '';
        
        // Simulação de requisição para o backend (MVP)
        const loginBtn = document.getElementById('loginBtn');
        const originalText = loginBtn.textContent;
        
        // Feedback visual de carregamento
        loginBtn.textContent = 'Autenticando...';
        loginBtn.disabled = true;

        // Simulando um delay de rede de 1.5 segundos
        setTimeout(() => {
            // Aqui você faria o POST para a sua API (ex: fetch('/api/auth/login'))
            alert(`Login bem-sucedido para o usuário: ${email}\n\nNum ambiente real, você seria redirecionado para o dashboard.`);
            
            // Restaura o estado do botão (útil caso o login falhe no backend real)
            loginBtn.textContent = originalText;
            loginBtn.disabled = false;
            
            // Simulação de redirecionamento para a ficha
            window.location.href = 'index.html'; 
        }, 1500);
    });
});