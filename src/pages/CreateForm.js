import React, { Component } from "react";
import AppDashboardNav from "../components/AppDashboardNav";
import AppFormHeading from "../components/AppFormHeading";
import AppFormQuestion from "../components/AppFormQuestion";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";



class CreateForm extends Component {
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
                      <div className="row justify-content-center justify-content-md-start">
                        <h5 className="text-primary">Create Form!</h5>
                        <div className=" ml-0 ml-md-auto">
                            <button className="btn btn-danger mx-2">Cancel</button>
                            <button className="btn btn-primary mx-2">Add</button>
                        </div>
                        <div className="col-12">
                          <div className="row">
                              <AppFormHeading title="Add Title" body="Add Body" />
                          </div>
                        </div>

                        <div className="col-12">
                            <div className="row">
                                <AppFormQuestion title="Question 1" body="Answer" />
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
    );
  }
}

export default CreateForm;
