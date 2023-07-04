import {
  MainContainer,
  MainImg,
  MainTextContainer,
  ImgContainer,
} from "../componentStyle/MainPageStyled";
import working from "../assets/working.png";

export const MainPage = () => {
  return (
    <>
      <MainContainer>
        <ImgContainer>
          <MainImg src={working} alt="working" />
        </ImgContainer>

        <MainTextContainer>
          <h1>Hello,</h1>
          <h1>I'M RITA CINCILEVIČIENĖ</h1>
        </MainTextContainer>
      </MainContainer>
    </>
  );
};
