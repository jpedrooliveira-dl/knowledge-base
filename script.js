let cardContainer = document.querySelector(".card-container");
let searchInput = document.querySelector(".search-container input");
let dados = [];

// Adiciona um evento que "escuta" o pressionar de uma tecla no campo de busca
searchInput.addEventListener("keydown", function(event) {
    // Se a tecla pressionada for "Enter", executa a função de busca
    if (event.key === "Enter") {
        iniciarBusca();
    }
});

async function iniciarBusca() {
    // Se os dados ainda não foram carregados, busca do JSON.
    if (dados.length === 0) {
        try {
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Falha ao carregar os dados:", error);
            cardContainer.innerHTML = `<p>Erro ao carregar as informações. Tente novamente mais tarde.</p>`;
            return;
        }
    }

    const termoBusca = searchInput.value.toLowerCase();

    const resultados = dados.filter(item => 
        item.nome.toLowerCase().includes(termoBusca) ||
        item.descricao.toLowerCase().includes(termoBusca) ||
        item.data_criacao.toLowerCase().includes(termoBusca)
    );

    renderizarCards(resultados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os resultados anteriores

    for (let dado of dados) {
        let article = document.createElement("article");
        article.innerHTML = `
        <img class="imgLogo"  src=${dado.logo} alt="logo">
        <h2>${dado.nome}</h2>
        <p>${dado.data_criacao}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        
        `

        cardContainer.appendChild(article)
    }
}
