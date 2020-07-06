import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.module.css";
import Hero from "./component/Hero/Hero";
import Features from "./component/Features/Features";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import NotFound from "./component/NotFound/NotFound ";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Hero />
          <Features />
          <Contact />
          <Footer />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default App;
