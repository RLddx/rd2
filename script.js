listaPerguntas = [
perguntas = [
  {
    pergunta: "Qual o maior ser vivo do mundo?",
    opcoes: [
      "Baleia Azul",
      "Fungo de mel",
      "Elefante",
      "Girafa"
    ],
    correta: 1
  },
],
]
pergunta = null

btninciar = document.querySelector(".botaoiniciar")
btninciar.addEventListener("click", iniciarJogo)

function iniciarJogo() {
  telaInicial = document.querySelector(".primeiratela")
  telaInicial.style.display = "none"
  
  telapeg = document.querySelector(".perguntatela")
  telapeg.style.display = "block"
  
  mostrarPergunta()
}

function mostrarPergunta() {
  pergunta = listaPerguntas[0]
  
  console.log(pergunta.pergunta)
}
