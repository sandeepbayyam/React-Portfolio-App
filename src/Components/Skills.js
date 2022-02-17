import React from 'react';
import html from '../Assets/Skills/html.png';
import css from '../Assets/Skills/css.png';
import js from '../Assets/Skills/js.png';
import bootstrap from '../Assets/Skills/bootstrap.png';
import react from '../Assets/Skills/react.png';
import redux from '../Assets/Skills/redux.png';
import vscode from '../Assets/Skills/vscode.png';
import git from '../Assets/Skills/git.png';
import Fcc from '../Assets/Certificates/Fcc certificate.jpg';
import VLR from '../Assets/Certificates/VLR certificate.jpeg';
import Twd from '../Assets/Certificates/Twd certificate.jpg';
import { Card ,Col,Row ,CardImg} from 'react-bootstrap';
import '../index.css'

const Skills = () => {
  const images = [html,css,bootstrap,js,react,redux,vscode,git];
  const certificate = [Fcc,VLR,Twd];
  return (
    <div>
      <h1  className='text-white text-center'>Skills</h1>
      <Row className='mx-auto'>
      {
        images && images.map((image,i)=>{
          return(
            <>
            <Col  xl={3} lg={3} md={4} sm={12} className="mx-auto" >
            <Card className="mx-auto mb-3 mt-2 shadow-lg bg-transparent skill-card">
            <CardImg src={image} className="img.fluid p-3 mx-auto"
                style={{width:"150px",height:"150px"}}>
            </CardImg>
            </Card>
            </Col>
            </>
          )
        })
      }
      </Row>
      &nbsp;
      <h1 className='text-white text-center'>Certifications</h1>
      <Row className='mx-auto'>
      {
        certificate && certificate.map((c,i)=>{
          return(
            <>
            <Col  xl={4} lg={4} md={12} sm={12} className="mx-auto" >
            <Card className="mx-auto mb-3 mt-2 shadow-lg bg-transparent skill-certificate"
            >
            <CardImg src={c} className="img.fluid p-3 mx-auto"
                style={{width:"300px",height:"300px"}}>
            </CardImg>
            </Card>
            </Col>
            </>
          )
        })
      }
      </Row>
    </div>
  )
}

export default Skills
