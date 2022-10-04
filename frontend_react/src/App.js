// external imports
import React from "react";

// internal file system imports
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Work />
      <Skills />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
