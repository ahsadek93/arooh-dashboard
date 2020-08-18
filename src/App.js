import React from "react";
import "./App.css";
import { HashRouter  as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics"
import Settings from "./pages/Settings"
import CreateForm from "./pages/CreateForm"



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
          <Route path="/CreateForm">
            <CreateForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
