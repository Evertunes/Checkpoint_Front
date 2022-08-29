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
const botaoPreencher = document.getElementById("botao-preencher");
const botaoLimpar = document.getElementById("botao-limpar");

// cria os cards com as informações do formulário
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let dadosPersonagem
  if (inputAfiliacaoPersonagem.value ===''){
  dadosPersonagem = `
  <div class="card">
    <h2 class="card-nome">${inputNomePersonagem.value}</h2>
    <img class="card-imagem" src="${inputUrlImagem.value}" alt="imagem do personagem"/>
    <p class="card-descricao">${inputDescricaoPersonagem.value}</p>
    <h3 class="card-cor-sabre">Utiliza um sabre ${inputCorSabre.value}</h3>
    </div>
    `; }
else {
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
  inputNomePersonagem.value = null;
  inputUrlImagem.value = null;
  inputDescricaoPersonagem.value = null;
  inputCorSabre.value = "";
  inputAfiliacaoPersonagem.value = null;
});

// cria os cards automaticamente com as informações do array
botaoPreencher.addEventListener("click", () => {
if(personagemContainercard.querySelector(".card-auto") === null){
  infoPersonagens.forEach((number) => {
    let dadosPersonagem = `
    <div class="card card-auto">
      <h2 class="card-nome">${number.nome}</h2>
      <img class="card-imagem" src="${number.image}" alt="imagem do personagem"/>
      <p class="card-descricao">${number.descricao}</p>
      <h3 class="card-cor-sabre">- Utiliza um sabre ${number.corDoSabre}</h3>
      <h3 class="card-afiliacao">- Pertence a ${number.afiliacao}</h3>
      </div>
      `;
    personagemContainercard.innerHTML += dadosPersonagem;
  }); 
}
else {
alert(`Cards automáticos já gerados!
Clique em "Limpar Cards" ou recarregue a página.
`)
}
});

// limpa os cards gerados
botaoLimpar.addEventListener("click", () => {
  if(personagemContainercard.querySelector(".card") === null){
    alert(`Não há nenhum card gerado.`)
  }
  else{
  personagemContainercard.innerHTML = '';}
});

// array utilizados nos cards gerados automaticamente
const infoPersonagens = [
  {
    nome: "Darth Vader",
    descricao:
      "- Darth Vader (anteriormente chamado Anakin Skywalker) é um personagem  da saga de ficção científica Star Wars ; um dos protagonistas centrais da trama que começa no lado da luz mas é corrompido pro lado sombrio",
    afiliacao: "ordem sith, império galáctico",
    corDoSabre: "vermelho",
    image:
      "https://www.hdwallpaperslife.com/wp-content/uploads/2019/04/new-darth-vader-3z-1680x1050.jpg",
  },

  {
    nome: "Luke Skywalker",
    descricao:
      "- Luke Skywalker é o protagonista da trilogia original da série Star Wars, Um personagem essencial e importante na luta da Aliança Rebelde contra o Império Galáctico sendo um dos últimos jedis existentes",
    afiliacao: "ordem jedi",
    corDoSabre: "verde",
    image: "https://wallpapercave.com/wp/wp3800518.jpg",
  },

  {
    nome: "Darth Maul",
    descricao:
      "- Darth Maul é um Zabrak do planeta Dathomir no universo fictício de Star Wars. Os chifres são a marca registrada de todos os Zabraks, com a face tatuada em vermelho e preto sua aparência é maléfica, ele possui o medo como aliado, Implacável e próximo da perfeição",
    afiliacao: "ordem sith",
    corDoSabre: "vermelho",
    image:
      "https://wallpapertag.com/wallpaper/full/1/2/0/374617-darth-maul-wallpaper-2481x1520-for-ipad.jpg",
  },

  {
    nome: "Obi-Wan Kenobi",
    descricao:
      "- Obi-Wan Kenobi é um personagem fictício da saga de ficção científica Star Wars, que participou dos seis primeiros filmes, é um dos poucos personagens da série a aparecer nos seis primeiros episódios, dada a sua importância no enredo",
    afiliacao: "ordem jedi, república galáctica",
    corDoSabre: "azul",
    image:
      "https://superherobrasil.com.br/wp-content/uploads/2019/08/Obi-Wan-Kenobi.jpg",
  },

  {
    nome: "Darth Sidious",
    descricao:
      "- Darth Sidious é o principal antagonista da franquia Star Wars (mais especificamente da Saga Skywalker), tendo sido o principal vilão na trilogia prequel, um dos dois principais junto com Darth Vader na trilogia original e um dos dois principais, juntamente com Kylo Ren, na trilogia de sequência",
    afiliacao: "ordem sith, império galáctico",
    corDoSabre: "vermelho",
    image:
      "https://www.tvgroove.com/wp-content/uploads/2020/07/darthsidius.jpg",
  },

  {
    nome: "Mestre Yoda",
    descricao:
      "- Yoda é um membro de uma espécie de nome desconhecido. Ele foi o Grão Mestre da Ordem Jedi durante as Guerras Clônicas, um dos membros mais importantes do Alto Conselho Jedi nos últimos dias da República Galáctica, e um dos mais sábios e poderosos Jedi de todos os tempos.",
    afiliacao: "ordem jedi, república galáctica",
    corDoSabre: "verde",
    image:
      "https://townsquare.media/site/442/files/2012/04/Yoda.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
  },
];
