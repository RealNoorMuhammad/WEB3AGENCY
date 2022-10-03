import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Bounce from "react-reveal/Bounce";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const TDSldier = () => {
  return (
    <div id="services">
      <br />
      <br />
      <h1
        style={{
          color: "#fff",
          borderRadius: "20px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          fontWeight: "600",
        }}
      >
        {" "}
        Services&nbsp;
        <br />
        <br />
        <br />
      </h1>

      <br />

      <div className="container">
        {" "}
        <Bounce>
          <Bounce right>
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
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div class="box">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div class="content">
                    <h2 style={{ fontSize: "24px", textAlign: "center" }}>
                      {" "}
                      Web3 Consulting{" "}
                    </h2>
                    <br />
                    <p style={{ textAlign: "center" }}>
                      <a>Description</a>
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="box">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div class="content">
                    <h2 style={{ fontSize: "24px", textAlign: "center" }}>
                      {" "}
                      Web3 Strategy{" "}
                    </h2>
                    <br />
                    <p style={{ textAlign: "center" }}>
                      <a>Description</a>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <a>Cont</a>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <a>Cont</a>
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="box">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div class="content">
                    <h2 style={{ fontSize: "24px", textAlign: "center" }}>
                      {" "}
                      Artwork & Metadata{" "}
                    </h2>
                    <br />
                    <p style={{ textAlign: "center" }}>
                      <a>Description</a>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <a>Cont</a>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <a>Cont</a>
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="box">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div class="content">
                    <h2 style={{ fontSize: "24px", textAlign: "center" }}>
                      {" "}
                      Community Building{" "}
                    </h2>
                    <br />
                    <p style={{ textAlign: "center" }}>
                      <a>Description</a>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <a>Cont</a>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <a>Cont</a>
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="box">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div class="content">
                    <h2 style={{ fontSize: "24px", textAlign: "center" }}>
                      {" "}
                      Robust Network{" "}
                    </h2>
                    <br />
                    <p style={{ textAlign: "center" }}>
                      <a>Description</a>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <a>Cont</a>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <a>Cont</a>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Bounce>
        </Bounce>
      </div>
    </div>
  );
};

export default TDSldier;
