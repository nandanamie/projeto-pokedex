const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const darkmodeon = body.classList.contains("dark")

    body.classList.toggle("dark")

    if (darkmodeon) {      

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
})