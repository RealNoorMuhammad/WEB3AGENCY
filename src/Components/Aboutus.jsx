import React from "react";
import { Grid } from "@mui/material";

import eth from "../images/gip.gif";
const Aboutus = () => {
  return (
    <div id="about">
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
        About Us&nbsp;
        <br />
        <br />
        <br />
      </h1>

      <br />
      <div className="container">
        <Grid container spacing={2}>
          <Grid item md={6} lg={6} xs={12} sm={12}>
            <br />
            <br />
            <br />
            <br />
            <p
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "500",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              SNDC8 is a blockchain and NFT native agency helping traditional
              businesses succeed in the endeavour to incorporate web3
              strategies. Leveraging cutting edge technology to bring
              innovation, untapped revenue streams, loyalty, and unsurpassed
              community and brand building opportunities to legacy institutions.
              <br />
              <br />
              We are a core group of web3 enthusiasts, builders, professionals,
              contributors, and creatives. Although broad in our expertise, the
              central driving force for everything we do is to celebrate,
              elevate, and innovate in the web3 space.
            </p>
          </Grid>
        
          <Grid item md={6} lg={6} xs={12} sm={12}>
          <br />

            <p
              className="b-game-card"
              style={{ color: "#fff", fontSize: "20px", fontWeight: "100" }}
            >
              <img
                className="b-game-card__cover"
                src={eth}
                style={{
                  height: "100%",
                  width: "90%",
                  position: "relative",
                  top: "-50px",
                }}
              />
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Aboutus;
