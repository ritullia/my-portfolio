import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(#e9eaf0, #cdd2d6);
  width: auto;
  height: 70vh;
  border-radius: 35px;
  box-shadow: 8px 10px 30px #dddddd;
`;

export const MainImg = styled.img`
  display: block;
  max-width: 100%;
  position: absolute;
  /* transform: translate(auto, 20%); */

  @media only screen and (max-width: 1024px) {
    width: 640px;
  }
  @media (max-width: 640px) {
    width: 340px;
  }
  @media (min-width: 641px) {
    width: 640px;
  }
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
