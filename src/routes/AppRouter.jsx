import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import history from "../history";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";
import MenuBar from "../components/MenuBar"

const AppRouter = () => {
  return (
    <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
      <div className="app">
        <MenuBar />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/home" component={HomePage} exact={true} />

          <Route path="/about" component={AboutPage} exact={true} />
          <Route path="/portfolio" component={PortfolioPage} exact={true} />
          <Route path="/contact" component={ContactPage} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;