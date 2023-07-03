import { MainContainer, MainImg } from "../componentStyle/MainPageStyled";
import working from "../assets/working.png";

export const MainPage = () => {
  return (
    <>
      <MainContainer>
        <MainImg src={working} alt="" />

        <div>
          <h1>Hello,</h1>
          <h1>I'M RITA CINCILEVIČIENĖ</h1>
        </div>
      </MainContainer>
    </>
  );
};
