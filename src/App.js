import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics"
import Settings from "./pages/Settings"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/Statistics">
            <Statistics />
          </Route>
          <Route path="/Settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
