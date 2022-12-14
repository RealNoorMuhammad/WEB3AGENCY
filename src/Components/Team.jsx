import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import Bounce from "react-reveal/Bounce";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Grid } from "@mui/material";

import vat from "../images/vat.png";

import NuFracTal from "../images/Nufractal.png";
import SonOfLasG from "../images/Son.png";
import reeee from "../images/Ree.png";
import Milk from "../images/Milk.png";

import Team5 from "../images/Team5.png";
import Team6 from "../images/Team6.png";
import Team7 from "../images/Team7.png";
import Team8 from "../images/Team8.png";

const Team = () => {
  return (
    <div id="team">
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
        Our Team&nbsp;
        <br />
        <br />
        <br />
      </h1>

      <br />
      <div className="container">
        {" "}
        <Swiper
          effect={"coverflow"}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
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
          className="mySwiper"
        >
          <SwiperSlide>
            <Grid item md={6} xs={12} sm={12} lg={3}>
              <MDBCard
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  background: "#4343",
                  borderRadius: "10px",
                }}
              >
                <a href="https://twitter.com/Sonoflasg">
                  {" "}
                  <MDBCardImage
                    src={SonOfLasG}
                    position="top"
                    alt="..."
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </a>

                <MDBCardBody
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    background: "#4343",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <MDBCardTitle>SonOfLasG</MDBCardTitle>
                  <MDBCardText>Description</MDBCardText>
                  <MDBCardTitle>Role</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid item md={6} xs={12} sm={12} lg={3}>
              <MDBCard
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  background: "#4343",
                  borderRadius: "10px",
                }}
              >
                <a href="https://twitter.com/NuFracTal">
                  {" "}
                  <MDBCardImage
                    src={NuFracTal}
                    position="top"
                    alt="..."
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </a>

                <MDBCardBody
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    background: "#4343",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <MDBCardTitle>NuFracTal</MDBCardTitle>
                  <MDBCardText>Description</MDBCardText>
                  <MDBCardTitle>Role</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid item md={6} xs={12} sm={12} lg={3}>
              <MDBCard
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  background: "#4343",
                  borderRadius: "10px",
                }}
              >
                <a href="https://twitter.com/reeee88">
                  {" "}
                  <MDBCardImage
                    src={reeee}
                    position="top"
                    alt="..."
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </a>

                <MDBCardBody
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    background: "#4343",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <MDBCardTitle>reeee</MDBCardTitle>
                  <MDBCardText>Description</MDBCardText>
                  <MDBCardTitle>Role</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid item md={6} xs={12} sm={12} lg={3}>
              <MDBCard
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  background: "#4343",
                  borderRadius: "10px",
                }}
              >
                <a href="">
                  {" "}
                  <MDBCardImage
                    src={Milk}
                    position="top"
                    alt="..."
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </a>

                <MDBCardBody
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    background: "#4343",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <MDBCardTitle>Milk and Cookies</MDBCardTitle>
                  <MDBCardText>Description</MDBCardText>
                  <MDBCardTitle>Role</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid item md={6} xs={12} sm={12} lg={3}>
              <MDBCard
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  background: "#4343",
                  borderRadius: "10px",
                }}
              >
                <a href="">
                  {" "}
                  <MDBCardImage
                    src={Team5}
                    position="top"
                    alt="..."
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </a>

                <MDBCardBody
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    background: "#4343",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <MDBCardTitle>Unknown</MDBCardTitle>
                  <MDBCardText>Description</MDBCardText>
                  <MDBCardTitle>Role</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid item md={6} xs={12} sm={12} lg={3}>
              <MDBCard
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  background: "#4343",
                  borderRadius: "10px",
                }}
              >
                <a href="">
                  {" "}
                  <MDBCardImage
                    src={Team6}
                    position="top"
                    alt="..."
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </a>

                <MDBCardBody
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    background: "#4343",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <MDBCardTitle>Unknown</MDBCardTitle>
                  <MDBCardText>Description</MDBCardText>
                  <MDBCardTitle>Role</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid item md={6} xs={12} sm={12} lg={3}>
              <MDBCard
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  background: "#4343",
                  borderRadius: "10px",
                }}
              >
                <a href="">
                  {" "}
                  <MDBCardImage
                    src={Team7}
                    position="top"
                    alt="..."
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </a>

                <MDBCardBody
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    background: "#4343",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <MDBCardTitle>Unknown</MDBCardTitle>
                  <MDBCardText>Description</MDBCardText>
                  <MDBCardTitle>Role</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid item md={6} xs={12} sm={12} lg={3}>
              <MDBCard
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  background: "#4343",
                  borderRadius: "10px",
                }}
              >
                <a href="">
                  {" "}
                  <MDBCardImage
                    src={Team8}
                    position="top"
                    alt="..."
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </a>

                <MDBCardBody
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    background: "#4343",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <MDBCardTitle>Unknown</MDBCardTitle>
                  <MDBCardText>Description</MDBCardText>
                  <MDBCardTitle>Role</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </Grid>
          </SwiperSlide>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
