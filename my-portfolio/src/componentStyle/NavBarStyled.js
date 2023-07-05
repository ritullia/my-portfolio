import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const StyledNavbar = styled(Navbar)`
  padding: 20px 10px;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledNav = styled(Nav)`
  display: flex;
  justify-content: space-evenly;
  flex-shrink: 3;
`;
export const StyledNavLink = styled(Nav.Link)`
  margin-left: 40px;
  color: #c9c9c9;
`;
