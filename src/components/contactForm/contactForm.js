import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./contactForm.css";
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [checked, handleCheck] = useState(true);

  return (
    <section className="contact-section">
      <div>
        <h2>We're happy to hear from you</h2>
        <Form>
          <Form.Group as={Row} controlId="formName" className="mb-3">
            <Form.Label column lg="4" md="4" sm="12">
              Name
            </Form.Label>
            <Col sm={12} md={8} lg={8} >
              <Form.Control
                className="form-font"
                size="lg"
                type="email"
                placeholder="Your name please"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formEmail" className="mb-3">
            <Form.Label column lg="4" md="4" sm="12">
              Email
            </Form.Label>
            <Col sm={12} md={8} lg={8} >
              <Form.Control
                className="form-font"
                size="lg"
                type="email"
                placeholder="Your email please"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formQuestion" className="mb-3">
            <Form.Label column lg="4" md="4" sm="12">
              How did you find us?
            </Form.Label>
            <Col sm={12} md={8} lg={8} >
              <Form.Control className="form-font" size="lg" as="select">
                <option>Friends</option>
                <option>Search Engine</option>
                <option>Advertisement</option>
                <option>Other</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formNewsLetter" className="mb-3">
            <Form.Label column lg="4" md="4" sm="12">
              Newsletter?
            </Form.Label>
            <Col sm={12} md={8} lg={8}  className="d-flex flex-column justify-content-center">
              <Form.Check
                custom
                type="checkbox"
                checked={checked}
                onChange={() => handleCheck(!checked)}
                label="Yes Please"
                id={`custom-checkbox`}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form" className="mb-3">
            <Form.Label column lg="4" md="4" sm="12">
              Drop us a line
            </Form.Label>
            <Col sm={12} md={8} lg={8} >
              <Form.Control
                as="textarea"
                rows="5"
                className="form-text-area"
                placeholder="Your message here"
              />
            </Col>
          </Form.Group>
          <Col xs={12} className="text-center mt-4">
            <Link to="#" className="btn btn-full">Send it!</Link>
          </Col>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
