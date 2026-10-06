const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está fazendo uma prova e percebe que esqueceu tudo o que estudou. O que você faz?",
        alternativas: [
            {
                texto: "Chuto com confiança e finjo que sei a resposta.",
                afirmacao: "Você descobriu a técnica secreta do chute profissional."
            },
            {
                texto: "Pego o celular escondido para pesquisar as respostas.",
                afirmacao: "Você escolheu o caminho da trapaça. A professora, porém, tem olhos de águia!"
            }
        ]
    },

    {
        enunciado: "Seu despertador toca às 6h da manhã. Qual é sua reação?",
        alternativas: [
            {
                texto: "Levanto imediatamente, cheio de energia!",
                afirmacao: "Você é oficialmente uma das poucas pessoas que gostam de acordar cedo."
            },
            {
                texto: "Coloco no modo soneca e volto a dormir.",
                afirmacao: "Você apertou a soneca apenas uma vez... ou pelo menos foi o que contou para sua mãe."
            }
        ]
    },

    {
        enunciado: "Você chega na escola e percebe que esqueceu de fazer o trabalho. O que você faz?",
        alternativas: [
            {
                texto: "Admito que esqueci e tento resolver a situação.",
                afirmacao: "Você foi honesto e sobreviveu para contar a história."
            },
            {
                texto: "Digo que o cachorro comeu o trabalho, mesmo sem ter cachorro.",
                afirmacao: "Uma desculpa clássica! Só faltou explicar como um cachorro imaginário comeu um arquivo digital."
            }
        ]
    },

    {
        enunciado: "Durante a aula, sua barriga começa a roncar tão alto que todo mundo escuta. O que você faz?",
        alternativas: [
            {
                texto: "Finjo que foi a cadeira fazendo barulho.",
                afirmacao: "Você culpou a cadeira. Uma estratégia ousada e completamente suspeita."
            },
            {
                texto: "Começo a rir e admito que estou com fome.",
                afirmacao: "Você aceitou a realidade: seu estômago também queria participar da aula."
            }
        ]
    },

    {
        enunciado: "Você encontra uma questão muito difícil na prova. Qual é a melhor atitude?",
        alternativas: [
            {
                texto: "Leio a questão novamente e tento raciocinar.",
                afirmacao: "Você respirou fundo e ativou o modo cérebro."
            },
            {
                texto: "Olho para a questão por 10 segundos esperando que a resposta apareça magicamente.",
                afirmacao: "Você tentou usar telepatia contra a prova. Infelizmente, a técnica ainda está em desenvolvimento."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacao + "\n\n";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado final 😂";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
