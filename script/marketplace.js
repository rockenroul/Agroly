const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const imageUrl = event.target.result;
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      preview.innerHTML = ''; // Limpa qualquer conteúdo existente
      preview.appendChild(imageElement); // Adiciona a imagem ao preview
    };
    
    reader.readAsDataURL(file); // Lê o arquivo como URL de dados
  }
});



// Função para habilitar/desabilitar o botão de envio
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('meuFormulario');
    const enviar = document.getElementById('enviar');

    function verificarCampos() {
        const campos = formulario.querySelectorAll('input[required]');
        const todosPreenchidos = Array.from(campos).every(campo => campo.value.trim() !== '');
        enviar.disabled = !todosPreenchidos;
    }

    formulario.addEventListener('input', verificarCampos);
});


