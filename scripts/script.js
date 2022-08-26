let formulario = document.createElement('form');
formulario.classList.toggle('formulario');
let titulo = document.createElement('input');
titulo.classList.toggle('titulo');
let descricao = document.createElement('textarea');
descricao.classList.toggle('descricao');
let link = document.createElement('input');
link.classList.toggle('link');
let sabre = document.createElement('input');
sabre.classList.toggle('sabre');
formulario.appendChild(sabre);
let botao = document.createElement('button');
botao.classList.toggle('botao');

let botaoPreencher = document.createElement('button');
botaoPreencher.classList.toggle('botao');

let lbl = document.createTextNode("Enviar Dados");
botao.appendChild(lbl);

document.body.appendChild(formulario);

formulario.id = 'forms';
document.getElementById('forms');

let lbltitulo = document.createTextNode("Digite o nome do personagem: ");
formulario.appendChild(lbltitulo);
formulario.appendChild(titulo);

titulo.id = 'titulof';
titulo.setAttribute("required",true)
document.getElementById('titulof');

let lbltituloDesc = document.createTextNode("Digite a descrição do personagem: ");
formulario.appendChild(lbltituloDesc);
formulario.appendChild(descricao);
descricao.id = 'desc';
descricao.setAttribute("required",true);

document.getElementById('desc');

let lbltituloLink = document.createTextNode("Insira a URL da imagem: ");
formulario.appendChild(lbltituloLink);
formulario.appendChild(link);
link.id = 'lk';
link.setAttribute("required",true);
document.getElementById('lk');

let lbltituloSabre = document.createTextNode("Cor do Sabre: ");
formulario.appendChild(lbltituloSabre);
formulario.appendChild(sabre);
sabre.id = 'sb';
sabre.setAttribute("required",true);
document.getElementById('sb');

formulario.appendChild(botao);
botao.id = 'but';
document.getElementById('but');


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

botaoPreencher.id = 'botaoPreencher';
document.getElementById('botaoPreencher');
let botaoPreencherDados = document.createTextNode("Preencher Automaticamente");
botaoPreencher.appendChild(botaoPreencherDados);

let bloco = document.createElement('section');
formulario.appendChild(botaoPreencher);

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
    });

    
let card = document.createElement('section');
card.id = 'cards'
document.body.appendChild(card);