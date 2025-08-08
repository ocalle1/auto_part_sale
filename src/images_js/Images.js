import React from "react";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import transmission from "../assets/parts/transmission.jpg";
import engine from "../assets/parts/transmission.jpg";
import door from "../assets/parts/door.jpg";


const Images = () => {
  const slideImages = [
    transmission,
    engine,
    door
  ];

  return (
    <Slide>
      <div className="each-slide-effect">
<div style={{'backgroundImage': `url(${slideImages[0]})` }}>
  <span>slide 1</span>
</div>
      </div>
      <div className="each-slide-effect">
<div style={{'backgroundImage': `url(${slideImages[1]})` }}>
  <span>slide 2</span>
</div>
      </div>
      <div className="each-slide-effect">
<div style={{'backgroundImage': `url(${slideImages[2]})` }}>
  <span>slide 3</span>
</div>
      </div>
    </Slide>
  );
}

export default Images;