import React, { Component } from "react";
import AppDashboardNav from "../components/AppDashboardNav";
import AppDashboardSideview from "../components/AppDashboardSideview";

class Settings extends Component {
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
                <div className="container px-5 mt-5">
                  <div className="row">
                    <div className="col-12 mt-md-5">
                      <div className="row">
                        <h5 className="text-primary">Account Information</h5>
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12 col-md-6 px-2 px-md-4 py-2 my-2 py-md-0 ">
                              <div className="row">
                                <div className="col-12 card px-2 px-md-2 py-3">
                                  <div className="row justify-content-between">
                                    <span className=" col-6 text-muted text-center">
                                      First Name:
                                    </span>
                                    <input
                                      className=" col-6 text-dark text-center"
                                      value="John"
                                      disabled
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 px-2 px-md-4 py-2 my-2 py-md-0 ">
                              <div className="row">
                                <div className="col-12 card px-2 px-md-2 py-3">
                                  <div className="row justify-content-between">
                                    <span className=" col-6 text-muted text-center">
                                      Last Name:
                                    </span>
                                    <input
                                      className=" col-6 text-dark text-center"
                                      value="Doe"
                                      disabled
                                      type="list"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 px-2 px-md-4 py-2 my-2 py-md-0 ">
                              <div className="row">
                                <div className="col-12 card px-2 px-md-2 py-3">
                                  <div className="row justify-content-between">
                                    <span className=" col-6 text-muted text-center">
                                      Email:
                                    </span>
                                    <input
                                      className=" col-6 text-dark text-center"
                                      value="john.doe@gmail.com"
                                      disabled
                                      type="email"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 px-2 px-md-4 py-2 my-2 py-md-0 ">
                              <div className="row">
                                <div className="col-12 card px-2 px-md-2 py-3">
                                  <div className="row justify-content-between">
                                    <span className=" col-6 text-muted text-center">
                                      Phone Number:
                                    </span>
                                    <input
                                      className=" col-6 text-dark text-center"
                                      value="+20123456789"
                                      disabled
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 px-2 px-md-4 py-2 my-2 py-md-0 ">
                              <div className="row">
                                <div className="col-12 card px-2 px-md-2 py-3">
                                  <div className="row justify-content-between">
                                    <span className=" col-6 text-muted text-center">
                                      Password:
                                    </span>
                                    <input
                                      className=" col-6 text-dark text-center"
                                      value="password"
                                      disabled
                                      type="password"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 px-2 px-md-4 py-2 my-2 py-md-0 ">
                              <div className="row">
                                <div className="col-12 card px-2 px-md-2 py-3">
                                  <div className="row justify-content-between">
                                    <span className=" col-6 text-muted text-center">
                                      Company Name:
                                    </span>
                                    <input
                                      className=" col-6 text-dark text-center"
                                      value="The Triple"
                                      disabled
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 px-2 px-md-4 py-2 my-2 py-md-0 ">
                              <div className="row">
                                <div className="col-12 card px-2 px-md-2 py-3">
                                  <div className="row justify-content-between">
                                    <span className=" col-6 text-muted text-center">
                                      Industry:
                                    </span>
                                    <input
                                      className=" col-6 text-dark text-center"
                                      value="Other"
                                      disabled
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 px-2 px-md-4 py-2 my-2 py-md-0 ">
                              <div className="row">
                                <div className="col-12 card px-2 px-md-2 py-3">
                                  <div className="row justify-content-between">
                                    <span className=" col-6 text-muted text-center">
                                      Role:
                                    </span>
                                    <input
                                      className=" col-6 text-dark text-center"
                                      value="Other"
                                      disabled
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-md-5">
                      <div className="row">
                        <h5 className="text-primary">Plan</h5>
                        <div className="col-12">
                          <div className="row justify-content-center">
                            <div className="col-10 col-md-6 p-4">
                              <div className="row card p-3 h-100">
                                <div className="col-12  my-1">
                                  <div className="row justify-content-around">
                                    <div className="text-muted m-0 col-6">
                                      Duration
                                    </div>
                                    <div className="text-dark m-0 col-6 font-weight-bold">
                                      7 Days
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 my-1">
                                  <div className="row justify-content-around">
                                    <div className="text-muted m-0 col-6">
                                      Cost
                                    </div>
                                    <div className="text-dark m-0 col-6 font-weight-bold">
                                      0$
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="row justify-content-around">
                                    <div className="text-muted m-0 col-6">
                                      Features
                                    </div>
                                    <ul className="text-dark m-0 p-0 col-6">
                                      <li className="font-weight-bold">
                                        - 12 Projects
                                      </li>
                                      <li className="font-weight-bold">
                                        - Unlimited Storage
                                      </li>
                                      <li className="font-weight-bold">
                                        - Full dashboard
                                      </li>
                                      <li className="font-weight-bold">
                                        - Full dashboard
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-10 col-md-6 p-4">
                                <div className="row card p-3 h-100">

                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Settings;
