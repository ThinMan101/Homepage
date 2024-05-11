import React, { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";


export default function BoxBonus({ img_1, img_2, link, title }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const bonusRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bonusRef.current.classList.add('floatInFromBelow');
          observer.unobserve(bonusRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    observer.observe(bonusRef.current);

    return () => {
      observer.unobserve(bonusRef.current);
    };
  }, []);


  
  return (
    <div className="box_bonus" id="boxBonus" >
      <div className="image">
        <img src={img_1} alt="img1" />
      </div>
      <div className="box">
        <img src={img_2} alt="img2" />
        <a className="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <g clipPath="url(#a)">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.91.247a1.798 1.798 0 0 0-1.82 0L2.41 5.325c-.563.33-.91.938-.91 1.596V17.08c0 .658.347 1.266.91 1.595l8.68 5.08c.563.328 1.257.328 1.82 0l8.68-5.08c.563-.329.91-.937.91-1.595V6.92c0-.658-.347-1.266-.91-1.596L12.91.247ZM8.11 6.18A7 7 0 0 1 12 5a7.008 7.008 0 0 1 7 7A7 7 0 1 1 8.111 6.18Zm1.416 8.62c.5 2.024 1.51 3.267 2.473 3.267.964 0 1.973-1.243 2.473-3.267H9.527Zm-.19-4.667a12.768 12.768 0 0 0 0 3.734h5.326c.092-.618.138-1.242.137-1.867a12.434 12.434 0 0 0-.137-1.867H9.337Zm-3.107 0a6.039 6.039 0 0 0 0 3.734H8.4a13.12 13.12 0 0 1 0-3.734H6.23Zm8.243-.933c-.5-2.024-1.51-3.267-2.473-3.267-.964 0-1.973 1.243-2.473 3.267h4.946Zm3.297.933H15.6a13.22 13.22 0 0 1 0 3.734h2.17a6.02 6.02 0 0 0 0-3.734ZM15.432 9.2h1.944a6.096 6.096 0 0 0-3.142-2.835c.583.856.99 1.82 1.198 2.835Zm-6.864 0a7.824 7.824 0 0 1 1.198-2.835A6.096 6.096 0 0 0 6.624 9.2h1.944Zm0 5.6H6.624a6.096 6.096 0 0 0 3.142 2.835A7.824 7.824 0 0 1 8.568 14.8Zm6.864 0a7.824 7.824 0 0 1-1.198 2.835 6.096 6.096 0 0 0 3.143-2.835h-1.945Z"
                clipRule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="currentColor" d="M0 0h24v24H0z"></path>
              </clipPath>
            </defs>
          </svg>
          {link}
        </a>
        <div className="bx_info">
          <p>Main boxes</p>
          <h2>{title}</h2>
        </div>
        <div className="bx_info_2">
          <p>Extra</p>
          <p ref={bonusRef}>+5% BONUS FOR EVERY DEPOSIT</p>
        </div>
        <button className="btn_">Claim Bonus</button>
        <a className="claim">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <g clipPath="url(#QuestionIcon_svg__a)">
              <path
                fill="currentColor"
                fillOpacity="0.75"
                fillRule="evenodd"
                d="M7.394.165c.375-.22.837-.22 1.212 0l5.788 3.385c.375.22.606.625.606 1.064v6.772c0 .439-.231.844-.606 1.064l-5.788 3.385c-.375.22-.837.22-1.212 0L1.606 12.45A1.232 1.232 0 0 1 1 11.386V4.614c0-.439.231-.844.606-1.064L7.394.165Zm-.328 11.95c0 .484.411.885.934.885.523 0 .934-.4.934-.884S8.523 11.23 8 11.23c-.523 0-.934.401-.934.885Zm1.868-3.172c0-.33.149-.53.634-.837C9.954 7.858 11 7.186 11 5.842 11 4.274 9.656 3 8 3S5 4.274 5 5.842c0 .483.423.884.934.884.51 0 .933-.4.933-.884 0-.59.51-1.073 1.133-1.073.622 0 1.133.483 1.133 1.073 0 .307-.15.507-.61.802l-.015.01c-.408.265-1.442.938-1.442 2.29v.247c0 .484.424.884.934.884s.934-.4.934-.884v-.248Z"
                clipRule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="QuestionIcon_svg__a">
                <path fill="#fff" d="M0 0h16v16H0z"></path>
              </clipPath>
            </defs>
          </svg>
          How to claim bonus
        </a>
      </div>
    </div>
  );
}
