import React from 'react';
import { Spring } from 'react-spring/renderprops';
import leopard from '../imgs/leopard-1.jpg';
import lion from '../imgs/lion-1.jpg';
import elephant from '../imgs/elephant-1.jpg';
import buffalo from '../imgs/buffalo-1.jpg';
import rhino from '../imgs/rhino-1.jpg';
import logo from '../imgs/logo_transparent_sm2.png';

export default function BigFiveAnim() {
  return (
    <div className="mainContainer" style={mainContainer} >
      <div style={logoContainer} className="position-absolute d-flex justify-content-center align-items-center ">
        <img className="logo-style position-absolute" style={logoStyle} src={logo} alt="logo image" />
      </div>
      <div style={mainSlideContainer} className="mainSliderContainer row">
        <div style={slideContainer} className="col">
          <Spring
            from={{ opacity: 0, marginTop: 100 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 0, duration: 2000 }}
          >
            {props => (
              <div className="imageSlidesOuter leopard" style={props}>
                <img className="imageSlides" style={slides} src={leopard} alt="leopard img" />
              </div>
            )}
          </Spring>
        </div>
        <div style={slideContainer} className="col d-flex align-items-center">
          <Spring
            from={{ opacity: 0, marginTop: -100 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 250, duration: 2000 }}
          >
            {props => (
              <div className="imageSlidesOuter lion" style={props}>
                <img className="imageSlides" style={slides} src={lion} alt="lion img" />
              </div>
            )}
          </Spring>
        </div>
        <div style={slideContainer} className="col d-flex align-items-end">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 900, duration: 1000 }}
          >
            {props => (
              <div className="imageSlidesOuter elephant" style={props}>
                <img className="imageSlides" style={slides} src={elephant} alt="elephant img" />
              </div>
            )}
          </Spring>
        </div>
        <div style={slideContainer} className="col d-flex align-items-center">
          <Spring
            from={{ opacity: 0, marginTop: 100 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 850, duration: 2000 }}
          >
            {props => (
              <div className="imageSlidesOuter buffalo" style={props}>
                <img className="imageSlides" style={slides} src={buffalo} alt="buffalo img" />
              </div>
            )}
          </Spring>
        </div>
        <div style={slideContainer} className="col">
          <Spring
            from={{ opacity: 0, marginTop: -100 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 700, duration: 2000 }}
          >
            {props => (
              <div className="imageSlidesOuter rhino" style={props}>
                <img className="imageSlides" style={slides} src={rhino} alt="rhino img" />
              </div>
            )}
          </Spring>
        </div>
      </div>
    </div>
  )
};

const logoContainer = {
  height: "100vh",
  width: "100vw"
}
const logoStyle = {
  width: "300px",
  zIndex: 3
}

const slides = {
  width: "100%"
}

const slideContainer = {
  padding: 0
}

const mainSlideContainer = {
  width: "100vw",
  height: "100vh",
  padding: 0,
  margin: 0

}

const mainContainer = {
  width: "100vw",
  height: "100vh"
}
