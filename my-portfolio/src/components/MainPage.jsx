import {
  MainContainer,
  MainImg,
  MainTextContainer,
} from "../componentStyle/MainPageStyled";
import working from "../assets/working.png";

export const MainPage = () => {
  return (
    <>
      <MainContainer>
        <MainImg src={working} alt="" />

        <MainTextContainer>
          <h1>Hello,</h1>
          <h1>I'M RITA CINCILEVIČIENĖ</h1>
        </MainTextContainer>
      </MainContainer>
    </>
  );
};
