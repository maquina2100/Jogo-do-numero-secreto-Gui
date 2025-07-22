// let titulo = document.querySelector('h1'); //document quando eu quero selecionar algo no html 
// titulo.innerHTML = 'Jogo do número secreto'; //quando quero muadar o conteudo de um elemento no HTML uso o innerHTML e sem parenteses

// let paragrafo = document.querySelector('p'); // eu coloco o nome da tag que quero selecionar geralmente está com entre <mais alguma letra>
// paragrafo.innerHTML = 'Descubra o número secreto entre 1 e 100';
//function responsavel determinado por verificar alguma ação dentro do codigo
//precisa de parenteses para ser criada uma função no HTML

let numerosSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); 
campo.innerHTML = texto;
//responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1});  // responsavel pela leitura de textos no site 
}
//para evitar repetição de codigo
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'O jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha o número secreto entre 1 e ' + numeroMaximo);
}

exibirMensagemInicial();

console.log(numeroSecreto); 

function verificarChute() {
    let chute = document.querySelector('input').value; 
    console.log(chute == numeroSecreto); 
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns você acertou!'); // operador ternario : para trocar a palvra
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}`; // tem que usar crase ` acento para o lado esquerdo para ele considerar a string no texto para ser exibido a variavel
        exibirTextoNaTela('p', mensagemTentativas); // a string serve para guardar e manipular o texto no codigo
    document.getElementById('reiniciar').removeAttribute('disabled'); // remove o atributo disabled do botao reiniciar
    }   else {
        if (chute > numeroSecreto) {  //if sempre tem que ter o parantese
            exibirTextoNaTela('p', 'O número secreto é menor que ' + chute);
          }  else {
            exibirTextoNaTela('p', 'O número secreto é maior que ' + chute);
        }
        tentativas ++
        limparCampo();
    }            
}

function gerarNumeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * numeroMaximo + 1); // atribui valor para a let
    let qLista = numerosSorteados.length;
    
    if (qLista == 20) { // não usa ; quanto usa chaves{}
        numerosSorteados = [];
    }
    // atribui o tamanho da lista numerosSorteados a variavel qNumerosSorteados
    if (numerosSorteados.includes(numeroEscolido)) { // verifica se o numero já foi sorteado includes verifica se o numero está na lista
        return gerarNumeroAleatorio(); // se o numero já foi sorteado, chama a função novamente para gerar um novo numero
}   else {        // se usa push para add algo a lista, e se usa pop para remover algo da lista
    numerosSorteados.push(numeroEscolido); // se o numero não foi sorteado, adiciona o numero na lista de numeros sorteados]
    console.log(numerosSorteados); // exibe a lista de numeros sorteados no console
    return numeroEscolido; // se o numero não foi sorteado, retorna o numero escolhido
}
}


function limparCampo() {
    chute = document.querySelector('input'); // seleciona o campo input
    chute.value = '';
}
function newGame() {
    numeroSecreto = gerarNumeroAleatorio(); // gera um novo numero secreto
    console.log(numeroSecreto);
    limparCampo(); // limpa o campo de input
    tentativas = 1; // reseta o numero de tentativas
    exibirMensagemInicial(); //pra chamar alguma função apenas coloco o nome dela sem parenteses
    document.getElementById('reiniciar').setAttribute('disabled', 'true'); // adiciona o atributo disabled ao botao reiniciar e para setar de fato poe true ou false no atributo que está demarcado com reiniciar, ()
} 


//lista se usa [] para criar uma lista e o .length para saber quantos itens tem na lista 
