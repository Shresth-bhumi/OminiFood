import React from "react";

import { Link } from "react-scroll";

import "./heroText.css";

const HeroText = () => {
  return (
    <section className="hero-text-box">
      <h1 className="">
        Goodbye junk food.
        <br />
        Hello super healthy meals.
      </h1>
      <Link
        to="meals-section"
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={700}
        isDynamic={true}
        offset={-60}
        className="btn btn-full"
      >
        I'm hungry
      </Link>
      <Link
        to="testimonial-section"
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={1000}
        isDynamic={true}
        className="btn btn-ghost"
      >
        Show me more
      </Link>
    </section>
  );
};

export default HeroText;
