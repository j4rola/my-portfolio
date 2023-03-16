import Container from 'react-bootstrap/Container';
import Link from 'next/link'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ContactModal from './ContactModal'; 
import { BsGithub } from "react-icons/bs";
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import HamburgerIcon from './HamburgerIcon';




function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='blue' variant='dark'> 
      <Container> 
        <Navbar.Brand href="#home">Joe Froula</Navbar.Brand>
        <Navbar.Toggle className='border-0 bg-light' aria-controls="navbar-nav"> 
          <HamburgerIcon/>
        </Navbar.Toggle> 
        <Navbar.Collapse id="responsive-navbar-nav no-border"> 
          <Nav className="me-auto no-border">  
            <ContactModal></ContactModal>   
            <Link className='link' href="#projects"><a className='link'>Projects</a></Link> 
            <Link className='link' href="https://buy.stripe.com/cN23eW13uapb2pW000"><a className='link'>Make a Payment</a></Link>
            
          </Nav>  
          <Nav className='text-light ms-2' style={{ cursor: 'pointer' }}>    
            <Link href="https://github.com/j4rola" ><BsGithub size={32}></BsGithub></Link> 
          </Nav>   
        </Navbar.Collapse>   
      </Container>   
    </Navbar>   
  );
}

export default NavBar;