function abrirLivro(){
    document.getElementById("tela-capa").style.display = "none";
    document.getElementById("tela-principal").style.display = "block";
} 

function voltarInicio(){
    document.getElementById("tela-principal").style.display = "none";
    document.getElementById("tela-capa").style.display = "flex";

     mudarDeus(''); // Reseta os textos

   /* document.getElementById("contoTitulo").innerText = "Selecione uma história";
    document.getElementById("contoTexto").innerText = "Clique em um dos contos clássicos ao lado para ler o resumo e as observações arquivadas por Hogwarts.";
    document.getElementById("contoNota").style.display = "none";*/

    const botoes = document.querySelectorAll(".btn-conto");
    botoes.forEach(b => b.classList.remove("active"));
}
/* = 2. troca das skins dos deuses = */

function mudarDeus(nomeDaSkin) {
    const container = document.getElementById("tela-principal");

    // Remove qualquer classe de skin ativa anteriormente,
    // voltando o elemento para apenas a classe base ".container"
    container.className = "container";

    // Adiciona a nova classe de skin selecionada (se houver alguma)
    container.classList.add(nomeDaSkin);
}
