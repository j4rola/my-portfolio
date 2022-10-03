import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='blue' variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Joe Froula</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
        <Navbar.Collapse id="responsive-navbar-nav"> 
          <Nav className="me-auto">
            <a href="#features">Contact</a>   
            <a href="#projects">Projects</a>
            
          </Nav>
          <Nav>
            <a href="#deets">203.707.4230</a> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;