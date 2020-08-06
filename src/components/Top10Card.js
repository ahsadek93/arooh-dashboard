import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";


import {Doughnut } from "react-chartjs-2";

class Top10Card extends Component {
  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4 p-4">
        <div className="row card flex-row p-3 justify-content-between">
          <span className="font-weight-bold">Product Name</span><span><FontAwesomeIcon icon={faEllipsisV} /></span>
          <div className="col-12">
              <div className="row justify-content-center">
                  <div className="col-12 text-center">
                    <img src={this.props.chartData.img} alt="projectImg" className="img-fluid"/>
                  </div>
              </div>
              <div className="row justify-content-end">
                <div className="col-6">
                <Doughnut data={this.props.chartData}
                   
                  options={{
                    cutoutPercentage: 75,
                    legend: {
                      display: false,
                    },
                    scales: {
                      xAxes: [
                        {
                          gridLines: false,
                          ticks: {
                            display: false,
                          },
                        },
                      ],
                      yAxes: [
                        {
                          gridLines: false,
                          ticks: {
                            display: false,
                          },
                        },
                      ],
                    },
        
                    tooltips: {
                      enabled: true,
                    },
                  }} />
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top10Card;
