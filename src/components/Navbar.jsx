import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/contact" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/login" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Login/Registraction
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
