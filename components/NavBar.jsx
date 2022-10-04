import Container from 'react-bootstrap/Container';
import Link from 'next/link'; 
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
            <Link href="#features">Contact</Link>   
            <Link href="#projects">Projects</Link>
            
          </Nav>
          <Nav className='text-light'>
            203.707.4230
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;