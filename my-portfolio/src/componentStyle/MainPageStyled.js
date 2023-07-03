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
  width: 740px;
  position: absolute;
  transform: translate(-140px, -20%);
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  transform: translate(340px, 190%);
`;
