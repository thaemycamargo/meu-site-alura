const caixaPrincipal = document. querySelector(".caixa-principal")
const caixaPerguntas = document. querySelector (".caixa-perguntas")
const caixasAlternativas = document. querySelector (".caixa-aleternativas")
const caixaResultado = document. querySelector (".caixa-resultado")
const textoResultado = document. querySelector (".texto-resultado")

const perguntas = [
    {
        enunciado: "pergunta 1",
        alterativas:[
            "Alternativa 1",
            "Alternativa 2",
        ]
    },
    {
        enunciado: "pergunta 2",
        alterativas:[
            "Alternativa 1",
            "Alternativa 2",
        ]
    }
    
]
let atual = 0
let perguntaAtual
function mostrarPergutas () {
perguntaAtual = perguntas[atual]                                            
caixaPerguntas.textContent = perguntaAtual.enunciado
}


mostrarPergutas()