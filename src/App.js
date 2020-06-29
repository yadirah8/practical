import React, { Fragment } from "react";

import "./App.module.css";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Footer />
    </Fragment>
  );
};

export default App;
