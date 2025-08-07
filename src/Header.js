import React from "react";
import checkerflagresized from "./assets/checkerflagresized.png"; // Adjust the path as necessary
import NavButton from "../src/NavButton.js"; // Adjust the path as necessary
import Images from "./images_js/Images.js"; // Adjust the path as necessary


function Header() {
  return (
    <>
    {/* <Images/> */}
    {/* left-side image */}
    <div className="checkerflag-container">
      <img src={checkerflagresized} alt="Checker Flag" className="left-image"/>
      
      {/* Business name */}
        <NavButton />
      <div className="right-content">
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
    </div>

    <div className="nav nav-buttons">
    <div className="nav Home"/>
    <div className="nav Contact"/>
    <div className="nav Products"/>
    <div className="nav About"/>
    <div className="nav Services"/>
    <div className="nav Testimony"/>
</div>

<style jsx>{`
.nav-buttons{
width: 2rem;
height: 2rem;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
z-index: 10;

.nav{
width: 2rem;
height: 2rem;
display: flex;
justify-content: center;
flow-flex: column nowrap;
z-index: 10;
}
`}
</style>
     </>
  
  );
}

export default Header;
