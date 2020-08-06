import React, { Component } from "react";
import AppDashboardNav from "../components/AppDashboardNav";
import AppDashboardSideview from "../components/AppDashboardSideview";
import AppBigGraph from "../components/AppBigGraph";
import AppDashboardCard from "../components/AppDashboardCard";
import Top10Card from "../components/Top10Card";

import projectImg from "../assets/sideView01.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newVisitorsGraph: {
        type: "Bar",
        labels: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Total Visitors",
            data: [45, 55, 38, 57, 80, 55, 30, 75, 60, 100, 66, 40],
            backgroundColor: "#5E2CED",
            borderColor: "#5E2CED",
          },
          {
            label: "New Visitors",
            data: [40, 20, 30, 40, 50, 33, 22, 50, 52, 30, 45, 10],
            backgroundColor: "#BEAAF8",
            borderColor: "#BEAAF8",
          },
        ],
      },

      newVisitorCard: {
        type: "Doughnut",
        labels: ["New", "Returning ", "Total Visitors"],
        datasets: [
          {
            label: "New Visitors Rate",
            data: [375, 125],
            backgroundColor: ["#5E2CED", "#CC112B"],
          },
        ],
      },

      acqusitionCard: {
        labels: ["Subscription", "New Visitors", "Acqusition"],
        datasets: [
          {
            label: "Customer Acqusition",
            data: [5000, 4000],
            backgroundColor: ["#5E2CED", "#CC112B"],
          },
        ],
      },

      interactionGraph: {
        type: "Bar",
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            label: "Total Visitors",
            data: [45, 55, 38, 57, 80, 55, 30],
            backgroundColor: "#5E2CED",
            borderColor: "#5E2CED",
          },
          {
            label: "Interacted Visitors",
            data: [30, 15, 25, 30, 20, 20, 15],
            backgroundColor: "#BEAAF8",
            borderColor: "#BEAAF8",
          },

          {
            label: "Returned Visitors",
            data: [40, 20, 30, 40, 50, 33, 22],
            backgroundColor: "#AB94EC",
            borderColor: "#AB94EC",
          },
        ],
      },

      timeGraph: {
        type: "Line",
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            label: "Time Average",
            data: [3, 6, 4, 3, 2, 8, 2],
            backgroundColor: "transparent",
            borderColor: "#5E2CED",
          },
        ],
      },

      trafficGraph: {
        type: "Line",
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            label: "Traffic Change",
            data: [3000, 2700, 3500, 2000, 4500, 1000, 400],
            backgroundColor: "transparent",
            borderColor: "#5E2CED",
          },
        ],
      },

      feedbackGraph: {
        type: "Line",
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            label: "Positive",
            data: [30, 50, 10, 33, 47, 15, 5],
            backgroundColor: "transparent",
            borderColor: "#5E2CED",
          },
          {
            label: "Negative",
            data: [20, 15, 20, 3, 17, 22, 8],
            backgroundColor: "transparent",
            borderColor: "#CC112B",
          },
        ],
      },
      converstionRateCard: {
        type: "Doughnut",
        labels: ["Interacted", "Didnt Interact ", "Total Visitors"],
        datasets: [
          {
            label: "Converstion Rate",
            data: [375, 125],
            backgroundColor: ["#5E2CED", "#CC112B"],
          },
        ],
      },
      returnedRateCard: {
        type: "Doughnut",
        labels: ["Returned", "New ", "Total Visitors"],
        datasets: [
          {
            label: "New Visitors Rate",
            data: [125, 375],
            backgroundColor: ["#5E2CED", "#CC112B"],
          },
        ],
      },

      responseRateCard: {
        type: "Doughnut",
        labels: ["Answered", "Didn't Answer", "Total Visitors"],
        datasets: [
          {
            label: "Response Rate",
            data: [375, 125],
            backgroundColor: ["#5E2CED", "#CC112B"],
          },
        ],
      },

      satisficationRateCard: {
        type: "Doughnut",
        labels: ["Positive", "Negative", "Total Answers"],
        datasets: [
          {
            label: "Satisfaction Rate",
            data: [200, 20],
            backgroundColor: ["#5E2CED", "#CC112B"],
          },
        ],
      },

      feedbackCard: {
        type: "Pie",
        labels: ["Positive", "Negative"],
        datasets: [
          {
            label: "Satisfaction Rate",
            data: [200, 20],
            backgroundColor: ["#8F6EEC", "#D4475B"],
          },
        ],
      },

      positiveCard: {
        type: "Pie",
        labels: ["Reason 1", "Reason 2", "Reason 3"],
        datasets: [
          {
            label: "Satisfaction Rate",
            data: [50, 40, 30],
            backgroundColor: ["#5E2CED", "#8F6EEC", "#AB94EC"],
          },
        ],
      },

      negativeCard: {
        type: "Pie",
        labels: ["Reason 1", "Reason 2", "Reason 3"],
        datasets: [
          {
            label: "Satisfaction Rate",
            data: [50, 40, 30],
            backgroundColor: ["#CC112B", "#D4475B", "#DB7D8A"],
          },
        ],
      },

      top10: [
        {
            type: "Doughnut",
            img:projectImg,
            labels: ["Answered", "Didn't Answer", "Total Visitors"],
            datasets: [
              {
                label: "Response Rate",
                data: [375, 125],
                backgroundColor: ["#5E2CED", "#CC112B"],
              },
            ],
          },
          
          {
            type: "Doughnut",
            img:projectImg,
            labels: ["Answered", "Didn't Answer", "Total Visitors"],
            datasets: [
              {
                label: "Response Rate",
                data: [375, 125],
                backgroundColor: ["#5E2CED", "#CC112B"],
              },
            ],
          },
          {
            type: "Doughnut",
            img:projectImg,
            labels: ["Answered", "Didn't Answer", "Total Visitors"],
            datasets: [
              {
                label: "Response Rate",
                data: [375, 125],
                backgroundColor: ["#5E2CED", "#CC112B"],
              },
            ],
          },
          {
            type: "Doughnut",
            img:projectImg,
            labels: ["Answered", "Didn't Answer", "Total Visitors"],
            datasets: [
              {
                label: "Response Rate",
                data: [375, 125],
                backgroundColor: ["#5E2CED", "#CC112B"],
              },
            ],
          },
          {
            type: "Doughnut",
            img:projectImg,
            labels: ["Answered", "Didn't Answer", "Total Visitors"],
            datasets: [
              {
                label: "Response Rate",
                data: [375, 125],
                backgroundColor: ["#5E2CED", "#CC112B"],
              },
            ],
          },
          {
            type: "Doughnut",
            img:projectImg,
            labels: ["Answered", "Didn't Answer", "Total Visitors"],
            datasets: [
              {
                label: "Response Rate",
                data: [375, 125],
                backgroundColor: ["#5E2CED", "#CC112B"],
              },
            ],
          },
          {
            type: "Doughnut",
            img:projectImg,
            labels: ["Answered", "Didn't Answer", "Total Visitors"],
            datasets: [
              {
                label: "Response Rate",
                data: [375, 125],
                backgroundColor: ["#5E2CED", "#CC112B"],
              },
            ],
          },
          {
            type: "Doughnut",
            img:projectImg,
            labels: ["Answered", "Didn't Answer", "Total Visitors"],
            datasets: [
              {
                label: "Response Rate",
                data: [375, 125],
                backgroundColor: ["#5E2CED", "#CC112B"],
              },
            ],
          },
          {
            type: "Doughnut",
            img:projectImg,
            labels: ["Answered", "Didn't Answer", "Total Visitors"],
            datasets: [
              {
                label: "Response Rate",
                data: [375, 125],
                backgroundColor: ["#5E2CED", "#CC112B"],
              },
            ],
          },
          {
            type: "Doughnut",
            img:projectImg,
            labels: ["Answered", "Didn't Answer", "Total Visitors"],
            datasets: [
              {
                label: "Response Rate",
                data: [375, 125],
                backgroundColor: ["#5E2CED", "#CC112B"],
              },
            ],
          },
      ]
    };
  }

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
                    <div className="col-12">
                      <div className="row justify-content-center mt-md-5">
                        <ul
                          className="nav nav-pills nav-fill col-12 col-md-10"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link text-dark active"
                              id="views-tab"
                              data-toggle="tab"
                              href="#views"
                              role="tab"
                              aria-controls="views"
                              aria-selected="true"
                            >
                              Views
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link text-dark"
                              id="feedback-tab"
                              data-toggle="tab"
                              href="#feedback"
                              role="tab"
                              aria-controls="feedback"
                              aria-selected="false"
                            >
                              Feedback
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link text-dark"
                              id="connections-tab"
                              data-toggle="tab"
                              href="#connections"
                              role="tab"
                              aria-controls="connections"
                              aria-selected="false"
                            >
                              Connections
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className="nav-link text-dark"
                              id="top10-tab"
                              data-toggle="tab"
                              href="#top10"
                              role="tab"
                              aria-controls="top10"
                              aria-selected="false"
                            >
                              Top 10
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="row tab-content" id="myTabContent">
                        <div
                          className="col-12 tab-pane fade show active"
                          id="views"
                          role="tabpanel"
                          aria-labelledby="views-tab"
                        >
                          <div className="col-12 mt-md-5">
                            <div className="row justify-content-center">
                              <AppBigGraph
                                graphData={this.state.newVisitorsGraph}
                              />
                            </div>
                          </div>
                          <div className="col-12 my-4">
                            <div className="row justify-content-center">
                              <AppDashboardCard
                                chartData={this.state.newVisitorCard}
                              />
                              <AppDashboardCard
                                chartData={this.state.acqusitionCard}
                              />
                            </div>
                          </div>
                          <div className="col-12 my-4">
                            <div className="row justify-content-center">
                              <AppBigGraph
                                graphData={this.state.interactionGraph}
                              />
                            </div>
                          </div>
                          <div className="col-12 my-4">
                            <div className="row justify-content-center">
                              <AppDashboardCard
                                chartData={this.state.converstionRateCard}
                              />
                              <AppDashboardCard
                                chartData={this.state.returnedRateCard}
                              />
                            </div>
                          </div>
                          <div className="col-12 my-4">
                            <div className="row justify-content-center">
                              <AppBigGraph graphData={this.state.timeGraph} />
                            </div>
                          </div>
                          <div className="col-12 my-4">
                            <div className="row justify-content-center">
                              <AppBigGraph
                                graphData={this.state.trafficGraph}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12 tab-pane fade"
                          id="feedback"
                          role="tabpanel"
                          aria-labelledby="feedback-tab"
                        >
                          <div className="col-12 mt-md-5">
                            <div className="row justify-content-center">
                              <AppBigGraph
                                graphData={this.state.feedbackGraph}
                              />
                            </div>
                          </div>

                          <div className="col-12 my-4">
                            <div className="row justify-content-center">
                              <AppDashboardCard
                                chartData={this.state.responseRateCard}
                              />
                              <AppDashboardCard
                                chartData={this.state.satisficationRateCard}
                              />
                            </div>
                          </div>
                          <div className="col-12 my-4">
                            <div className="row justify-content-center">
                              <AppDashboardCard
                                chartData={this.state.feedbackCard}
                              />
                              <AppDashboardCard
                                chartData={this.state.positiveCard}
                              />
                            </div>
                          </div>
                          <div className="col-12 my-4">
                            <div className="row">
                              <AppDashboardCard
                                chartData={this.state.negativeCard}
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="col-12 tab-pane fade"
                          id="connections"
                          role="tabpanel"
                          aria-labelledby="connections-tab"
                        >
                          <div className="col-12 mt-md-5">
                            <div className="row justify-content-center">
                              <AppBigGraph
                                graphData={this.state.newVisitorsGraph}
                              />
                            </div>
                          </div>

                          <div className="col-12 my-4">
                            <div className="row">
                              <AppDashboardCard
                                chartData={this.state.converstionRateCard}
                              />
                              
                            </div>
                          </div>
                        </div>

                        <div
                          className="col-12 tab-pane fade"
                          id="top10"
                          role="tabpanel"
                          aria-labelledby="top10-tab"
                        >
                          <div className="row">
                              <div className="col-12">
                                <div className="row">
                                    {
                                        this.state.top10.map((singleCard, i)=>(
                                            <Top10Card chartData={singleCard} />

                                        ))
                                    }
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

export default Statistics;
