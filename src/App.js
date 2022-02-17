import React,{useState,useEffect} from 'react';
import NavBar from "./Components/Nav";
import Home from './Components/Home';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {Routes,Route} from 'react-router-dom';
import { Container } from "react-bootstrap";
import ParticleBackground from "./Components/Particles/ParticleBackground";
import Preloader from "./Components/Preloader";

function App() {

  const [load, upadateLoad] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        upadateLoad(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
  
  
  return (
    <div>
       {load ? 
        <Preloader load={load} /> :
        <Container fluid className="bg-dark" style={{minHeight:'100vh'}}>
            <ParticleBackground />
              <NavBar/>
                <Routes>
                  <Route path="/" element={<Home/>}> </Route>
                  <Route path="/skills" element={ <Skills/>}> </Route>
                  <Route path="/education" element={ <Education/>}> </Route>
                  <Route path="/projects" element={ <Projects/>}> </Route>
                  <Route path="/contact" element={<Contact/>}> </Route>
                </Routes>
                &nbsp;
              <Footer/>
          </Container>
        }
    </div>
  );
}

export default App;
