const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultados = document.querySelector('.texto-resultados');

const perguntas= [
    { 
    enunciado:"Porque flores viram frutas?" ,
    alternativas: ["os frutos surgem para proteger a sementes e aumentar sua população",
    "As flores quando se sentem desidratadas viram frutas para carregar mais suco e manter as sementes seguras por mais tempo"
]

},
{ 
    enunciado:"Qual a comida mais consumida no mundo?" ,
    alternativas: ["Arroz",
    "feijão"
]

},   { 
    enunciado:"Qual a comida mais perigosa do mundo?" ,
    alternativas: ["Peixe-baiacu",
    "Peixe-boi-africano"
]

},   { 
    enunciado:"A taxa de metabolismo basal estima a quantidade de calorias que um homem/mulher gasta para manter as funções vitais funcionando,logo calcule quanto uma mulher de 46 anos com 1,77 de altura pesando 76 KG precisa para viver. fórmula: 655+(9,6xpeso em KG)+(1,8xaltura em cm)-(4,7xidade em anos)" ,
    alternativas: ["1487",
    "1624"
]

},

]
let atual=0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();

