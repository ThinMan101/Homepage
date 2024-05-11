import React from "react";
import cs from "../assets/logo-csgoroll.svg";
import gamdom from "../assets/logo-gamdom.svg";
import hype from "../assets/logo-hypedrop.svg";
import img_1 from "../assets/gamdom-icon.webp";
import img_2 from "../assets/hypedrop-icon.webp";
import img_3 from "../assets/roll-icon.webp";
import BoxBonus from "./BoxBonus";
export default function BoxContainers() {
  const boxes_inf = [
    {
      id: 1,
      img_1: cs,
      img_2: img_1,
      link: "Csgoroll.com",
      title: "3 free boxes",
    },
    {
      id: 2,
      img_1: gamdom,
      img_2: img_2,
      link: "hypedrop.com",
      title: "3 free boxes",
    },
    {
      id: 3,
      img_1: hype,
      img_2: img_3,
      link: "gamedom.com",
      title: "up to 65% rakeback",
    },
  ];
  return (
    <div className="box_container">
      {boxes_inf.map((el) => (
        <BoxBonus
          key={el.id}
          title={el.title}
          img_1={el.img_1}
          link={el.link}
          img_2={el.img_2}
        />
      ))}
    </div>
  );
}
