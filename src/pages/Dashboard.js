import React, { Component } from "react";
import AppDashboardNav from "../components/AppDashboardNav";
import AppDashboardSideview from "../components/AppDashboardSideview";
import AppSmallLineChart from "../components/AppSmallLineChart";
import AppDashboardCard from "../components/AppDashboardCard";
import AppDashboardColoredCard from "../components/AppDashboardColoredCard";
import AppProjectCard from "../components/AppProjectCard";

import projectImg from "./../assets/sideView01.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faPen,
  faTrash,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

import { Icon } from "@iconify/react";
import tachometerAlt from "@iconify/icons-fa-solid/tachometer-alt";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smallLineChartData: [
        {
          labels: ["Last week", "2 Days ago", "Yesterday", "Today"],
          datasets: [
            {
              label: "Total Visitors",
              data: [35, 55, 30, 40],
              backgroundColor: "rgba(0, 0, 0, 0.0)",
              borderColor: "#5E2CED",
            },
          ],
        },
        {
          labels: ["Last week", "2 Days ago", "Yesterday", "Today"],
          datasets: [
            {
              label: "New Visitors",
              data: [22, 34, 21, 10],
              backgroundColor: "rgba(0, 0, 0, 0.0)",
              borderColor: "#5E2CED",
            },
          ],
        },

        {
          labels: ["Last week", "2 Days ago", "Yesterday", "Today"],
          datasets: [
            {
              label: "Interacted Visitors",
              data: [0, 3, 2, 1],
              backgroundColor: "rgba(0, 0, 0, 0.0)",
              borderColor: "#5E2CED",
            },
          ],
        },

        {
          labels: ["Last week", "2 Days ago", "Yesterday", "Today"],
          datasets: [
            {
              label: "Returned Visitors",
              data: [10, 5, 15, 12],
              backgroundColor: "rgba(0, 0, 0, 0.0)",
              borderColor: "#5E2CED",
            },
          ],
        },
      ],

      appCardChartData: [
        {
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

        {
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
      ],

      appColoredCard: [
        {
          title: "Retail",
          subtitle01: "Visitors",
          value01: 500,
          subtitle02: "Feed",
          value02: 15,
          cardValue: 15,
          valueLabel: "projects",
          color: "bg-primary",
        },
        {
          title: "Food",
          subtitle01: "Visitors",
          value01: 500,
          subtitle02: "Feed",
          value02: 15,
          cardValue: 15,
          valueLabel: "projects",
          color: "bg-success",
        },
        {
          title: "Education",
          subtitle01: "Visitors",
          value01: 500,
          subtitle02: "Feed",
          value02: 15,
          cardValue: 15,
          valueLabel: "projects",
          color: "bg-secondary",
        },
        {
          title: "Entertainment",
          subtitle01: "Visitors",
          value01: 500,
          subtitle02: "Feed",
          value02: 15,
          cardValue: 15,
          valueLabel: "projects",
          color: "bg-warning",
        },
        {
          title: "Printing",
          subtitle01: "Visitors",
          value01: 500,
          subtitle02: "Feed",
          value02: 15,
          cardValue: 15,
          valueLabel: "projects",
          color: "bg-info",
        },
        {
          title: "Advertising",
          subtitle01: "Visitors",
          value01: 500,
          subtitle02: "Feed",
          value02: 15,
          cardValue: 15,
          valueLabel: "projects",
          color: "bg-dark",
        },
        {
          title: "All",
          subtitle01: "Visitors",
          value01: 500,
          subtitle02: "Feed",
          value02: 15,
          cardValue: 80,
          valueLabel: "projects",
          color: "bg-white text-dark",
        },
      ],

      appProjectCardData: [
        {
          hasPic: false,
          pic: "Pic",
          name: "Name",
          date: "Date",
          catagory: "Catagory",
          catagoryColor: "",
          state: "State",
          stateColor:'',
          action: "Action",
        },
        
        {
          hasPic: true,
          pic: projectImg,
          name: "Project Name",
          date: "27/07/2020",
          catagory: "Retail",
          catagoryColor: "text-primary",
          state: "Active",
          stateColor:'text-success',
          action: (
            <div>
              <FontAwesomeIcon className="mx-1 mx-md-2" icon={faPen} />
              <FontAwesomeIcon className="mx-1 mx-md-2" icon={faTrash} />
              <FontAwesomeIcon className="mx-1 mx-md-2" icon={faEllipsisV} />
            </div>
          ),
        },

        {
            hasPic: true,
            pic: projectImg,
            name: "Project Name",
            date: "27/07/2020",
            catagory: "Food",
            catagoryColor: "text-success",
            state: "Inactive",
            stateColor:'text-danger',
            action: (
              <div>
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faPen} />
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faTrash} />
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faEllipsisV} />
              </div>
            ),
          },

          {
            hasPic: true,
            pic: projectImg,
            name: "Project Name",
            date: "27/07/2020",
            catagory: "Education",
            catagoryColor: "text-secondary",
            state: "Active",
            stateColor:'text-success',
            action: (
              <div>
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faPen} />
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faTrash} />
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faEllipsisV} />
              </div>
            ),
          },

          {
            hasPic: true,
            pic: projectImg,
            name: "Project Name",
            date: "27/07/2020",
            catagory: "Entertainment",
            catagoryColor: "text-warning",
            state: "Active",
            stateColor:'text-success',
            action: (
              <div>
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faPen} />
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faTrash} />
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faEllipsisV} />
              </div>
            ),
          },


          {
            hasPic: true,
            pic: projectImg,
            name: "Project Name",
            date: "27/07/2020",
            catagory: "Printing",
            catagoryColor: "text-info",
            state: "Active",
            stateColor:'text-success',
            action: (
              <div>
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faPen} />
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faTrash} />
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faEllipsisV} />
              </div>
            ),
          },

          {
            hasPic: true,
            pic: projectImg,
            name: "Project Name",
            date: "27/07/2020",
            catagory: "Retail",
            catagoryColor: "text-primary",
            state: "Active",
            stateColor:'text-success',
            action: (
              <div>
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faPen} />
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faTrash} />
                <FontAwesomeIcon className="mx-1 mx-md-2" icon={faEllipsisV} />
              </div>
            ),
          },
        
      ],
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
                          <Icon
                            icon={tachometerAlt}
                            className="h1 align-self-center"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-9 col-md-11">
                      <h3>Welcome to Dashboard</h3>
                      <p>
                        Here you will find main daily statistics & previous
                        projects
                      </p>
                    </div>
                  </div>
                  <div className="row mt-md-5">
                    <div className="col-12">
                      <h5 className="text-primary">Today's Main statistics</h5>
                    </div>
                    <div className="col-12">
                      <div className="row justify-content-center">
                        {this.state.smallLineChartData.map((singleChart, i) => (
                          <AppSmallLineChart chartData={singleChart} />
                        ))}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row justify-content-center">
                        {this.state.appCardChartData.map((singleChart, i) => (
                          <AppDashboardCard chartData={singleChart} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <h5 className="text-primary">Projects</h5>
                    </div>
                    <div className="col-12">
                      <div className="row justify-content-center justify-content-md-start">
                        {this.state.appColoredCard.map((singleCard, i) => (
                          <AppDashboardColoredCard cardData={singleCard} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="row pb-5 mb-5">
                    <div className="col-12">
                      <div className="row justify-content-end">
                        <div className="btn px-2 card">
                          <span>
                            Filter <FontAwesomeIcon icon={faFilter} />
                          </span>
                        </div>
                      </div>
                    </div>
                    {this.state.appProjectCardData.map((singleCard, i) => (
                      <AppProjectCard cardData={singleCard} />
                    ))}
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

export default Dashboard;
