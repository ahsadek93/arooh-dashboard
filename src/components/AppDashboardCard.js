import React, { Component } from "react";
import { Pie, Doughnut } from "react-chartjs-2";

class AppDashboardCard extends Component {
  render() {

    const chartType = this.props.chartData.type;
    let newChart;
    if (chartType === 'Pie') {
        newChart = <Pie
        className="align-self-center"
        height={200}
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

          tooltips: {
            enabled: true,
          },
        }}
        data={this.props.chartData}
      />
    } else if (chartType === 'Doughnut') {
        newChart = <Doughnut
        className="align-self-center"
        height={200}
        options={{
          cutoutPercentage: 80,
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
        }}
        data={this.props.chartData}
      />
    }



    return (
      <div className="col-12 col-md-6 p-4">
        <div className="row justify-content-center h-100">
          <div className="col-12 card p-3">
            <div className="row justify-content-between px-3">
              <p className="m-0 font-weight-bold">
                {this.props.chartData.datasets[0].label}
              </p>
              <p className="m-0 font-weight-light text-muted">This Week</p>
            </div>
            <div className="row py-3">
              <div className="col-8 mt-4">
                <div className="row my-3">
                  <div className="col-12 col-lg-6">
                    {this.props.chartData.labels[0]}
                  </div>
                  <div className="col-12 col-lg-6 text-primary">
                    {this.props.chartData.datasets[0].data[0]}
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12 col-lg-6">
                    {this.props.chartData.labels[1]}
                  </div>
                  <div className="col-12 col-lg-6 text-secondary">{this.props.chartData.datasets[0].data[1]}</div>
                </div>
                <div className="row my-3">
                  <div className="col-12 col-lg-6">
                    {this.props.chartData.labels[2]}
                  </div>
                  <div className="col-12 col-lg-6 text-info">{this.props.chartData.datasets[0].data[0] + this.props.chartData.datasets[0].data[1]}</div>
                </div>
              </div>
              <div className="col-4">
                <div className="row justify-content-center h-100">
                  {newChart}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDashboardCard;
