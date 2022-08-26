const info = [
    {
        nome: 'Darth Vader',
        descric: 'Darth Vader (anteriormente chamado Anakin Skywalker) é um personagem  da saga de ficção científica Star Wars ; um dos protagonistas centrais da trama que começa no lado da luz mas é corrompido pro lado sombrio',
        afiliacao: 'darth vader -- ordem sith, império galáctico',
        cordosabre: 'darth vader -- vermelho',
        imgC: 'https://www.hdwallpaperslife.com/wp-content/uploads/2019/04/new-darth-vader-3z-1680x1050.jpg'
    },
    
    {
        nome: 'Luke Skywalker',
        descric: 'Luke Skywalker é o protagonista da trilogia original da série Star Wars, Um personagem essencial e importante na luta da Aliança Rebelde contra o Império Galáctico sendo um dos últimos jedis existentes',
        afiliacao: 'luke skywalker -- ordem jedi',
        cordosabre: 'luke skywalker -- verde',
        imgC: 'https://wallpapercave.com/wp/wp3800518.jpg'
    },
    
    {
        nome: 'Darth Maul',
        descric: 'Darth Maul é um Zabrak do planeta Dathomir no universo fictício de Star Wars. Os chifres são a marca registrada de todos os Zabraks, com a face tatuada em vermelho e preto sua aparência é maléfica, ele possui o medo como aliado, Implacável e próximo da perfeição',
        afiliacao: 'darth maul -- ordem sith',
        cordosabre: 'darth maul --  vermelho',
        imgC: 'https://wallpapertag.com/wallpaper/full/1/2/0/374617-darth-maul-wallpaper-2481x1520-for-ipad.jpg'
    },
    
    {
        nome: 'Obi-Wan Kenobi',
        descric: 'Obi-Wan Kenobi é um personagem fictício da saga de ficção científica Star Wars, que participou dos seis primeiros filmes, é um dos poucos personagens da série a aparecer nos seis primeiros episódios, dada a sua importância no enredo',
        afiliacao: 'obi-wan kenobi -- ordem jedi, república galáctica',
        cordosabre: 'obi-wan kenobi -- azul',
        imgC: 'https://superherobrasil.com.br/wp-content/uploads/2019/08/Obi-Wan-Kenobi.jpg'
    },
    
    {
        nome: 'Darth Sirius',
        descric: 'Darth Sidious é o principal antagonista da franquia Star Wars (mais especificamente da Saga Skywalker), tendo sido o principal vilão na trilogia prequel, um dos dois principais junto com Darth Vader na trilogia original e um dos dois principais, juntamente com Kylo Ren, na trilogia de sequência',
        afiliacao: 'darth sidius -- ordem sith, império galáctico',
        cordosabre: 'darth sidius -- vermelho',
        imgC: 'https://images.saymedia-content.com/.image/t_share/MTc1MTEwOTE1NTg5NjEyNjM5/five-unsolved-star-wars-mysteries.jpg'
    },
    
    {
        nome: 'Mestre Yoda',
        descric: 'Yoda é um membro de uma espécie de nome desconhecido. Ele foi o Grão Mestre da Ordem Jedi durante as Guerras Clônicas, um dos membros mais importantes do Alto Conselho Jedi nos últimos dias da República Galáctica, e um dos mais sábios e poderosos Jedi de todos os tempos.',
        afiliacao: 'mestre yoda -- ordem jedi, república galáctica',
        cordosabre: 'mestre yoda -- verde',
        imgC: 'https://townsquare.media/site/442/files/2012/04/Yoda.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89'
    }, 
    ];
    
    var containerPai = document.createElement('section');
    containerPai.id = "cardsp"
    var nomeCard = document.createElement('p');
    var descricaoCard = document.createElement('p');
    var afiliacaoCard = document.createElement('p');
    var cordosabreCard = document.createElement('p');
    var imagemCard = document.createElement('img');
    
function criaCard(){
    
        for(const criar of info){
           
           
            containerPai.appendChild(nomeCard,descricaoCard, afiliacaoCard, cordosabreCard,imagemCard)
            document.body.appendChild(containerPai);

        }
    };


    
function preencher(){
        for(const dadosConteudo of info){
           
            console.log("formulario enviado");

    let tituloCard = ` 
    <p>"${dadosConteudo.nome}"<p>
    <p>"${dadosConteudo.descric}"<p>
    <p>"${dadosConteudo.afiliacao}"<p>
    <p>"${dadosConteudo.cordosabre}"<p>
    <img src="${dadosConteudo.imgC}"/>
`
            document.getElementById("cardsp").innerHTML += tituloCard;
        };
    };

export { criaCard, preencher };