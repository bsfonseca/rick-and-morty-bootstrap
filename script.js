const lista = document.getElementById("lista");

const listarPersonagens = async () => {
  const result = await axios.get("https://rickandmortyapi.com/api/character");
  atualizarLista(result.data.results);
};

listarPersonagens();

const atualizarLista = (personagens) => {
  for (let personagem of personagens) {
    console.log(personagem);
  }
};
