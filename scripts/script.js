let formulario = document.createElement('form');
let titulo = document.createElement('input');
let descricao = document.createElement('input');
let link = document.createElement('img');
let botao = document.createElement('button');
let sabre = document.createElement('input');

document.body.appendChild(formulario)

formulario.id = 'forms';
document.getElementById('forms');

formulario.appendChild(titulo);

titulo.id = 'titulof';
document.getElementById('titulof');

formulario.appendChild(descricao);
descricao.id = 'desc';
document.getElementById('desc');

formulario.appendChild(link);
link.id = 'lk';
document.getElementById('lk');

formulario.appendChild(sabre);
sabre.id = 'sb';
document.getElementById('sb');

formulario.appendChild(botao);
botao.id = 'but';
document.getElementById('but');


botao.addEventListener("click",function criarform2(){
  
    let card = document.createElement('div');
    let tituloCard = document.createElement('div', () => document.getElementById("titulof").value);
    let imagem = document.createElement('div', () => document.getElementById("lk").value);
    let descricaoCard = document.createElement('div', () => document.getElementById("desc").value);

    document.body.appendChild(card);
    card.id = 'card1';
    card.appendChild(tituloCard);
    card.appendChild(imagem);
    card.appendChild(descricaoCard);
},
);

/*botao.addEventListener('submit',function criar1(){
    console.log("Formulario Criado");
    criar1.preventDefault();
    criarform2(formulario,titulo,descricao,link,sabre)});*/