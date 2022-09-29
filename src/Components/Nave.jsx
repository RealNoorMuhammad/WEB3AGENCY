import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import open from "../images/op.png";

import { BsTwitter, BsDiscord } from "react-icons/bs";
import Spin from "react-reveal/Spin";
const Nave = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      position="fixed"
      style={{ backgroundColor: "#4343 ", borderRadius: "59px 59px 0px 0px" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <Spin>
            <span style={{ fontWeight: "900" }}>SNDC8</span>
          </Spin>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <span style={{ fontWeight: "600", color: "#fff" }}> Web3 | Agency</span>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav style={{ justifyContent: "center", textAlign: "center" }}>
            <Nav.Link
              href="#about"
              className="me-2 text-reset"
              style={{ color: "#fff", fontWeight: "600" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="me-2 text-reset"
              style={{ color: "#fff", fontWeight: "600" }}
            >
              Services
            </Nav.Link>

            <Nav.Link
              href="#team"
              style={{ color: "#fff", fontWeight: "600" }}
              className="me-2 text-reset"
            >
              Our Team
            </Nav.Link>

            <Nav.Link
              href="#faq"
              style={{ color: "#fff", fontWeight: "600" }}
              className="me-2 text-reset"
            >
              FAQ
            </Nav.Link>

            <Nav.Link href="#roadmap">
              {" "}
              <a
                href="https://twitter.com/sndc8_xyz"
                className="me-2 text-reset"
              >
                <BsTwitter style={{ color: "#fff", fontWeight: "600" }} />
              </a>
            </Nav.Link>
            <Nav.Link href="#roadmap">
              {" "}
              <a
                href="https://twitter.com/sndc8_xyz"
                className="me-2 text-reset"
              >
                <BsDiscord style={{ color: "#fff", fontWeight: "600" }} />
              </a>
            </Nav.Link>
            <Nav.Link href="#roadmap">
              {" "}
              <a
                href="https://twitter.com/sndc8_xyz"
                className="me-2 text-reset"
              >
                <img src={open} style={{ height: "15px" }} />
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nave;
