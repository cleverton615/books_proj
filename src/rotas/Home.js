import Pesquisa from "../componentes/Pesquisa";
import UltimoLancamentos from "../componentes/UltimoLancamentos";
import styled from "styled-components";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimoLancamentos />
    </AppContainer>
  );
}

export default Home;
