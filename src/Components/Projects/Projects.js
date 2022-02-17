import React from 'react';
import { Projectlist } from './ProjectsDB';
import {Row,Col,Card,CardImg,Nav,Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <div>
      <h1 className='text-white text-center'>Projects</h1>
      <h5 className='text-white text-center'>My Recent  &nbsp;<span 
       style={{color:'#20c997',textDecoration:'underline'}}
      >Works</span></h5>
      <Row className='mx-auto'>
        {
          Projectlist && Projectlist.map((p,i)=>{
            return(
              <>
               <Col  xl={4} lg={4} md={12} sm={12} className="mx-auto" >
               <Card className="mx-auto mb-3 mt-2 shadow-lg bg-dark text-white project-card">
                <Card.Header className='text-center'>{p.name}</Card.Header>
                <CardImg src={p.image} className="img.fluid p-3 mx-auto"
                    style={{width:"300px",height:"250px"}}>
                </CardImg>
                <Card.Body className='text-center'>
                  Technology :<h6 style={{color:'#20c997'}}>{p.technologyUsed} </h6>
                  <Card.Text className="text-center">{p.description}</Card.Text>
                      <Nav.Link href={p.git} target="_blank" id="navlink">
                      <Button>GitHub</Button> 
                      </Nav.Link>
                      <Nav.Link href={p.url} target="_blank" id="navlink">
                        <Button >Live Demo</Button> 
                      </Nav.Link>
                </Card.Body>
                
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

export default Projects
