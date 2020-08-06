import React, { Component } from "react";

class AppDashboardColoredCard extends Component {
  render() {
    return (
      <div className="col-10 col-md-6 col-xl-3 p-4">
        <div className="row">
          <div className={`col-12 py-3 card text-white ${this.props.cardData.color}`}>
            <p className="font-weight-bold">{this.props.cardData.title}</p>
       <div className="row">
       <div className="col-7">
              <div>{this.props.cardData.subtitle01}: {this.props.cardData.value01}</div>
              <div>{this.props.cardData.subtitle02}: {this.props.cardData.value02}</div>
            </div>
            <div className="col-5">
              <div>
                <div className="h3 m-0">{this.props.cardData.cardValue}</div>
                <div className="m-0">{this.props.cardData.valueLabel}</div>

              </div>
            </div>
       </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDashboardColoredCard;
