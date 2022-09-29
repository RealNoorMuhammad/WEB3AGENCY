import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Bounce from "react-reveal/Bounce";

const FAQ = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="faq" className="container">
    
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
          F A Q
        </h1>
      </Bounce>

      <br />

      <Bounce right>
        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "#fff" }}>
              Q:
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ color: "#fff" }}>
            <Typography>
              A:
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Bounce>

      <br />

      <Bounce left>
        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "#fff" }}>
              Q:
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ color: "#fff" }}>
            <Typography>
              A:
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Bounce>

      <br />
      <Bounce right>
        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "#fff" }}>
              Q:
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ color: "#fff" }}>
            <Typography>
              A:
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Bounce>

      <br />
      <Bounce left>
        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "#fff" }}>
              Q:
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ color: "#fff" }}>
            <Typography>
              A:
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Bounce>
      <br />
      <Bounce right>
        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "#fff" }}>
              Q:
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ color: "#fff" }}>
            <Typography>
              A:
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Bounce>
      <br />
      <Bounce left>
        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "#fff" }}>
              Q:
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ color: "#fff" }}>
            <Typography>
              A:
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Bounce>
      <br />
      <Bounce right>
        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "#fff" }}>
              Q:
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ color: "#fff" }}>
            <Typography>
              A:
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Bounce>
      <br />
    </div>
  );
};

export default FAQ;
