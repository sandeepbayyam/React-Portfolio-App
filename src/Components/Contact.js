import React from 'react'
import { Container, Row,Col,Card,Form,Button } from 'react-bootstrap';
import {BsPersonCircle} from 'react-icons/bs';
import {MdPhoneIphone} from 'react-icons/md';
import {MdEmail } from "react-icons/md";
import {AiFillGithub,AiOutlineCloudDownload} from "react-icons/ai";
import { FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <Container>
      <h1 className='text-white text-center'>Get in touch</h1>
      <h5 className='text-white text-center'>Interested to collaborate ? Feel free to drop me an email.</h5>
       <Row>
        <Col>
        <Card className="bg-transparent text-light">
          <Card.Header className='text-center text-warning'>
            Contact Details
          </Card.Header>
          <Card.Body className='mx-auto'>
          <BsPersonCircle size={30}/> SANDEEP BAYYAM
          </Card.Body>
          <Card.Body className='mx-auto'>
          <MdPhoneIphone size={30}/> +91-9177704023
          </Card.Body>
          <Card.Title className='mx-auto text-warning'>FIND ME ON</Card.Title>
          <Card.Body>
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
          </Card.Body>
        </Card>
        &nbsp;
        </Col>
        <Col xl={6}lg={6} md={12} sm={12}>
        <Card className=' bg-transparent text-warning'>
          <Card.Header className='mx-auto'>E-mail</Card.Header>

        <Form className='m-3'
            action='mailto:sandeepbayyam@gmail.com'
            method='POST'> 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder='Write Message' />
            </Form.Group>
           <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Card>
        </Col>
       </Row>     
      </Container>
    </div>
   
  )
}

export default Contact
