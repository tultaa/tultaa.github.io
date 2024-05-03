function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de verificação de usuário e senha (substitua isso com sua lógica de autenticação real)
    if (username === "usuario" && password === "senha") {
        alert("Login bem-sucedido!");
        window.location.href = "quiz.html"; // Redirecionar para a página do quiz
    } else {
        alert("Usuário ou senha inválidos. Por favor, tente novamente.");
    }
}


  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de verificação de usuário e senha (substitua isso com sua lógica de autenticação real)
    if (username === "usuario" && password === "senha") {
        alert("Login bem-sucedido!");
        window.location.href = "quiz.html"; // Redirecionar para a página do quiz
    } else {
        alert("Usuário ou senha inválidos. Por favor, tente novamente.");
    }
}

function changeBackgroundColor() {
    const colors = ['#4F4F4F', '#696969', '#808080']; // Cores de fundo
    let index = 0;
  
    setInterval(() => {
      document.body.style.backgroundColor = colors[index];
      index = (index + 1) % colors.length;
    }, 3500); // Muda a cor a cada 5 segundos
}

// Chama a função changeBackgroundColor quando a página carregar
window.onload = function() {
    changeBackgroundColor();
};