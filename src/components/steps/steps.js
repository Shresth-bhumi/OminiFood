import React from "react";
import { Row, Col } from "react-bootstrap";
import phone from "../../img/app-iPhone.png";
import playStore from "../../img/download-app-android.png";
import appStore from "../../img/download-app.svg";
import "./steps.css";



const Steps = () => {
  return (
    <section className="steps-section" id="steps">
      <h2>How it works {"\u2014"} Simple as 1, 2, 3</h2>
      <Row className="steps-container">
        <Col xs={12} s={6} md={6} lg={6} className="app-col">
          <img  
            className="app-screen"
            src={phone}
            alt="Omnifood app on iPhone"
          />
        </Col>
        <Col xs={12} s={6} md={6} lg={6} className="steps-col">
          <div className="steps-box">
            <div className="step-number">1</div>
            <p className="steps">
              Choose the subscription plan that best fits your needs and sign up
              today.
            </p>
          </div>
          <div className="steps-box">
            <div className="step-number second-step-number">2</div>
            <p className="steps">
              Order your delicious meal using our mobile app or website. Or you
              can even call us!
            </p>
          </div>
          <div className="steps-box">
            <div className="step-number">3</div>
            <p className="steps">
              Enjoy your meal after less than 20 minutes. See you the next time!
            </p>
          </div>
          <div className="app-links">
            <button className="app-btn">
              <img src={appStore} alt="App Store Button" />
            </button>
            <button className="app-btn">
              <img src={playStore} alt="Play Store Button" />
            </button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Steps;
