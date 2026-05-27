let maquinario = [
  {
    id: "1",
    img: "assets/img/download (1).jpeg",
    nome: "Bomba Hidráulica Centrífuga",
    descricao:
      "Utilizada para transferência de água em sistemas industriais e residenciais.",
    valor: "R$ 850,00",
  },
  {
    id: "2",
    img: "assets/img/download.jpeg",
    nome: "Bomba Hidráulica Submersa",
    descricao: "Indicada para poços artesianos e drenagem de água.",
    valor: "R$ 1.250,00",
  },
  {
    id: "3",
    img: "assets/img/images.jpeg",
    nome: "Bomba Hidráulica de Pistão",
    descricao: "Usada em sistemas de alta pressão e aplicações industriais.",
    valor: "R$ 2.100,00",
  },
];

function buscarMaquinario() {
  let idMaquinario = document.getElementById("maquinarioSelect").value;
  let maquinarioEncontrado = maquinario.find((c) => c.id == idMaquinario);

  if (maquinarioEncontrado) {
    document.getElementById("img").innerHTML = "<img src='' alt='' />";
    document.querySelector("#img img").src = maquinarioEncontrado.img;
    document.getElementById("nome").innerText = maquinarioEncontrado.nome;
    document.getElementById("descricao").innerText =
      maquinarioEncontrado.descricao;
    document.getElementById("valor").innerText = maquinarioEncontrado.valor;
    document.getElementById("resultado").classList.remove("hidden");
  } else {
    document.getElementById("resultado").classList.remove("hidden");
    document.getElementById("img").innerHTML = "";
    document.getElementById("nome").innerText = "Produto não encontrado";
    document.getElementById("descricao").innerText = "";
    document.getElementById("valor").innerText = "";
  }
}

function mostrarConsulta() {
  const boas = document.getElementById("tela-boas-vindas");
  const consulta = document.getElementById("tela-consulta");

  boas.classList.toggle("hidden");
  consulta.classList.toggle("hidden");
}

function mostrarConsulta() {
  const boas = document.getElementById("tela-boas-vindas");
  const consulta = document.getElementById("tela-consulta");
  boas.classList.toggle("hidden");
  consulta.classList.toggle("hidden");
}

function buscarMaquinario() {
  const id = document.getElementById("maquinarioSelect").value.trim();
  const encontrado = maquinario.find((c) => c.id == id);
  const resultado = document.getElementById("resultado");
  const naoEncontrado = document.getElementById("nao-encontrado");

  if (encontrado) {
    document.getElementById("imgEl").src = encontrado.img;
    document.getElementById("imgEl").alt = encontrado.nome;
    document.getElementById("nome").innerText = encontrado.nome;
    document.getElementById("descricao").innerText = encontrado.descricao;
    document.getElementById("valor").innerText = encontrado.valor;
    resultado.classList.remove("hidden");
    naoEncontrado.classList.add("hidden");
  } else {
    resultado.classList.add("hidden");
    naoEncontrado.classList.remove("hidden");
  }
}
