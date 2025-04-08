const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Quando o botão "Sign Up" for clicado, adiciona a classe que ativa o painel da direita
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// Quando o botão "Sign In" for clicado, remove a classe e volta para o painel de login
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});