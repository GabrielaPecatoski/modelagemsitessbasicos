document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');
    const senhaError = document.getElementById('senhaError');
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpfError');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      clearErrors();
  
      if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Email inválido');
        return;
      }
  
      if (!validateSenha(senhaInput.value)) {
        showError(senhaError, 'Senha deve ter no mínimo 8 caracteres');
        return;
      }
  
      if (senhaInput.value !== confirmarSenhaInput.value) {
        showError(senhaError, 'As senhas não coincidem');
        return;
      }
  
      if (!validateCPF(cpfInput.value)) {
        showError(cpfError, 'CPF inválido');
        return;
      }
  
      // Adicione validações para os outros campos conforme necessário
  
      // Se chegou até aqui, o formulário é válido
      alert('Formulário enviado com sucesso!');
      form.reset();
    });
  
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  
    function validateSenha(senha) {
      return senha.length >= 8;
    }
  
    function validateCPF(cpf) {
      // Adicione a sua função de validação de CPF aqui
      return true; // Por enquanto, retornando true para permitir o envio do formulário
    }
  
    function showError(input, message) {
      const formGroup = input.parentElement;
      const error = formGroup.querySelector('.error');
      error.textContent = message;
    }
  
    function clearErrors() {
      const errors = document.querySelectorAll('.error');
      errors.forEach(error => {
        error.textContent = '';
      });
    }
  });
  