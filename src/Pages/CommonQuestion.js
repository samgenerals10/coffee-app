import { useState } from "react";
import React from "react";
import "./CommonQuestion.css";
import { Button, Collapse, Row } from "react-bootstrap";

const CommonQuestion = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [val, setVal] = useState(true);
  // const [open, setOpen] = useState(false);
  // const handleButtonClick = () => {
  //   setOpen(!open);
  //   };

  const handleClick = () => {
    setOpen2(!open2);
    setVal(!val);
  };
  return (
    <div className="text-center " id="common">
      <br />
      <br />
      <h1 >COMMON CUSTOMER QUESTION </h1>
      <br />
      <div className="d-flex justify-content-center align-items-center flex-column gap-3">
        <Row className="collapse_session text-center">
          <div>
            <section className=" d-flex justify-content-between">
              <h5 className="commonQuestion_header">
                HOW DO I SET UP AN OFFICE COFFEE STATION FOR MY COMPANY
              </h5>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
                className={`questionOne_botton  ${
                  !open ? "" : "hide-background"
                } btn-outline-dark`}
              >
                {!open ? "+" : "-"}
              </Button>
            </section>
            <Collapse className="questionOne_div" in={open}>
              <div id="example-fade-text" className="questionOne_div ">
                <p className="commonQuestion_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Collapse>
          </div>
        </Row>

        <Row className="collapse_session">
          <div>
            <section className=" d-flex justify-content-between">
              <h6 className="commonQuestion_header">
                WHAT FLAVOUR SHOULD I GET ?..
              </h6>
              <Button
                onClick={handleClick}
                aria-controls="example-fade-text"
                aria-expanded={open2}
                // className="questionOne_botton btn-outline-dark"
                className={`questionOne_botton  ${
                  !open2 ? "" : "hide-background"
                } btn-outline-dark`}
              >
                {val ? "+" : "-"}
              </Button>
            </section>

            <Collapse className="questionOne_div" in={open2}>
              <div id="example-fade-text" className="questionOne_div">
                <p className="commonQuestion_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </Collapse>
          </div>
        </Row>
        <Row className="collapse_session">
          <div>
            <section className=" d-flex justify-content-between">
              <h6 className="commonQuestion_header">
                HOW DO COFEE MACHINE WORKS IN AN OFFICE?..
              </h6>
              <Button
                onClick={() => setOpen3(!open3)}
                aria-controls="example-fade-text"
                aria-expanded={open3}
                className={`questionOne_botton  ${
                  !open3 ? "" : "hide-background"
                } btn-outline-dark`}
              >
                {!open3 ? "+" : "-"}
              </Button>
            </section>

            <Collapse className="questionOne_div" in={open3}>
              <div id="example-fade-text" className="questionOne_div">
                <p className="commonQuestion_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Collapse>
          </div>
        </Row>

        <Row className="collapse_session">
          <div>
            <section className=" d-flex justify-content-between">
              <h6 className="commonQuestion_header">
                HOW MUCH DOES AN OFFICE MACHINE WORKS?..
              </h6>
              <Button
                onClick={() => setOpen4(!open4)}
                aria-controls="example-fade-text"
                aria-expanded={open4}
                className={`questionOne_botton  ${
                  !open4 ? "" : "hide-background"
                } btn-outline-dark`}
              >
                {!open4 ? "+" : "-"}
              </Button>
            </section>
            <Collapse className="questionOne_div" in={open4}>
              <div id="example-fade-text" className="questionOne_div">
                <p className="commonQuestion_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </Collapse>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default CommonQuestion;
