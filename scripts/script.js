let formulario = document.createElement('form');
let titulo = document.createElement('input');
let descricao = document.createElement('input');
let link = document.createElement('input');
let botao = document.createElement('button');
let sabre = document.createElement('input');

document.body.appendChild(formulario)

formulario.appendChild(titulo);
titulo.id = 'titulof';
document.getElementById('titulof');

formulario.appendChild(descricao);
descricao.id = 'desc';
document.getElementById('desc');

formulario.appendChild(link);
link.id = 'lk';
document.getElementById('lk');
link.setAttribute('src');

formulario.appendChild(sabre);
sabre.id = 'sb';
document.getElementById('sb');

formulario.appendChild(botao);
botao.id = 'but';
document.getElementById('but');

function criarform2(){
    let card = document.createElement('div');
    let tituloCard = document.getElementsById('titulof');
    let imagem = document.getElementsById('lk');
    let descricaoCard = document.getElementsById('desc');

    document.body.appendChild(card);
    card.id = 'card1';
    document.card.appendChild(tituloCard);
    document.card.appendChild(imagem);
    document.card.appendChild(descricaoCard);
}

botao.addEventListener(criarform2);

formulario.id = 'forms';
document.getElementById('forms');