import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import sideView01 from "../assets/sideView01.png";

class AppDashboardSideview extends Component {
  render() {
    return (
      <div className="row d-flex mt-0 mt-md-5 mx-1 h-100">
        <div className="col-12">
          <div className="row justify-content-end">
            <FontAwesomeIcon className="mx-2 h4" icon={faSearch} />
            <FontAwesomeIcon className="mx-2 h4" icon={faBell} />
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            <span className="text-primary">
              <FontAwesomeIcon className="mx-2 h4" icon={faClock} />
            </span>
            <span className="text-primary">05:03:22</span>
          </div>
          <div className="col-12">
            <div className="row justify-content-center">
              <span className="text-muted">End of free trial</span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            <h6>PRODUCT OF THE WEEK</h6>
            <div className="col-12">
              <div className="row justify-content-center">
                <img src={sideView01} alt="project" className="img-fluid" />
                <div className="col-12 text-center">Product Name</div>
              </div>
            </div>
            <div className="col-12 text-right">
              <div className="row justify-content-end">
                <span className="text-primary">#Retail</span>
              </div>
            </div>
            <div className="col-12">
              <div className="row justify-content-around">
                <span className="text-primary">Total Visitors</span>
                <span>5000</span>
              </div>
            </div>
            <div className="col-12">
              <div className="row justify-content-around">
                <span className="text-primary">Positive Feed</span>
                <span>5000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-end">
            <span className="btn">
              <FontAwesomeIcon
                className="text-secondary h1"
                icon={faPlusCircle}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDashboardSideview;
