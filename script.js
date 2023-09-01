const lista = document.getElementById("lista");
let page = 1;

const listarPersonagens = async () => {
  const result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
  atualizarLista(result.data.results);
};

listarPersonagens();

const atualizarLista = (personagens) => {
  lista.innerHTML = "";
  for (let personagem of personagens) {
    let vivo = "vivo";

    if (personagem.status == "Dead") {
      vivo = "morto";
    } else if (personagem.status == "unknown") {
      vivo = "desconhecido";
    }

    const personagemHtml = `
    <div class="personagem col-12 col-md-6">
        <div class="personagem-row">
        <div class="imagem-personagem">
          <img src="${personagem.image}" alt="" />
        </div>
        <div class="conteudo">
            <h2>${personagem.name}</h2>
            <p>${personagem.species}</p>
            <div class="${vivo}">
              <span class="bloco"></span>
              <span>${personagem.status}</span>
            </div>
        </div>
        </div>
    </div>
    `;

    lista.innerHTML += personagemHtml;
  }
};

const proximaPage = () => {
  page++;
  listarPersonagens();
};

const anteriorPage = () => {
  if (page == 1) {
    alert("Você não pode voltar da página 1");
    return;
  }

  page--;
  listarPersonagens();
};
