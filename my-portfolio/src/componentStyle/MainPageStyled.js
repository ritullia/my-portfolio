import styled from "styled-components";
import * as palette from "./ColorsVariables";

export const MainContainer = styled.div`
  margin: 80px;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  /* background-color: ${palette.elementColor}; */
  border-radius: 40px;
  border: 1px solid ${palette.elementColor};

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 840px) {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-20%, -45%);
  }
`;

export const MainImg = styled.img`
  width: 640px;

  @media (max-width: 640px) {
    width: 440px;
  }

  @media only screen and (max-width: 480px) {
    width: 240px;
  }
`;

export const MainTextContainer = styled.div`
  font-family: "Raleway", sans-serif;
  color: ${palette.fontColor};
  margin: 3rem;
`;
