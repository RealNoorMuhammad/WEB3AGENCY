import React from "react";
import mHeading from "../images/we.png";
import Wobble from "react-reveal/Wobble";
import Zoom from "react-reveal/Zoom";
import HeadShake from "react-reveal/HeadShake";
import gloryBgVideo from "../video/gloryBgVideo.mp4";
import Jello from "react-reveal/Jello";
import Shake from "react-reveal/Shake";

const HeadSection = () => {
  return (
    <div>
      {" "}
      <div id="home" className="section1">
        <div className="lastSpliterSec1 "> </div>
        <div style={{ top: "0", left: "0", right: "0" }}>
          <video className="videoTag" loop="true" autoplay="autoplay" muted>
            <source src={gloryBgVideo} type="video/mp4" />
          </video>
        </div>
        <div className="sections">
          <div className="firstLayer ">
            <Shake>
              <div
                className="mHead"
                style={{ justifyContent: "center", textAlign: "center" }}
              >
                <Jello>
                  <img src={mHeading} className="mainimg p-5" alt="..." />
                </Jello>
              </div>
            </Shake>
            <Wobble></Wobble>
            <Zoom top>
              <div className="text-center  pt-5  activi">
                <h4 className="">
                  <br />
                  
                  <strong className="main_text  neon">
                    <span> ACTIVATE YOUR WEB3 VISION </span>
                  </strong>
                </h4>
                <br />
                <br />
                <br />
                <br />
                <div className="mb_set">
                  <h3>
                    <em>
                      <span className="other_text">
                        We leverage the skills, knowledge, and passion of our
                        team of web3 experts to positively impact the space and
                        assist those looking to contribute to web3 meaningfully.
                      </span>
                    </em>
                  </h3>
                  <br />
                  <br />
                  <h3>
                    <em>
                      <span className="other_text">
                        We assist web3 startups with navigating complicated
                        concepts while collaborating and networking with
                        industry experts who utilize the web3 technology stack
                        to deliver innovative solutions.
                      </span>
                    </em>
                  </h3>
                  <br />
                  <br />
                  <h3>
                    <em>
                      <span className="other_text">
                        Put simply, SNDC8 strives to contribute to the
                        innovation, enhancement, and refinement of web3, as we
                        believe web3 technology will benefit billions of people
                        around the globe.
                      </span>
                    </em>
                  </h3>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default HeadSection;
