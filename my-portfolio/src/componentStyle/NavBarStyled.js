import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import * as palette from "./ColorsVariables";

export const StyledNavbar = styled(Navbar)`
  padding: 10px 10px;
  position: relative;
  background-color: ${palette.MainColor}!important;
`;

export const StyledNavGroup = styled(Navbar.Collapse)`
  display: flex;
`;
export const StyledNav = styled(Nav)`
  margin-left: 30px;
`;

export const StyleLogo = styled.img`
  width: 80px;
`;
