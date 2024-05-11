import React from "react";
import bonuses_title from "../assets/bonuses-title.webp";
import BoxContainers from "./BoxContainers";

export default function Bonuses() {
  return (
    <div className="bonuses" >
      <div className="container" id="Bonuses">
        <img src={bonuses_title} alt="bonuses" />
        <p>Claim Instantly & Enjoy </p>
        <BoxContainers />
      </div>
    </div>
  );
}
