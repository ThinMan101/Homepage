import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';




export default function Hero() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });
  const floatAnimation = useSpring({
    from: { transform: 'translate3d(0, 200%, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    config: { duration: 500, tension: 170, friction: 26 }, // Increased duration and adjusted tension and friction for a snappier animation
  });
  const stylishAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 1000, tension: 170, friction: 26 },
  });
  return (
    <animated.div className="hero" style={fade}>
    <div className="hero">
      <div className="container">
        <img src={Logo} alt="" />
        <animated.p style={stylishAnimation}>
          ENJOY JUICY REWARDS & VIP perks EVERYDAY <br></br>for playing under
          the code “<span>JUICY</span>“
        </animated.p>
        <div className="btns_container">
        <animated.button className="btn_ d-flex align-items-center gap-2" style={floatAnimation}>
          {/* <button className="btn_ d-flex align-items-center gap-2"> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillOpacity="0.75"
                fillRule="evenodd"
                d="M5.789 1C4.467 1 3.395 2.1 3.395 3.459c0 .274.044.538.125.785H2.315a.826.826 0 0 0-.815.837v2.595c0 .397.27.73.632.815v4C2.132 13.875 3.226 15 4.576 15h6.848c1.35 0 2.444-1.124 2.444-2.51V8.491a.833.833 0 0 0 .632-.815V5.08a.826.826 0 0 0-.815-.837H12.48c.081-.247.125-.51.125-.785C12.605 2.1 11.533 1 10.21 1c-.873 0-1.659.38-2.211.986A2.981 2.981 0 0 0 5.789 1Zm5.635 12.327h-2.61V8.512h3.425v3.978a.826.826 0 0 1-.815.837Zm-4.239 0V8.512H3.761v3.978c0 .462.365.837.815.837h2.61Zm3.79-9.868a.775.775 0 0 1-.763.785H8.815v-.137c0-.792.625-1.434 1.396-1.434.422 0 .765.352.765.786Zm-3.79.648v.137H5.788a.775.775 0 0 1-.764-.785c0-.434.343-.786.765-.786.771 0 1.396.642 1.396 1.434Z"
                clipRule="evenodd"
              ></path>
            </svg>{" "}
            Claim Bonuses
          {/* </button> */}
          </animated.button>
          <animated.button className="btn_ d-flex align-items-center gap-2" style={floatAnimation}>
          {/* <button className="btn_ d-flex align-items-center gap-2"> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="m14.167 12.313-1.1.26a.654.654 0 0 0-.494.494l-.233.98a.668.668 0 0 1-1.16.28l-1.993-2.294a.332.332 0 0 1 .166-.54 5.66 5.66 0 0 0 3.02-1.886.333.333 0 0 1 .494-.034l1.48 1.48c.506.507.326 1.14-.18 1.26ZM1.8 12.313l1.1.26c.247.06.44.247.493.494l.234.98c.126.533.806.7 1.16.28l1.993-2.294a.332.332 0 0 0-.167-.54 5.66 5.66 0 0 1-3.02-1.886.333.333 0 0 0-.493-.034l-1.48 1.48c-.507.507-.327 1.14.18 1.26ZM8 1.333A4.663 4.663 0 0 0 3.333 6c0 .967.287 1.853.78 2.593A4.657 4.657 0 0 0 7.3 10.607c.227.04.46.06.7.06.24 0 .473-.02.7-.06a4.657 4.657 0 0 0 3.187-2.014c.493-.74.78-1.626.78-2.593A4.663 4.663 0 0 0 8 1.333Zm2.04 4.52-.553.554a.472.472 0 0 0-.114.406l.16.687c.127.54-.16.753-.64.467l-.666-.394a.467.467 0 0 0-.44 0l-.667.394c-.48.28-.767.073-.64-.467l.16-.687a.5.5 0 0 0-.113-.406l-.567-.554c-.327-.326-.22-.653.233-.726l.714-.12c.12-.02.26-.127.313-.234l.393-.786c.214-.427.56-.427.774 0l.393.786a.483.483 0 0 0 .32.234l.713.12c.447.073.554.4.227.726Z"
              ></path>
            </svg>
            Leader Board
          {/* </button> */}
          </animated.button>
        </div>
        <p>
          Start earning <span>REWARDS</span>
        </p>
        <a href="#Bonuses" className="bottom animate-float">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 21 21"
            className="animate-float-slow"
          >
            <path
              fill="currentColor"
              d="M10.5 20.17c5.52 0 10-4.48 10-10s-4.48-10-10-10-10 4.48-10 10 4.48 10 10 10ZM6.97 10.14c.15-.15.34-.22.53-.22s.38.07.53.22l1.72 1.72V6.67c0-.41.34-.75.75-.75s.75.34.75.75v5.19l1.72-1.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.29.29-.77.29-1.06 0l-3-3a.754.754 0 0 1 0-1.06Z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    </animated.div>
  );
}
