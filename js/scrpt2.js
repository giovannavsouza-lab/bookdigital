/* ==========================================================================
   ARQUIVO: script.js
   PROJETO: Os Contos de Beedle, o Bardo
   DESCRIÇÃO: Contém toda a lógica interativa da página: os dados dos
   contos, a troca de "skin" das casas de Hogwarts, a navegação entre a
   capa e o livro aberto, e a exibição de cada conto selecionado.

   ÍNDICE DESTE ARQUIVO:
     1. Dados dos Contos (array "contos")
     2. Troca de Skin das Casas
     3. Navegação (abrir/fechar livro)
     4. Montagem do Menu de Contos
     5. Exibição de um Conto Selecionado
     6. Inicialização (evento de carregamento da página)
   ========================================================================== */


/* ==========================================================================
   1. DADOS DOS CONTOS
   --------------------------------------------------------------------------
   Array de objetos com as informações de cada uma das 5 histórias do
   livro. Cada objeto contém:
     - id:     identificador numérico único do conto
     - titulo: nome exibido no botão do menu e no cabeçalho do leitor
     - resumo: texto principal exibido na área de leitura
     - nota:   comentário extra atribuído a Alvo Dumbledore
   ========================================================================== */
   const contos = [
    {
        id: 0,
        titulo: "O Conto dos Três Irmãos",
        resumo: "Três irmãos bruxos usam sua magia para cruzar um rio perigoso e desafiam a própria Morte. Impressionada (e astuta), a Morte finge parabenizá-los e oferece um presente a cada um: a Varinha das Varinhas, a Pedra da Ressurreição e a Capa da Invisibilidade. Juntos, esses objetos formam as lendárias Relíquias da Morte.",
        nota: "Nota de Alvo Dumbledore: Essa história demonstra como a arrogância humana diante da mortalidade costuma ser nossa ruína. Apenas o terceiro irmão entendeu que o verdadeiro domínio sobre a morte é aceitá-la como uma nova jornada."
    },
    {
        id: 1,
        titulo: "O Feiticeiro e o Caldeirão Saltitante",
        resumo: "Um bruxo bondoso usava seu caldeirão mágico para curar os trouxas vizinhos. Após sua morte, seu filho egoísta herda o caldeirão e se recusa a ajudar a vila. Como punição, o caldeirão cria um pé de metal, ganha vida e começa a manifestar fisicamente todas as doenças e problemas dos vizinhos não ajudados, forçando o jovem a mudar de atitude.",
        nota: "Nota de Alvo Dumbledore: Um conto moral que ensina aos jovens bruxos a importância da compaixão e da convivência harmoniosa e caridosa com a comunidade trouxa."
    },
    {
        id: 2,
        titulo: "A Fonte da Sorte",
        resumo: "Três bruxas e um cavaleiro trouxa azarado enfrentam vários desafios para alcançar a Fonte da Sorte, um lugar mágico que supostamente concede felicidade eterna a apenas uma pessoa por ano. Ao final da jornada, eles percebem que as dificuldades superadas no caminho já resolveram seus problemas.",
        nota: "Nota de Alvo Dumbledore: Provavelmente o mais popular dos contos. Mostra que a magia real muitas vezes não vem de feitiços, mas do esforço, da coragem e da amizade."
    },
    {
        id: 3,
        titulo: "O Coração Peludo do Feiticeiro",
        resumo: "Um jovem e rico bruxo decide nunca se apaixonar para não sofrer. Usando Artes Das Trevas, ele arranca o próprio coração e o esconde em uma caixa. Anos depois, ele tenta encontrar uma noiva para provar que é perfeito, mas seu coração, agora peludo e selvagem devido ao isolamento, o leva a cometer atos trágicos e monstruosos.",
        nota: "Nota de Alvo Dumbledore: Este conto é um aviso sombrio. Ele ilustra o perigo terrível de se isolar dos sentimentos mais puros. Um homem que rejeita sua própria humanidade transforma-se em uma fera."
    },
    {
        id: 4,
        titulo: "Babbitty, a Coelha e seu Toco Gargalhante",
        resumo: "Um rei trouxa ganancioso quer ser o único a controlar a magia e contrata um charlatão para ensiná-lo. Babbitty, a lavadeira da corte que é uma bruxa de verdade, sabota os planos do charlatão. No fim, ela se transforma em uma coelha e se esconde em um toco de árvore, zombando do rei e garantindo a proteção dos bruxos do reino.",
        nota: "Nota de Alvo Dumbledore: Embora historicamente impreciso, este conto celebra a inteligência e a resiliência dos bruxos em épocas de perseguição, destacando a habilidade rara dos Animagos."
    }
];


/* ==========================================================================
   2. TROCA DE SKIN DAS CASAS
   --------------------------------------------------------------------------
   Aplica a classe CSS correspondente à casa escolhida (ex.: "skin-sonserina")
   no elemento ".container". Como o style.css define variáveis de cor
   diferentes para cada uma dessas classes, isso muda instantaneamente a
   paleta de cores de toda a página interna.
   Chamada pelos botões redondos do "seletor de casas" no topo do livro.
   ========================================================================== */
function mudarCasa(nomeDaSkin) {
    const container = document.getElementById("tela-principal");

    // Remove qualquer classe de skin ativa anteriormente,
    // voltando o elemento para apenas a classe base ".container"
    container.className = "container";

    // Adiciona a nova classe de skin selecionada (se houver alguma)
    container.classList.add(nomeDaSkin);
}


/* ==========================================================================
   3. NAVEGAÇÃO (abrir/fechar livro)
   --------------------------------------------------------------------------
   Controla a transição entre a tela da capa ("tela-capa") e a tela do
   livro aberto ("tela-principal"), simplesmente alternando o "display"
   de cada uma delas.
   ========================================================================== */

// Chamada pelo botão "Abrir Livro ✨" na capa
function abrirLivro() {
    document.getElementById("tela-capa").style.display = "none";
    document.getElementById("tela-principal").style.display = "block";
}

// Chamada pelo botão "Fechar Livro" dentro do livro aberto
function voltarInicio() {
    document.getElementById("tela-principal").style.display = "none";
    document.getElementById("tela-capa").style.display = "flex";

    // Reseta a skin para o padrão ao fechar o livro
    mudarCasa('');

    // Reseta os textos do leitor para o estado inicial (nenhum conto selecionado)
    document.getElementById("contoTitulo").innerText = "Selecione uma história";
    document.getElementById("contoTexto").innerText = "Clique em um dos contos clássicos ao lado para ler o resumo e as observações arquivadas por Hogwarts.";
    document.getElementById("contoNota").style.display = "none";

    // Remove o destaque visual ("active") de qualquer botão de conto que estivesse selecionado
    const botoes = document.querySelectorAll(".btn-conto");
    botoes.forEach(b => b.classList.remove("active"));
}


/* ==========================================================================
   4. MONTAGEM DO MENU DE CONTOS
   --------------------------------------------------------------------------
   Cria dinamicamente, a partir do array "contos", um botão para cada
   história e os insere dentro do elemento "menuContos". Cada botão,
   ao ser clicado, chama exibirConto() passando o id do conto e o
   próprio botão (para poder marcá-lo como "active").
   ========================================================================== */
function carregarMenu() {
    const menuContainer = document.getElementById("menuContos");
    menuContainer.innerHTML = ""; // Limpa o menu antes de recriá-lo

    contos.forEach(conto => {
        const botao = document.createElement("button");
        botao.classList.add("btn-conto");
        botao.innerText = conto.titulo;
        botao.onclick = () => exibirConto(conto.id, botao);
        menuContainer.appendChild(botao);
    });
}


/* ==========================================================================
   5. EXIBIÇÃO DE UM CONTO SELECIONADO
   --------------------------------------------------------------------------
   Busca o conto correspondente ao "id" recebido e atualiza o título,
   o resumo e a nota de Dumbledore na área de leitura. Também atualiza
   qual botão do menu está marcado com a classe "active".
   ========================================================================== */
function exibirConto(id, botaoSelecionado) {
    const conto = contos.find(c => c.id === id);

    if (conto) {
        document.getElementById("contoTitulo").innerText = conto.titulo;
        document.getElementById("contoTexto").innerText = conto.resumo;

        const notaDiv = document.getElementById("contoNota");
        notaDiv.innerText = conto.nota;
        notaDiv.style.display = "block";

        // Remove o destaque de todos os botões e aplica apenas no selecionado
        const botoes = document.querySelectorAll(".btn-conto");
        botoes.forEach(b => b.classList.remove("active"));
        botaoSelecionado.classList.add("active");
    }
}


/* ==========================================================================
   6. INICIALIZAÇÃO
   --------------------------------------------------------------------------
   Assim que a página termina de carregar, monta o menu de contos
   automaticamente (sem precisar de nenhuma ação do usuário).
   ========================================================================== */
window.onload = carregarMenu;
