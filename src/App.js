import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Features from "./components/features/features";
import Meals from "./components/meals/meals";
import Steps from "./components/steps/steps";
import Cities from "./components/cities/cities";
import Testimonials from "./components/testimonials/testimonials";
import Signup from "./components/signup/signup";
import ContactForm from "./components/contactForm/contactForm";
import Footer from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Features />
      <Meals />
      <Steps />
      <Cities />
      <Testimonials />
      <Signup />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}

export default App;
