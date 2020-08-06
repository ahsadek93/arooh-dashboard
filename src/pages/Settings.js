import React, { Component } from "react";
import AppDashboardNav from "../components/AppDashboardNav";
class Settings extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <AppDashboardNav />
          <div className="col-8 content-body-marginX">
            <div className="row">
              <h1>Settings</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
