import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import "./navigation.css";
import logoWhite from "../../img/logo-white.png";
import logo from "../../img/logo.png";

const Navigation = ({ height }) => {
  const [scrolled, setScrolled] = useState(false);

  function isScrolled() {
    const isTop = window.scrollY < height;
    if (!isTop) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", isScrolled);
    return function cleanup() {
      window.removeEventListener("scroll", isScrolled);
    };
  });

  return (
    <Navbar
      className={scrolled ? "nav scrolled" : "nav"}
      variant={scrolled ? "light" : "dark"}
      expand="md"
    >
      <Navbar.Brand>
        <Link
          to="header"
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={800}
          isDynamic={true}
        >
          <img
            src={scrolled ? logo : logoWhite}
            alt="Company Logo"
            className={scrolled ? "logo-scrolled" : "logo"}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="navbar-toggle"
      />
      <Navbar.Collapse
        className={scrolled ? "text-black" : "text-white"}
        id="basic-navbar-nav"
      >
        <Nav className={scrolled ? "ml-auto nav-scroll" : "ml-auto"}>
          <Link
            activeClass="active-link"
            to="features-section"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={800}
            isDynamic={true}
            className={
              scrolled ? "navigation-link nav-scrolled" : "navigation-link"
            }
          >
            Food Delivery
          </Link>

          <Link
            activeClass="active-link"
            to="steps-section"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-70}
            duration={900}
            isDynamic={true}
            className={
              scrolled ? "navigation-link nav-scrolled" : "navigation-link"
            }
          >
            How it works
          </Link>

          <Link
            activeClass="active-link"
            to="cities-section"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-50}
            duration={1000}
            isDynamic={true}
            className={
              scrolled ? "navigation-link nav-scrolled" : "navigation-link"
            }
          >
            Our cities
          </Link>

          <Link
            activeClass="active-link"
            to="signup-section"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-50}
            duration={1000}
            isDynamic={true}
            className={
              scrolled ? "navigation-link nav-scrolled" : "navigation-link"
            }
          >
            Sign Up
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
