const lista = document.getElementById("lista");

const listarPersonagens = async () => {
  const result = await axios.get("https://rickandmortyapi.com/api/character");
  atualizarLista(result.data.results);
};

listarPersonagens();

const atualizarLista = (personagens) => {
  lista.innerHTML = "";
  for (let personagem of personagens) {
    const personagemHtml = `
    <div class="personagem col-12 col-sm-6">
        <div class="row">
        <div class="col-3 imagem-personagem"></div>
        <div class="col-9 conteudo">
            <h2>${personagem.name}</h2>
            <p>Vivo - Dog</p>
            <h3></h3>
        </div>
        </div>
    </div>
    `;

    lista.innerHTML += personagemHtml;
  }
};
