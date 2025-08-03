import React, {useState, useEffect} from "react";
import transmission from "../assets/transmission.jpg";
import engne from "../assets/engine.png";
import door from "../assets/door.jpg";
import checkerflagresized from "../assets/checkerflagresized.png";



const images = [transmission, engne, door];
//work on the transion of the images
function Images() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

return() => clearInterval(timer);
  }, []);
return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ width: "400px", height: "auto", borderRadius: "12px" }}
      />
      <div style={{ marginTop: "10px" }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              margin: "0 4px",
              padding: "5px",
              borderRadius: "50%",
              background: currentIndex === i ? "#333" : "#ccc",
              border: "none",
              width: "12px",
              height: "12px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>,

<div className="checkerflag-container">
<img src={checkerflagresized} alt="Left Side" />
  
  </div>
);
  
  
}

export default Images;  