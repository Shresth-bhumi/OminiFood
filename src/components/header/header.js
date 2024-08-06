import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import Navigation from "../navigation/navigation";
import HeroText from "../heroText/heroText";
import { Container } from "react-bootstrap";

const Header = () => {
  const [height, setHeight] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  return (
    <header className="header" ref={ref}>
      <Container>
        <Navigation height={height} />
        <HeroText />
      </Container>
    </header>
  );
};

export default Header;
