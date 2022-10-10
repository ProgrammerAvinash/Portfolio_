import React from "react";
import { Switch, Route } from "react-router-dom";
import landingpage from "./landingpage";
import blog from "./blog";
import resume from "./resume";
import contact from "./contact";
import projects from "./projects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingpage} />
    <Route exact path="/My_Portfolio" component={landingpage} />
    <Route path="/blog" component={blog} />
    <Route path="/resume" component={resume} />
    <Route path="/contact" component={contact} />
    <Route path="/projects" component={projects} />
  </Switch>
);

export default Main;
