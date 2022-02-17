import React from 'react';
import '../index.css';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import {FaGraduationCap} from 'react-icons/fa';
import {FaLaptopCode} from 'react-icons/fa';
import {FaCodepen}from 'react-icons/fa';
import {IoMdContact} from 'react-icons/io';

const NavBar = () => {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" variant='dark'>
        <Container fluid>
        <Navbar.Brand as={Link} to ={'/'} className='ms-5'>
            <h2>Port<span style={{color:'#70AAE4'}}>folio</span></h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-5">
            <Nav.Link as={Link} to ='/'style={{color:'#20c997'}}>
            <AiOutlineHome size={24} style={{color:'white',marginBottom:'6px',marginRight:'6px'}}/>Home
              </Nav.Link>
            <Nav.Link as={Link} to ='/skills' style={{color:'#20c997'}}>
           <FaLaptopCode size={24} style={{color:'white',marginBottom:'6px',marginRight:'6px'}}/>Skills
              </Nav.Link>
            <Nav.Link as={Link} to ='/education' style={{color:'#20c997'}}>
            <FaGraduationCap size={24} style={{color:'white',marginBottom:'6px',marginRight:'6px'}}/>Education
              </Nav.Link>
            <Nav.Link as={Link} to ='/projects' style={{color:'#20c997'}}>
            <FaCodepen size={24} style={{color:'white',marginBottom:'6px',marginRight:'6px'}}/>Projects
              </Nav.Link>
            <Nav.Link as={Link} to ='/contact' style={{color:'#20c997'}}>
            <IoMdContact size={24} style={{color:'white',marginBottom:'6px',marginRight:'4px'}}/>Contact
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
       </Navbar>
    </div>
  )
}

export default NavBar

