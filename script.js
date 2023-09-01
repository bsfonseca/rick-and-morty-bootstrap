const lista = document.getElementById("lista");

const listarPersonagens = async () => {
  const result = await axios.get("https://rickandmortyapi.com/api/character");
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
    <div class="personagem col-12 col-sm-6">
        <div class="row">
        <div class="col-3 imagem-personagem"></div>
        <div class="col-9 conteudo">
            <h2>${personagem.name}</h2>
            <p>${personagem.species}</p>
            <p  class="${vivo}" >${personagem.status}</p>
        </div>
        </div>
    </div>
    `;

    lista.innerHTML += personagemHtml;
  }
};
