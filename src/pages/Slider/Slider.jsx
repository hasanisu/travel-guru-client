import React from "react";
import image from "../../resources/Photos/Sajek.png";
import image1 from "../../resources/Photos/Sreemongol.png";
import image2 from "../../resources/Photos/sundorbon.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className=""
      >
        <SwiperSlide className="container ">
          <Link to="/sajek">
            <img className=" h-full rounded-lg" src={image} />
            <div className="bottom-left text-3xl font-semibold">SAJEK</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="container ">
          <Link to='srimongol'>
            <img className=" h-full rounded-lg" src={image1} />
            <div className="bottom-left text-3xl font-semibold">SRIMONGOL</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="container ">
          <Link to='/sunderban'>
            <img className=" h-full rounded-lg" src={image2} />
            <div className="bottom-left text-3xl font-semibold">SUNDERBAN</div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
