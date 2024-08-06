import React from "react";
import { Row, Col } from "react-bootstrap";
import "./cardHeading.css";

const CardHeading = ({ cardTitle, cardPrice, priceCaption }) => {
  return (
    <Row className="card-heading">
      <Col xs={12}>
        <h3 className="card-title">{cardTitle}</h3>
      </Col>
      <Col xs={12} className="pr-2">
        <div className="pricing">
          ${cardPrice} <span>/ month</span>
        </div>
      </Col>
      <Col xs={12}>
        {priceCaption ? <div className="price-caption">{priceCaption}</div> : null}
      </Col>
    </Row>
  );
};

export default CardHeading;
