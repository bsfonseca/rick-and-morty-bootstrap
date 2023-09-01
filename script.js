const lista = document.getElementById("lista");

const listarPersonagens = async () => {
  const result = await axios.get("https://rickandmortyapi.com/api/character");
  console.log(result.data.results);
};
listarPersonagens();
