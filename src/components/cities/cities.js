import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./cities.css";
import cities from "./citiesImg";
import { twitter, person, star } from "../../icons/ionicons/index";
import { Link } from "react-router-dom";

const Cities = () => {
  const { lisbon, london, berlin, sanFrancisco } = cities;
  return (
    <section className="cities-section">
      <Container>
        <h2>We're currently in these cities</h2>
        <Row>
          <Col xs={12} s={6} md={6} lg={3}>
            <img className="city-img" src={lisbon} alt="Lisbon City" />
            <div className="city-details">
              <h3 className="city-name">Lisbon</h3>
              <div className="city-feature">
                <img
                  src={person.icon}
                  alt="person-icon"
                  className="icon-small"
                />
                1600+ happy eaters
              </div>
              <div className="city-feature">
                <img src={star.icon} alt="star-icon" className="icon-small" />
                60+ top chefs
              </div>
              <div className="city-feature">
                <img
                  src={twitter.iconOrange}
                  alt="twitter-icon"
                  className="icon-small"
                />
                <Link className="twitter-link" to="#">@omnifood_lx</Link>
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={3}>
            <img
              className="city-img"
              src={sanFrancisco}
              alt="San Fransisco City"
            />
            <div className="city-details">
              <h3 className="city-name">San Fransisco</h3>
              <div className="city-feature">
                <img
                  src={person.icon}
                  alt="person-icon"
                  className="icon-small"
                />
                3700+ happy eaters
              </div>
              <div className="city-feature">
                <img src={star.icon} alt="star-icon" className="icon-small" />
                160+ top chefs
              </div>
              <div className="city-feature">
                <img
                  src={twitter.iconOrange}
                  alt="twitter-icon"
                  className="icon-small"
                />
                <Link className="twitter-link" to="#">
                @omnifood_sf
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={3}>
            <img className="city-img" src={berlin} alt="Berlin City" />
            <div className="city-details">
              <h3 className="city-name">Berlin</h3>
              <div className="city-feature">
                <img
                  src={person.icon}
                  alt="person-icon"
                  className="icon-small"
                />
                2300+ happy eaters
              </div>
              <div className="city-feature">
                <img src={star.icon} alt="star-icon" className="icon-small" />
                110+ top chefs
              </div>
              <div className="city-feature">
                <img
                  src={twitter.iconOrange}
                  alt="twitter-icon"
                  className="icon-small"
                />
                <Link className="twitter-link" to="#">@omnifood_berlin</Link>
              </div>
            </div>
          </Col>
          <Col xs={12} s={6} md={6} lg={3}>
            <img className="city-img" src={london} alt="London City" />
            <div className="city-details">
              <h3 className="city-name">London</h3>
              <div className="city-feature">
                <img
                  src={person.icon}
                  alt="person-icon"
                  className="icon-small"
                />
                1200+ happy eaters
              </div>
              <div className="city-feature">
                <img src={star.icon} alt="star-icon" className="icon-small" />
                50+ top chefs
              </div>
              <div className="city-feature">
                <img
                  src={twitter.iconOrange}
                  alt="twitter-icon"
                  className="icon-small"
                />
                <Link className="twitter-link" to="#">@omnifood_london</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cities;
