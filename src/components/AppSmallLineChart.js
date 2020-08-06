import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class AppSmallLineChart extends Component {
  render() {
    return (
      <div className="col-10 col-md-6 col-lg-3 p-4">
        <div className="row">
          <div className="col-12 pt-3 card">
            <p className="m-0 font-weight-bold">
              {this.props.chartData.datasets[0].label}
            </p>
            <Line
              height={230}
              options={{
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
                layout: {
                  padding: {
                    top: 50,
                    bottom: 50,
                    left: 5,
                    right: 5,
                  },
                },
              }}
              data={this.props.chartData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AppSmallLineChart;
