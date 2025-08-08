import React from "react";
import checkerflagresized from "../assets/checkerflagresized.png"; // Adjust the path as necessary
import Images from "../images_js/Images";


function Inventory() {
  return (
    <>
    <div className="checkerflag-container-inventory">
      <img src={checkerflagresized} alt="Checker Flag" className="right-image" />
      <Images />

    </div>
    <div>
      <h2>Inventory Page</h2>
    </div>
    </>
  );
}

export default Inventory;
