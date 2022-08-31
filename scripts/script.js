// importações de variáveis
import infoPersonagens from "./conteudo.js";

// variáveis
const principal = document.querySelector("body");
const formulario = document.getElementById("formulario");
const inputNomePersonagem = document.getElementById("input-nome-personagem");
const inputUrlImagem = document.getElementById("input-url-imagem");
const inputDescricaoPersonagem = document.getElementById(
  "input-descricao-personagem"
);
const inputCorSabre = document.getElementById("input-cor-sabre");
const inputAfiliacaoPersonagem = document.getElementById(
  "input-afiliacao-personagem"
);
const personagemContainercard = document.getElementById(
  "personagem-containercard"
);
const botaoPreencher = document.getElementById("botao-preencher");
const botaoLimpar = document.getElementById("botao-limpar");
const irParaTopo = document.getElementById("top");
const limitar = document.getElementById("input-descricao-personagem");
const quantidade = document.querySelector("span");

// funcões
function limpaFormulario() {
  inputNomePersonagem.value = null;
  inputUrlImagem.value = null;
  inputDescricaoPersonagem.value = null;
  quantidade.innerText = 0;
  inputCorSabre.value = "";
  inputAfiliacaoPersonagem.value = null;
}

// contador de caracteres
limitar.addEventListener("input", () => {
  if (limitar.value.length < 300) {
    quantidade.innerText = limitar.value.length;
  } else {
    quantidade.innerText = "max";
    limitar.value = limitar.value.substring(0, 300);
  }
});

// cria os cards com as informações do formulário
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let dadosPersonagem;
  if (inputAfiliacaoPersonagem.value === "") {
    dadosPersonagem = `
  <div class="card">
    <h2 class="card-nome">${inputNomePersonagem.value}</h2>
    <img class="card-imagem" src="${inputUrlImagem.value}" alt="imagem do personagem"/>
    <p class="card-descricao">${inputDescricaoPersonagem.value}</p>
    <h3 class="card-cor-sabre">Utiliza um sabre ${inputCorSabre.value}</h3>
    </div>
    `;
  } else {
    dadosPersonagem = `
  <div class="card">
    <h2 class="card-nome">${inputNomePersonagem.value}</h2>
    <img class="card-imagem" src="${inputUrlImagem.value}" alt="imagem do personagem"/>
    <p class="card-descricao">${inputDescricaoPersonagem.value}</p>
    <h3 class="card-cor-sabre">Utiliza um sabre ${inputCorSabre.value}</h3>
    <h3 class="card-afiliacao">Pertence a ${inputAfiliacaoPersonagem.value}</h3>
    </div>
    `;
  }
  personagemContainercard.innerHTML += dadosPersonagem;
  limpaFormulario();
  personagemContainercard.scrollIntoView();
});

// cria cards automaticamente com as informações do array
botaoPreencher.addEventListener("click", () => {
  if (personagemContainercard.querySelector(".card-auto") === null) {
    infoPersonagens.forEach((array) => {
      let dadosPersonagemAuto = `
    <div class="card card-auto">
      <h2 class="card-nome">${array.nome}</h2>
      <img class="card-imagem" src="${array.image}" alt="imagem do personagem"/>
      <p class="card-descricao">${array.descricao}</p>
      <h3 class="card-cor-sabre" id='cdm'>- Utiliza um sabre ${array.corDoSabre}</h3>
      <h3 class="card-afiliacao">- Pertence a ${array.afiliacao}</h3>
      </div>
      `;
      personagemContainercard.innerHTML += dadosPersonagemAuto;
    });
  } else {
    alert(`Cards automáticos já gerados!
Clique em "Limpar Cards" ou recarregue a página.
`);
  }
  personagemContainercard.scrollIntoView();
});

// limpa todos cards gerados
botaoLimpar.addEventListener("click", () => {
  if (personagemContainercard.querySelector(".card") === null) {
    alert(`Não há nenhum card gerado.`);
  } else {
    personagemContainercard.innerHTML = "";
  }
  limpaFormulario();
  principal.scrollIntoView();
});

// subir para o topo ao clicar
irParaTopo.addEventListener("click", () => {
  principal.scrollIntoView();
});

// mudar cursor para tipo 'pointer'
irParaTopo.addEventListener("mouseover", () => {
  irParaTopo.style.cursor = "pointer";
});
