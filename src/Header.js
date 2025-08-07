import React from "react";
import checkerflagresized from "./assets/checkerflagresized.png"; // Adjust the path as necessary
<<<<<<< HEAD
import NavButton from "../src/NavButton.js"; // Adjust the path as necessary
import Images from "./images_js/Images.js"; // Adjust the path as necessary
=======
import NavButton from "./route_pages/ReactRouter.js"; // Adjust the path as necessary
import ReactRouter from "./route_pages/ReactRouter.js";

>>>>>>> refs/remotes/origin/main


function Header() {
  return (
<<<<<<< HEAD
    <>
    {/* <Images/> */}
=======
      <>
>>>>>>> refs/remotes/origin/main
    {/* left-side image */}
    <div className="checkerflag-container">
      <img src={checkerflagresized} alt="Checker Flag" className="left-image"/>
      
      {/* Business name */}
        {/* <ReactRouter /> */}
      <div className="home-rightside-content">
      <header>
        <h1> 
          OC<br/> 
          Auto Part <br/>
          Sales
          </h1>
      </header>
      <h2 className="names-right-content">Carlos Oliveros & Oscar Calle</h2>
      <h2 className="business-info">
        512-660-7934<br/>
        Dale,TX <br/> 
        autopartsaleoc@gmail.com
      </h2>  
      </div>

      {/* I want this to be on very top of Business name in hamburger menu */}
    </div>
     </>
  
  );
}

export default Header;
