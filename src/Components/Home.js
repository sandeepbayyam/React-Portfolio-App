import React from 'react';
import mypic from '../Assets/mypic.JPG'
import wavinghand from '../Assets/wavinghand.png';
import {Container,Row,Col,Button,Nav} from 'react-bootstrap';
import '../index.css';
import Type from './Type'
import sandeepResume from '../Assets/sandeepResume.pdf';
import {MdEmail } from "react-icons/md";
import {AiFillGithub,AiOutlineCloudDownload} from "react-icons/ai";
import { FaLinkedinIn } from 'react-icons/fa';
import Contact from './Contact';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects/Projects';
 
const Home = () => {
  return (
    <div>
    <Container>
      <Row>
        <Col className='ms-5 p-4  text-white'>
          <h2>Hello,<span className="wave">
          &nbsp;
             <img src ={wavinghand} style={{height:'40px',width:'40px'}}/>
            &nbsp;
            </span>I'm </h2>
           <h1 style={{color:'#20c997',fontWeight:'bold'}}>SANDEEP BAYYAM</h1>
           <p>Looking to start my career as an Entry-level UI Developer/Frontend Developer with a reputed firm driven by technology</p>
           <h3 style={{color:'#20c997'}}><Type/></h3>
           <Nav.Link href={sandeepResume} target="_blank" id="navlink">
             <Button> <AiOutlineCloudDownload size={25}/> Download Resume</Button>
           </Nav.Link>
        </Col>
        <Col xl={6}lg={6} md={12} sm={12}>
        <img src={mypic} style={{
          height:'350px',
          width:'350px',
          borderRadius:'50%'
        }} className='img-fluid'/>
        </Col>
      </Row>
      <Row>
         <Col>
         <h1 className='text-white text-center'>FIND ME ON</h1>
            <p className='text-white text-center'>
              Feel free to <span style={{color:'#20c997',fontSize:'20px'}}> connect </span>with me
            </p>
            <div className='text-center'>
            <li className="social-icons">
                <a
                  href="https://github.com/sandeepbayyam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sandeepbayyam/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon"
                >
                  <FaLinkedinIn />
                </a>
              </li>
                <li className="social-icons">
                <a
                  href="mailto:sandeepbayyam@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon"
                >
                  <MdEmail  />
                </a>
              </li>
              </div>
        </Col>
      </Row>
    </Container>
    &nbsp;
    <Skills/>
    &nbsp;
    <Projects/>
    &nbsp;
    <Education/>
    &nbsp;
    <Contact/>
    </div>
   
  )
}

export default Home
