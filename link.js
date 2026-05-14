const elemento = {
  email: document.querySelector("#email"),
  senha: document.querySelector("#senha"),
  form: document.querySelector("form"),
  button: document.querySelector("button"),
};

const dadosDigitados = {
  email: " ",
  senha: " ",
};

elemento.form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault;
    getDadosDigitados(elemento.email.value, elemento.senha.value);
  },

  function getDadosDigitados(email, senha) {
    dadosDigitados.email = email;
    dadosDigitados.senha = senha;
  },
);

// document.querySelectorAll(".button").forEach((button) => {
//   button.addEventListener("click", () => {
//     alert("Saiba mais");
//   });
// });

// document.querySelectorAll(".botao").forEach((button) => {
//   button.addEventListener("click", () => {
//     alert("Mensagem enviada com sucesso!s");
//   });
// });
