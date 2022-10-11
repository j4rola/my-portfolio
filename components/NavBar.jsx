import Container from 'react-bootstrap/Container';
import Link from 'next/link'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='blue' variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Joe Froula</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
        <Navbar.Collapse id="responsive-navbar-nav no-border"> 
          <Nav className="me-auto no-border">  
            <Link href="#contact"><a className='link'>Contact</a></Link>    
            <Link className='link' href="#projects"><a className='link'>Projects</a></Link> 
            <Link className='link' href="#projects"><a className='link'>Make a payment</a></Link>
            
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