import React, { useEffect, useState } from "react";
import LogoC from "./LogoC";
export default function Header() {
  let [active, setActive] = useState(false);
  useEffect(
    (_) => {
      if (active) {
        document.body.style.overflowY = "hidden";
      }else {
        document.body.style.overflowY = "auto";

      }
    },
    [active]
  );
  return (
    <>
      <nav className="navbar">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="" className="d-md-flex justify-content-md-center">
            <LogoC />
          </a>
          <div
            className={`d-flex align-items-center justify-content-between flex-grow-1 sc ${
              active ? "active" : ""
            }`}
          >
            <ul className="links d-flex p-0 mb-0 gap-4">
              <li>
                <a href="" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="">Bonuses</a>
              </li>
              <li>
                <a href="">Decide</a>
              </li>
              <li>
                <a href="">LeaderBoard</a>
              </li>
              <li>
                <a href="">Raffles</a>
              </li>
              <li>
                <a href="">Gamdom</a>
              </li>
            </ul>
            <button className="btn_ sign_in">Sign In</button>
          </div>
          <div className="btn_menu" onClick={(_) => setActive((e) => !e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.24 2h-1.9C3.15 2 2 3.15 2 5.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C10.57 3.15 9.42 2 7.24 2ZM18.67 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C22 3.15 20.85 2 18.67 2ZM18.67 13.43h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33ZM7.24 13.43h-1.9C3.15 13.43 2 14.58 2 16.76v1.9C2 20.85 3.15 22 5.33 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34Z"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}
