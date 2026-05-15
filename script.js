let maquinario = [
  {
    id: "1",
    img: "assets/download (1).jpeg",
    nome: "Bomba Hidráulica Centrífuga",
    descricao:
      "Utilizada para transferência de água em sistemas industriais e residenciais.",
    valor: "R$ 850,00",
  },
  {
    id: "2",
    img: "assets/download.jpeg",
    nome: "Bomba Hidráulica Submersa",
    descricao: "Indicada para poços artesianos e drenagem de água.",
    valor: "R$ 1.250,00",
  },
  {
    id: "3",
    img: "assets/images.jpeg",
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
