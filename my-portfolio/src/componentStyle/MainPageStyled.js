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

  @media (max-width: 1024px) {
    width: 640px;
  }
  @media (max-width: 841px) {
    width: 340px;
    margin: 160px;
  }
  @media (min-width: 840px) {
    width: 640px;
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  display: block;
  border: 2px blue solid;
  width: auto;
  height: 100%;
`;

export const MainImg = styled.img`
  max-width: 100%;

  position: absolute;
  object-fit: cover;
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
  color: #fff;
  position: relative;
  background-color: blue;
`;
