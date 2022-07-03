import {Container, Navbar,Nav, Button, NavDropdown} from 'react-bootstrap';
import  {useState} from 'react';
import {Link} from 'react-router-dom';


function NavbarComplete () {
    
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if(document.getElementById("about").offsetTop < window.pageYOffset){ 
        setColor(true)
        }else{ 
        setColor(false)
        }
    }

    function setColorNavbar () {
        if(color){
        //
        return "fixed-top bg-white"
        }else{
        return "fixed-top bg-light"
        }
    }


    window.addEventListener('scroll', changeColor);

    return (
    <>
    <Navbar className= {setColorNavbar()} expand="lg" variant="light">
        <Container>
        <Navbar.Brand >
        <a href='#section-hero'>
        <img src= {require('../images/Logo - Text.png')}  alt="logo" width="200" height="" />
        </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto ">
        <Nav.Link href="#section-trailer" className="lead text-black strong">About us</Nav.Link>
        <Nav.Link href="#classes"className="lead text-black strong">Classes</Nav.Link>
        <Nav.Link href="#reviews"className="lead text-black strong">Reviews</Nav.Link>
        <Nav.Link href="#contact"className="lead text-black strong">Contact us</Nav.Link>
        </Nav>
        <NavDropdown title={<span className='lead text-primary strong'>Language</span>} id="collasible-nav-dropdown">
            <NavDropdown.Item className="lead text-black strong">English</NavDropdown.Item>
            <NavDropdown.Item className="lead text-black strong">Español</NavDropdown.Item>
            <NavDropdown.Item className="lead text-black strong">Nederlands</NavDropdown.Item>
        </NavDropdown>
        <Link to='/login'>
        <Button className="btn-lg btn-secundary text-white">Login</Button>
        </Link>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
}

export default NavbarComplete;
