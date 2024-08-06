import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {infinite, stopwatch, nutrition, cart} from '../../icons/ionicons/index';
import "./features.css";

const Features = () => {
  return (
    <section className="features-section">
      <Container>
        <Row>
          <Col>
            <h2>Get food fast {"\u2014"} not fast food</h2>
            <p className="paragraph">
              Hello, we're Omnifood, your new premium food delivery service. We
              know you're always busy. No time for cooking. So let us take care
              of that, we're really good at it, we promise!
            </p>
          </Col>
        </Row>

        <Row className="features">
          <Col className="box mb-3" md={3} s={6} xs={12} >
            <img src={infinite.icon} className="icon" alt="infinity icon" />
            <h3 className="mt-3 mb-3">Up to 365 days/year</h3>
            <p>
              Never cook again! We really mean that. Our subscription plans
              include up to 365 days/year coverage. You can also choose to order
              more flexibly if that's your style.
            </p>
          </Col>
          <Col className="box mb-3" md={3} s={6} xs={12} >
            <img src={stopwatch.icon} className="icon" alt="stopwatch icon" />
            <h3 className="mt-3 mb-3">Ready in 20 minutes</h3>
            <p>
              You're only twenty minutes away from your delicious and super
              healthy meals delivered right to your home. We work with the best
              chefs in each town to ensure that you're 100% happy.
            </p>
          </Col>
          <Col className="box mb-3" md={3} s={6} xs={12} >
            <img src={nutrition.icon} className="icon" alt="nutrition icon" />
            <h3 className="mt-3 mb-3">100% organic</h3>
            <p>
              All our vegetables are fresh, organic and local. Animals are
              raised without added hormones or antibiotics. Good for your
              health, the environment, and it also tastes better!
            </p>
          </Col>
          <Col className="box mb-3" md={3} s={6} xs={12} >
            <img src={cart.icon} className="icon" alt="cart icon" />
            <h3 className="mt-3 mb-3">Order anything</h3>
            <p>
              We don't limit your creativity, which means you can order whatever
              you feel like. You can also choose from our menu containing over
              100 delicious meals. It's up to you!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
