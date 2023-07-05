import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 180px;
  display: flex;
  flex-flow: column wrap;
  background: linear-gradient(#e9eaf0, #cdd2d6);
  width: auto;
  height: 70vh;
  border-radius: 35px;
  box-shadow: 8px 10px 30px #dddddd;

  @media (max-width: 1200px) {
  }
  @media (max-width: 740px) {
    width: 640px;
    margin: 140px;
  }
  /* @media (min-width: 840px) {
    width: 640px;
    flex-direction: column;
  } */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  height: 100%;
  position: absolute;
`;

export const ImgContainer = styled.div`
  width: 640px;
  height: 640px;
  transform: translate(0px, 20%);
  /* border: 2px blue solid; */
  /* background-color: blue; */
  @media (max-width: 740px) {
    width: 540px;
    transform: translate(-120px, 5%);
  }
`;

export const MainImg = styled.img`
  max-width: 100%;
  object-fit: cover;

  /* @media (min-width: 741px) {
    width: 640px;
  } */
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
  /* background-color: yellow; */
`;
