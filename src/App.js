import React from "react";

import {
  Nave,
  HeadSection,
  Team,
  About,
  TDSldier,

  Footer,
} from "../src/Components/index.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
            <br />
            <About />
            <br />
            <br />
            <br />
            <br />
            <TDSldier />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Team />
           
          
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
