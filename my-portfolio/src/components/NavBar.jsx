import { Container, Nav, Navbar } from "react-bootstrap";
import {
  StyledNavbar,
  StyledNav,
  StyledNavLink,
} from "../componentStyle/NavBarStyled";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <StyledNavbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src="" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="#navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <StyledNav className="me-auto">
              <StyledNavLink to="/" as={Link}>
                Home
              </StyledNavLink>
              <Nav.Link to="/contacts" as={Link}>
                Contacts
              </Nav.Link>
              <Nav.Link to="/about" as={Link}>
                About
              </Nav.Link>
            </StyledNav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </>
  );
};
