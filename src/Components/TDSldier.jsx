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
     

      <Bounce top>
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
          Services
          <br />
          <br />
          <br />
        </h1>
      </Bounce>

      <br />

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
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  height: "100%",
                  backgroundColor: "#4343",
                  borderRadius: "20px",
                  border: "1px solid #fff",
                }}
              >
                <CardActionArea>
                  <CardContent style={{ color: "#fff" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Service
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Service Description
                    </Typography>
                    <br />
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  height: "100%",
                  backgroundColor: "#4343",
                  borderRadius: "20px",
                  border: "1px solid #fff",
                }}
              >
                <CardActionArea>
                  <CardContent style={{ color: "#fff" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Service
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Service Description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Cont
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Cont
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  height: "100%",
                  backgroundColor: "#4343",
                  borderRadius: "20px",
                  border: "1px solid #fff",
                }}
              >
                <CardActionArea>
                  <CardContent style={{ color: "#fff" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Service
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Service Description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Cont
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Cont
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  height: "100%",
                  backgroundColor: "#4343",
                  borderRadius: "20px",
                  border: "1px solid #fff",
                }}
              >
                <CardActionArea>
                  <CardContent style={{ color: "#fff" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Service
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Service Description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Cont
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Cont
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  height: "100%",
                  backgroundColor: "#4343",
                  borderRadius: "20px",
                  border: "1px solid #fff",
                }}
              >
                <CardActionArea>
                  <CardContent style={{ color: "#fff" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Service
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Service Description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Cont
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      Cont
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Bounce>
      </Bounce>
    </div>
  );
};

export default TDSldier;
