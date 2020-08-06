import React, { Component } from "react";
import AppDashboardNav from "../components/AppDashboardNav";
import AppDashboardSideview from "../components/AppDashboardSideview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

class Statistics extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <AppDashboardNav />
        </div>
        <div className="row content-body-marginY">
          <div className="col-12 col-md-8 content-body-marginX">
            <div className="row">
              <div className="col-12">
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-3 col-md-1">
                      <div className="row justify-content-center">
                        <span>
                          <FontAwesomeIcon
                            icon={faChartLine}
                            className="h1 align-self-center"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-9 col-md-11">
                      <h3>Welcome to Data Analysis</h3>
                      <p>
                        Here you will find the total statistics of your projects
                      </p>
                    </div>
                    <div className="row mt-md-5">
                        stat
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 order-first order-md-2 col-md-2 appDashboardSideview">
            <div className="row h-100">
              <div className="col-12 h-100">
                <AppDashboardSideview />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
