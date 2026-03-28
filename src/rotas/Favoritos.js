import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFavoritos, deleteFavorito } from "../servicos/favoritos"; // Importa a lógica da pasta de serviços
import livroImg from "../imagens/livro.png";

const FavoritosContainer = styled.div`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 470px;
  width: 100%;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
  }
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  // Função para deletar e atualizar a lista instantaneamente
  async function deletarFavorito(id) {
    await deleteFavorito(id);
    await fetchFavoritos(); // Chamamos a lista de novo para o livro sumir da tela
    alert(`Livro de id:${id} removido com sucesso!`);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <FavoritosContainer>
      <h2>Meus Livros Favoritos:</h2>
      {favoritos.length !== 0 ? (
        favoritos.map((favorito) => (
          // Ao clicar no card do favorito, ele será removido
          <Resultado
            key={favorito.id}
            onClick={() => deletarFavorito(favorito.id)}
          >
            <img src={livroImg} alt="Capa do livro" />
            <p>{favorito.nome}</p>
          </Resultado>
        ))
      ) : (
        <p style={{ color: "white" }}>Você ainda não tem favoritos.</p>
      )}
    </FavoritosContainer>
  );
}

export default Favoritos;
