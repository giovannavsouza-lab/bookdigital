function abrirLivro(){
    document.getElementById("tela-capa").style.display = "none";
    document.getElementById("tela-principal").style.display = "block";
} 

function voltarInicio(){
    document.getElementById("tela-principal").style.display = "none";
    document.getElementById("tela-capa").style.display = "flex";

    const botoes = document.querySelectorAll(".btn-conto");
    botoes.forEach(b => b.classList.remove("active"));
}

function mudarDeus(nomeDaSkin) {
    const container = document.getElementById("tela-principal");
  
    container.className = "container";
    
    if (nomeDaSkin) {
        container.classList.add(nomeDaSkin);
    }
}

const contos = [
    {
        id: 0,
        titulo: "Apollo. Deus da música, medicina e do sol",
        resumo: "Segundo a mitologia grega, Apolo era filho de Zeus com Leto, uma titânide, filha de Febe e Céos. Leto engravidou de Zeus e deu à luz Apolo e Ártemis na ilha flutuante de Delos. Isso aconteceu, porque tinha ciúmes de Zeus e, enfurecida, Hera proibiu que a Mãe-Terra, Gaia, permitisse que Leto tivesse seus filhos na Terra.Para socorrer Leto, o deus Poseidon decidiu criar uma ilha flutuante chamada Delos. Como a ilha não estava presa ao solo, Gaia nada podia fazer e lá Leto deu à luz seus dois filhos. Após seu nascimento, Apolo bebeu um néctar dos deuses e comeu ambrosia e depois disso Apolo deixou de ser um bebê e tornou-se um homem adulto.Além dessa proibição, Hera também enviou a serpente Píton para que perseguisse Leto. Apolo, um exímio manejador de arco e flecha foi o responsável por matar a serpente Píton. Ele encontrou a serpente próximo ao Monte Parnaso e a matou com três flechas: uma no olho, outra no peito e outra na boca.A vitória de Apolo sobre a Píton rendeu-lhe fama e reconhecimento. A população de Delfos, local próximo ao Monte Parnaso, ficou grata por Apolo ter matado a serpente e, em homenagem ao feito, decidiu construir um templo: o Oráculo de Delfos. Lá as pessoas que veneravam Apolo iam prestar-lhe culto e obter profecias sobre o futuro"  

    },
    {
        id: 1,
        titulo: "Athena. Deusa da sabedoria",
        resumo: "Na mitologia grega, existem duas versões para narrar o nascimento de Atena. Uma das versões fala que Atena era filha de Zeus com Métis, deusa da saúde e da prudência, sendo que Métis ficou conhecida como a primeira esposa de Zeus. Depois que Métis engravidou, Gaia (personificação da Terra) teria avisado Zeus que seu filho poderia se voltar contra ele. Isso perturbou Zeus, pois ele tinha feito isso contra seu pai, Cronos. Assim, Zeus decidiu enganar Métis e a engoliu por inteiro, mas a deusa conseguiu dar à luz dentro de Zeus. Atena teria nascido ao sair da cabeça de seu pai já em sua forma adulta e munida de sua armadura e armas.Outra versão apresenta a deusa como filha exclusivamente de Zeus. Fala-se que antes do nascimento de Atena, Zeus teria sentido dores de cabeça terríveis, o que fez com que Hefesto, deus da metalurgia, abrisse a cabeça do deus supremo com um machado. Atena teria nascido depois disso. Desse modo, em ambas as versões, Atena nasceu da cabeça de Zeus."
}, 
    {
        id: 2,
        titulo: "Hermes. Mensageiro dos deuses e deus da velocidade",
        resumo: "Na mitologia, Hermes era filho de Zeus com uma ninfa chamada Maia. Os gregos acreditavam que ele havia nascido no monte Cilene, localizado na Arcádia. Uma passagem da mitologia grega conta que esse deus roubou gado de seu irmão Apolo quando ainda era um bebê. Hermes escondeu os animais em uma caverna, mas eventualmente foi descoberto. Depois dos animais terem sido encontrados, Zeus e outros deuses olímpicos decidiram que Hermes poderia continuar com os animais se ele desse sua lira para Apolo. A lira que Apolo recebeu fora fabricada pelo próprio Hermes e produzida de cascos de tartarugas. Do ponto de vista histórico, acredita-se que Hermes era uma divindade relacionada com a fertilidade que surgiu na Arcádia e que foi incorporada à religiosidade dos gregos antigos. Sabe-se que ele já era cultuado pelos micênicos, pois foram encontradas inscrições desses povos que datam de XV a.C. a XIII a.C. e que o mencionam."
    },
    {
        id: 3,
        titulo: "Afrodite. Deusa da beleza e do amor",
        resumo: "Na mitologia grega, a versão mais famosa do seu nascimento contada por Hesíodo, ela nasceu quando Cronos cortou os órgãos genitais de Urano e arremessou-os no mar; da espuma (aphros) surgida ergueu-se Afrodite. No entanto, para Homero, anterior a Hesíodo, ela era filha de Zeus e Dione. Durante o período de Platão, os gregos haviam solucionado este conflito afirmando que Afrodite tem dois aspectos diferentes, sem individualizar o culto: a primeira Afrodite Urânia, seria a Afrodite celeste, do amor divino. A filha de Zeus seria a Afrodite do amor comum, do povo, denominada Afrodite Pandemos, de onde emanava o amor físico e desejos lascivos. Os principais mitos envolvendo a deusa são a saga da Guerra de Tróia, onde ela protegeu a cidade de Tróia e os amantes Helena e Páris; sua perseguição a mortais que a ofenderam, como Psiquê e Hipólito; as bênçãos dadas a fiéis como Pigmaleão para viverem com suas amadas; e seus diversos casos amorosos, como Ares e Adônis."
},
];

function exibirConto(id, botaoSelecionado) {
    const conto = contos.find(c => c.id === id);

    if (conto) {
        document.getElementById("contoTitulo").innerText = conto.titulo;
        document.getElementById("contoTexto").innerText = conto.resumo;

       
        const botoes = document.querySelectorAll(".btn-conto");
        botoes.forEach(b => b.classList.remove("active"));
        botaoSelecionado.classList.add("active");
    }
}
window.onload = carregarMenu;