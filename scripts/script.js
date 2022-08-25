let formulario = document.createElement('form');
formulario.classList.toggle('formulario');
let lbltitulo = document.createTextNode("Digite o nome do personagem: ");
formulario.appendChild(lbltitulo);
let titulo = document.createElement('input');
titulo.classList.toggle('titulo');
let descricao = document.createElement('input');
descricao.classList.toggle('descricao');
let link = document.createElement('input');
link.classList.toggle('link');
let botao = document.createElement('button');
botao.classList.toggle('botao');
let lbl = document.createTextNode("Enviar Dados");
botao.appendChild(lbl);
let sabre = document.createElement('input');
sabre.classList.toggle('sabre');
document.body.appendChild(formulario)

formulario.id = 'forms';
document.getElementById('forms');

formulario.appendChild(titulo);

titulo.id = 'titulof';
titulo.setAttribute("required",true)
document.getElementById('titulof');

formulario.appendChild(descricao);
descricao.id = 'desc';
descricao.setAttribute("required",true);

document.getElementById('desc');

formulario.appendChild(link);
link.id = 'lk';
link.setAttribute("required",true);
document.getElementById('lk');

formulario.appendChild(sabre);
sabre.id = 'sb';
sabre.setAttribute("required",true);
document.getElementById('sb');

formulario.appendChild(botao);
botao.id = 'but';
document.getElementById('but');

let card = document.createElement('section');
card.id = 'cards'
document.body.appendChild(card);

formulario.addEventListener("submit", (evento) => {
    
evento.preventDefault()

    console.log("formulario enviado");

    let tituloCard = `
    <img src="${link.value}"/>
    <span>"${titulo.value}"</span>
    <span>"${descricao.value}"</span>
    <span>"${sabre.value}"</span>
    `
    document.getElementById("cards").innerHTML += tituloCard;
    link.value = null
    titulo.value = null
    descricao.value = null
    sabre.value = null
});

/*botao.addEventListener('submit',function criar1(){
    console.log("Formulario Criado");
    criar1.preventDefault();
    criarform2(formulario,titulo,descricao,link,sabre)});*/