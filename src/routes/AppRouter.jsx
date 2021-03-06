import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import AboutPage from "./AboutPage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer"

const AppRouter = () => {
  return (
    <Router history={history}>
      <div className="app">
        <MenuBar />
        <Switch>
          <Route path="/" component={AboutPage} exact={true} />
          <Route path="/home" component={AboutPage} exact={true} />
          <Route path="/about" component={AboutPage} exact={true} />
          <Route path="/portfolio" component={PortfolioPage} exact={true} />
          <Route path="/contact" component={ContactPage} exact={true} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
