import styled from "styled-components";
import * as palette from "./ColorsVariables";

export const MainContainer = styled.div`
  margin: 80px;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  max-width: auto;
  background-color: ${palette.elementColor};
  border-radius: 40px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 840px) {
  }
`;

export const MainImg = styled.img`
  width: 640px;

  @media (max-width: 640px) {
    width: 440px;
  }
`;

export const MainTextContainer = styled.div`
  font-family: "Raleway", sans-serif;
  border: 1px solid black;
  color: ${palette.fontColor};
  margin: 3rem;
`;
