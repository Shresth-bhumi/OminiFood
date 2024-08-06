import React from "react";
import "./meals.css";
import { Row, Col } from "react-bootstrap";
import { meals } from "../../img/mealsImage";

const Meals = () => {
  return (
    <section className="meals-section">
      <Row className="meal-row">
        <Col className="meal-col" xs={6} s={6} md={3} lg={3}>
          <figure className="meal-photo">
            <img
              className="meal-img"
              src={meals.meal1}
              alt="Korean bibimbap with egg and vegetables"
            />
          </figure>
        </Col>
        <Col className="meal-col" xs={6} s={6} md={3} lg={3}>
          <figure className="meal-photo">
            <img
              className="meal-img"
              src={meals.meal2}
              alt="Simple italian pizza with cherry tomatoes"
            />
          </figure>
        </Col>
        <Col className="meal-col" xs={6} s={6} md={3} lg={3}>
          <figure className="meal-photo">
            <img
              className="meal-img"
              src={meals.meal3}
              alt="Chicken breast steak with vegetables"
            />
          </figure>
        </Col>
        <Col className="meal-col" xs={6} s={6} md={3} lg={3}>
          <figure className="meal-photo">
            <img
              className="meal-img"
              src={meals.meal4}
              alt="Autumn pumpkin soup"
            />
          </figure>
        </Col>
      </Row>

      <Row className="meal-row">
        <Col className="meal-col" xs={6} s={6} md={3} lg={3}>
          <figure className="meal-photo">
            <img
              className="meal-img"
              src={meals.meal5}
              alt="Paleo beef steak with vegetables"
            />
          </figure>
        </Col>

        <Col className="meal-col" xs={6} s={6} md={3} lg={3}>
          <figure className="meal-photo">
            <img
              className="meal-img"
              src={meals.meal6}
              alt="Healthy baguette with egg and vegetables"
            />
          </figure>
        </Col>

        <Col className="meal-col" xs={6} s={6} md={3} lg={3}>
          <figure className="meal-photo">
            <img
              className="meal-img"
              src={meals.meal7}
              alt="Burger with cheddar and bacon"
            />
          </figure>
        </Col>

        <Col className="meal-col" xs={6} s={6} md={3} lg={3}>
          <figure className="meal-photo">
            <img
              className="meal-img"
              src={meals.meal8}
              alt="Granola with cherries and strawberries"
            />
          </figure>
        </Col>
      </Row>
    </section>
  );
};



export default Meals;
