import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import maxresdefault from "../assets/maxresdefault.jpg";
import { FreeMode } from "swiper/modules";
export default function Videos() {
  return (
    <div className="videos">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h3 className="d-flex gap-3 align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <g clipPath="url(#VideoHexIcon_svg__a)">
                <path
                  fill="currentColor"
                  fillOpacity="0.75"
                  fillRule="evenodd"
                  d="M7.394.165c.375-.22.837-.22 1.212 0l5.788 3.385c.375.22.606.625.606 1.064v6.772c0 .439-.231.844-.606 1.064l-5.788 3.385c-.375.22-.837.22-1.212 0L1.606 12.45A1.232 1.232 0 0 1 1 11.386V4.614c0-.439.231-.844.606-1.064L7.394.165Zm2.514 9.271c1.456-.788 1.456-2.082 0-2.87l-2.26-1.229C6.192 4.55 5 5.188 5 6.773v2.456c0 1.576 1.192 2.223 2.648 1.435l2.26-1.228Z"
                  clipRule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="VideoHexIcon_svg__a">
                  <path fill="#fff" d="M0 0h16v16H0z"></path>
                </clipPath>
              </defs>
            </svg>
            Videos
          </h3>
          <button className="btn_">View all</button>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          freeMode={true}
          grabCursor={true}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[FreeMode]}
          breakpoints={{
            998 : {
              slidesPerView : 4,
            }
          }}
        >
          <SwiperSlide>
            <div className="slider_bx">
              <img src={maxresdefault} alt="maxresdefault" />
              <p>You WON'T BELIEVE this JUST HAPPENED..</p>
              <span>2 Days Ago</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_bx">
              <img src={maxresdefault} alt="maxresdefault" />
              <p>You WON'T BELIEVE this JUST HAPPENED..</p>
              <span>2 Days Ago</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_bx">
              <img src={maxresdefault} alt="maxresdefault" />
              <p>You WON'T BELIEVE this JUST HAPPENED..</p>
              <span>2 Days Ago</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_bx">
              <img src={maxresdefault} alt="maxresdefault" />
              <p>You WON'T BELIEVE this JUST HAPPENED..</p>
              <span>2 Days Ago</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_bx">
              <img src={maxresdefault} alt="maxresdefault" />
              <p>You WON'T BELIEVE this JUST HAPPENED..</p>
              <span>2 Days Ago</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_bx">
              <img src={maxresdefault} alt="maxresdefault" />
              <p>You WON'T BELIEVE this JUST HAPPENED..</p>
              <span>2 Days Ago</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
