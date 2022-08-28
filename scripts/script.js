// variáveis
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

// eventos
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let dadosPersonagem = `
  <div class="card">
    <h2 class="card-nome">${inputNomePersonagem.value}</h2>
    <img class="card-imagem" src="${inputUrlImagem.value}" alt="imagem do personagem"/>
    <p class="card-descricao">${inputDescricaoPersonagem.value}</p>
    <h3 class="card-cor-sabre">Utiliza um sabre ${inputCorSabre.value}</h3>
    <h3 class="card-afiliacao">Pertence a ${inputAfiliacaoPersonagem.value}</h3>
    </div>
    `;
  personagemContainercard.innerHTML += dadosPersonagem;
  inputNomePersonagem.value = null;
  inputUrlImagem.value = null;
  inputDescricaoPersonagem.value = null;
  inputCorSabre.value = null;
  inputAfiliacaoPersonagem.value = null;
});

/* 
botaoPreencher.addEventListener("click", (evento) => {
    
    evento.preventDefault()
    
        console.log("teste");
    
        
        let tituloCard = `
        <img src="${link.value}"/>
        <span>"${titulo.value}"</span>
        <span>"${descricao.value}"</span>
        <span>"${sabre.value}"</span>
        `
        document.getElementById("cards").innerHTML += tituloCard;
    }); */
