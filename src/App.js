import React from "react";

import {
  Nave,
  HeadSection,
  Team,
  About,
  TDSldier,
  FAQ,
  Footer,
} from "../src/Components/index.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swiper from "swiper";

import "swiper/css";
function App() {
  return (
    <div>
      {" "}
      <div className="bTag">
        <div className="  mainContent">
          <div className="pageCon">
            <Nave />
            <HeadSection />
            <br />
            <br />
            <br />
            <About />
            <br />
            <br />
            <br />
            <TDSldier />
            <br />
            <br />
            <br />

            <Team />
            <br />
            <br />
            <br />
            <FAQ />
            <br />
            <br />
            <br />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
