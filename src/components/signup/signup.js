import React from "react";
import Card from "../common/card/card";
import { Row, Col } from "react-bootstrap";
import "./signup.css";

const Signup = () => {
  const premiumDetails = [
    "1 meal everyday",
    "Order 24/7",
    "Access to new creations",
    "Free delivery"
  ];

  const proDetails = [
    "1 meal 10 days/month",
    "Order 24/7",
    "Access to newest creations",
    "Free delivery"
  ];

  const starterDetails = [
    "1 meal",
    "Order from 8 am to 12 pm",
    "Free delivery"
  ];
  return (
    <section className="signup-section">
      <h2>Start Eating Healthy Today</h2>
      <div className="signup-container">
        <Row>
          <Col xs={12} s={12} md={4} lg={4}>
            <Card
              title={"Premium"}
              caption="That's only 13.30$ per meal"
              price={399}
              details={premiumDetails}
              active={true}
            />
          </Col>
          <Col xs={12} s={12} md={4} lg={4}>
            <Card
              title={"Pro"}
              caption="That's only 14.90$ per meal"
              price={149}
              details={proDetails}
            />
          </Col>
          <Col xs={12} s={12} md={4} lg={4}>
            <Card title={"Starter"} price={19} details={starterDetails} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Signup;
