import React from "react";
import GrafittiCrown from "../assets/GrafittiCrown.webp";
import img_1 from "../assets/logo-gamdom (1).svg";
import img_2 from "../assets/logo-csgoroll (1).svg";
import img_3 from "../assets/logo-hypedrop (1).svg";
export default function LeaderBoard() {
  return (
    <div className="leader_board">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg">
            <img src={GrafittiCrown} alt="GrafittiCrown" className="mt-4" />
            <h1 className="fs-1 mb-3">
              Leader<span>borad</span>
            </h1>
            <p className="mb-3">
              Be a leader in Juicy Leaderboard <br></br>and earn insane money
              prizes!
            </p>
            <div className="row align-items-center mb-3">
              <div className="col-4">
                <img src={img_1} alt="img_1" />
              </div>
              <div className="col-4">
                <img src={img_2} alt="img_1" />
              </div>
              <div className="col-4">
                <img src={img_3} alt="img_1" />
              </div>
            </div>
            <button className="btn_ d-block">Claim Bonus</button>
          </div>
          <div className="col-md-12 col-lg"></div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 explore mb-5">
        <button className="btn_">Explore all Bonuses</button>
      </div>
    </div>
  );
}
