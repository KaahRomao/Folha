const elemento = {
  email: document.querySelector("#email"),
  senha: document.querySelector("#senha"),
  form: document.querySelector("form"),
  button: document.querySelector("button"),
};

const admin = {
  email: "kaueromao1989@gmail.com",
  senha: "Kaue050577!",
};

const dadosDigitados = {
  email: "",
  senha: "",
};

function getDadosDigitados(email, senha) {
  dadosDigitados.email = email;
  dadosDigitados.senha = senha;
}

elemento.form.addEventListener("submit", (event) => {
  event.preventDefault();
  getDadosDigitados(elemento.email.value, elemento.senha.value);
  console.log(dadosDigitados);

  if (
    dadosDigitados.email == admin.email &&
    dadosDigitados.senha == admin.senha
  ) {
    setTimeout(() => {
      window.location.href = "./produtos.html";
    }, 1000);
  } else {
    console.log("Email ou Senha incorretos. Tente Novamente!");
  }
});
