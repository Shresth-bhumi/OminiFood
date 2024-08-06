import React from "react";
import CardHeading from "./card-heading/cardHeading";
import CardBody from "./card-body/cardBody";
import "./card.css";

const Card = ({ title, details, price, caption }) => {
  return (
    <div className="signup-card">
      <div className="card-container">
        <CardHeading
          cardTitle={title}
          cardPrice={price}
          priceCaption={caption}
        />
        <CardBody detailsList={details} />
      </div>
    </div>
  );
};

export default Card;
