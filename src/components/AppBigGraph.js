import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

class AppBigGraph extends Component {
  render() {

    const graphType = this.props.graphData.type;

    let newGraph;

    if(graphType === 'Bar') {
        newGraph = <Bar 
        data={this.props.graphData}
        options={{
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                categoryPercentage: 1,
                barThickness: 10,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            yAxes: [
              {
                barPercentage: 0.4,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    } else if (graphType === 'Line') {
        newGraph = <Line 
        data={this.props.graphData}
        options={{
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                categoryPercentage: 1,
                barThickness: 10,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            yAxes: [
              {
                barPercentage: 0.4,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    }

    return (
      <div className="col-12 col-md-10">
        {newGraph}
      </div>
    );
  }
}

export default AppBigGraph;
