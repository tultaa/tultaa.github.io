// Função para mudar a cor de fundo entre 3 cores
function changeBackgroundColor() {
    const colors = ['#4F4F4F', '#696969', '#808080']; // Cores de fundo
    let index = 0;
  
    setInterval(() => {
      document.body.style.backgroundColor = colors[index];
      index = (index + 1) % colors.length;
    }, 3500); // Muda a cor a cada 5 segundos
  }
  
  // Função para criar o slide show
  function createSlideshow() {
    const slideshow = document.getElementById('slideshow');
    const images = ['bike1.jpg', 'bike2.jpg', 'bike3.jpg', 'bike4.jpg']; // Imagens do slide
    let currentIndex = 0;
  
    function showSlide(n) {
      slides[currentSlide].style.display = 'none';
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      showSlide(currentIndex);
    }
  
    // Mostra o primeiro slide quando a página é carregada
    showSlide(currentIndex);
  
    // Alterna para o próximo slide a cada 3 segundos
    setInterval(nextSlide, 3000);
  }
  
  // Função para validar o login
  function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Verifica se o nome de usuário e senha são válidos (fictício neste exemplo)
    if (username === 'admin' && password === 'admin123') {
      window.location.href = 'quiz.html'; // Redireciona para a página do quiz
    } else {
      alert('Nome de usuário ou senha inválidos.');
    }
  }
  
  // Função para validar o formulário de contato
  function validateContactForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
  
    if (name === '' || phone === '' || email === '') {
      alert('Por favor, preencha todos os campos.');
      return false; // Impede o envio do formulário se algum campo estiver vazio
    }
    return true;
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    changeBackgroundColor();
    createSlideshow();
  });
  
 // Slideshow dos produtos
 var slideIndex = 0;
 showSlides();
 
 function showSlides() {
   var i;
   var slides = document.getElementsByClassName("product-card");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {
     slideIndex = 1;
   }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 3000); // Troca de slide a cada 3 segundos
 }

 function enviarRespostas() {
  // Array para armazenar as respostas
  var respostas = [];

  // Obter as respostas da pergunta 1
  var resposta1 = document.querySelector('input[name="q1"]:checked');
  if (resposta1) {
      respostas.push(resposta1.value);
  }

  // Obter as respostas da pergunta 2
  var resposta2 = document.querySelector('input[name="q2"]:checked');
  if (resposta2) {
      respostas.push(resposta2.value);
  }

  // Repita o processo para as outras perguntas...

  // Exemplo de como enviar as respostas para um servidor ou exibi-las
  console.log("Respostas enviadas:", respostas);
}

alert("Seja bem-vindo!");


 


 
