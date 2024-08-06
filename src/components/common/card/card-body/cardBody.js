import React from "react";
import { Row, Col } from "react-bootstrap";
import checkMark from "../../../../icons/ionicons/ios-checkmark.svg";
import "./cardBody.css";

const CardBody = ({ detailsList }) => {
  const list = detailsList.map(detail => (
    <li key={detail} className="list-item">
      <img className="check-mark" src={checkMark} alt="check mark" /> {detail}
    </li>
  ));
  return (
    <div className="card-body">
      <Row>
        <Col xs={12} className="details-container">
          <ul className="detail-list mt-3">{list}</ul>
        </Col>
        <Col xs={12} className="text-center">
          <button className="signup-btn">Sign up now</button>
        </Col>
      </Row>
    </div>
  );
};

export default CardBody;
