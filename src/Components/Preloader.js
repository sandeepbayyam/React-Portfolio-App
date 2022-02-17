import React from "react";
import {BallTriangle} from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ParticleBackground from "./Particles/ParticleBackground";

function Preloader(props) {
  return (
      <div className="bg-dark loader-container">
          <ParticleBackground/>
            <div id={props.load ? "preloader" : "preloader-none"}>
            <BallTriangle 
                color="#20c997" 
                height={150} 
                width={150} />
            </div>
    </div>
  );
}

export default Preloader;
