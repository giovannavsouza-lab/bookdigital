function abrirLivro(){
    document.getElementById("tela-capa").style.display = "none";
    document.getElementById("tela-principal").style.display = "block";
} 

function voltarInicio(){
    document.getElementById("tela-principal").style.display = "none";
    document.getElementById("tela-capa").style.display = "flex";
}