import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import RubberBand from "react-reveal/RubberBand";
import open from "../images/op.png";

import { BsTwitter, BsDiscord } from "react-icons/bs";
const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-lg-start  footerbg"
      style={{ color: "#fff", textDecoration: "none" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span style={{ color: "#fff", fontWeight: "600" }}>
            Connect with us on our social networks:
          </span>
        </div>

        <div>
          <a href="https://twitter.com/sndc8_xyz" className="me-4 text-reset">
            <BsTwitter />
          </a>
          <a href="https://twitter.com/sndc8_xyz" className="me-4 text-reset">
            <BsDiscord />
          </a>
          <a href="https://twitter.com/sndc8_xyz" className="me-4 text-reset">
            <img src={open} style={{ height: "15px" }} />
          </a>
        </div>
      </section>

      <section className="" style={{ color: "#fff" }}>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me--1" />
                SNDC8 Web3 | Agency
              </h6>
              <p   style={{ color: "#fff", fontWeight: "600" }}>Copyright © 2022 | All rights reserved.</p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

              <p style={{ color: "#fff", fontWeight: "600" }}>
                <MDBIcon icon="envelope" className="me--3" />
                info@example.com
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <a href="">
                <button class="noselect">Submit Inquiry</button>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};

export default Footer;
