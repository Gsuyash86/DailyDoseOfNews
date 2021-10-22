import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  let apiKey = "c2a3c39198f64a9fb2a38db412f35f7b";

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News
              pageSize={6}
              country="in"
              apiKey={apiKey}
              category="general"
              key="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              pageSize={6}
              country="in"
              apiKey={apiKey}
              category="business"
              key="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              pageSize={6}
              country="in"
              apiKey={apiKey}
              category="entertainment"
              key="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News
              pageSize={6}
              country="in"
              apiKey={apiKey}
              category="general"
              key="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              pageSize={6}
              country="in"
              apiKey={apiKey}
              category="health"
              key="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              pageSize={6}
              country="in"
              apiKey={apiKey}
              category="science"
              key="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              pageSize={6}
              country="in"
              apiKey={apiKey}
              category="sports"
              key="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              pageSize={6}
              country="in"
              apiKey={apiKey}
              category="technology"
              key="technology"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
