import React, { Component } from "react";
import logo from "./../assets/logo.png";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "@iconify/react";
import tachometerAlt from "@iconify/icons-fa-solid/tachometer-alt";

class AppDashboardNav extends Component {
  render() {
    return (
      <div className="col-12 bg-black col-md-2 fixed fixed-top appDashboardNav">
        <div className="row h-100">
          <div className="col-4 col-md-12  mr-auto mr-md-0">
            <div className="row justify-content-center m-2">
              <img src={logo} alt="logo" className="img-fluid " />
            </div>
          </div>
          <div
            className="btn navbar-toggler text-white d-flex d-md-none"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              className="fa-2x align-self-center"
              icon={faBars}
            />
          </div>

          <div
            className="collapse  navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto text-center my-md-5 py-5 h-100">
              <li className="nav-item my-2">
                <NavLink
                  className="nav-link mx-3 mx-md-0 py-3"
                  activeclassname="active"
                  to="/"
                  exact={true}
                >
                  <Icon
                    icon={tachometerAlt}
                    className="d-none d-md-inline mr-2"
                  />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item my-2">
                <NavLink
                  className="nav-link mx-3 mx-md-0 py-3"
                  activeclassname="active"
                  to="/Statistics"
                >
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="d-none d-md-inline mr-2"
                  />
                  <span>Statistics</span>
                </NavLink>
              </li>
              <li className="nav-item my-2">
                <NavLink
                  className="nav-link mx-3 mx-md-0 py-3"
                  activeclassname="active"
                  to="/Settings"
                >
                  <FontAwesomeIcon
                    icon={faCog}
                    className="d-none d-md-inline mr-2"
                  />
                  <span>Settings</span>
                </NavLink>
              </li>

              <li className="nav-item my-2 mt-md-auto">
              <a
                className="nav-link mx-3 mx-md-0 py-3"
                href="#"
              >
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="d-none d-md-inline mr-2"
                />
                <span>LogOut</span>
              </a>
            </li>
            </ul>

            
          </div>
        </div>
      </div>
    );
  }
}

export default AppDashboardNav;
