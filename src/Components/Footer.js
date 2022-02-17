import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {MdEmail } from "react-icons/md";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div>
    <Container fluid>
      <Row className="mx-auto">
        <Col className="text-white mt-3" lg={4}md={4}sm={12}>
         <h6 className='text-center'> Developed by &nbsp;
          <span style={{color:'#20c997'}}>SANDEEP BAYYAM</span></h6>
        </Col>
        <Col  className="text-white " lg={4}md={4}sm={12}>
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
        <Col className="text-white mt-3  " lg={4}md={4}sm={12}>
          <h6 className='text-center'> Copyright © {year} </h6>
        </Col>
       
      </Row>
    </Container>
    </div>
  );
}

export default Footer
