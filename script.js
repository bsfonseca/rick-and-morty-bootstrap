const lista = document.getElementById("lista");
let listaPersonagens = [];

let page = 1;

// Criando referencia a um modal criado no HTML
const modalPersonagem = new bootstrap.Modal("#personagemModal");

// Funcao que abre ou fecha o modal
// modalPersonagem.toggle();

const listarPersonagens = async () => {
  const result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
  atualizarLista(result.data.results);
};

listarPersonagens();

const atualizarLista = (personagens) => {
  lista.innerHTML = "";
  listaPersonagens = personagens;

  for (let personagem of personagens) {
    let vivo = "vivo";

    if (personagem.status == "Dead") {
      vivo = "morto";
    } else if (personagem.status == "unknown") {
      vivo = "desconhecido";
    }

    const personagemId = `personagem-${personagem.id}`;

    const personagemHtml = `
    <div class="personagem col-12 col-md-6" id="${personagemId}" onclick="abrirModal('${personagem.id}')">
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
    alert("Não é possível voltar da página 1!");
    return;
  }

  page--;
  listarPersonagens();
};

const abrirModal = (id) => {
  const personagem = listaPersonagens[id - 1];

  const h3 = document.querySelector("#modal-body h3");
  h3.innerHTML = personagem.name;

  const p = document.querySelector("#modal-body p");
  p.innerHTML = personagem.species;

  const imagem = document.querySelector("#modal-body img");
  imagem.setAttribute("src", personagem.image);

  modalPersonagem.toggle();
};
