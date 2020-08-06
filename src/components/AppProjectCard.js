import React, { Component } from "react";

class AppProjectCard extends Component {
  render() {
    let cardPic;

    if (this.props.cardData.hasPic) {
      cardPic = <img src={this.props.cardData.pic} className="img-fluid" />;
    } else {
      cardPic = this.props.cardData.pic;
    }

    return (
      <div className="col-12 my-2">
        <div className="row card flex-row  justify-content-center p-3">
          <div className="col-3 col-lg-1 d-flex justify-content-center"><span className="align-self-center text-center">{cardPic}</span></div>
          <div className="col-2 d-none d-lg-flex  justify-content-center"><span className="align-self-center text-center">{this.props.cardData.name}</span></div>
          <div className="col-2 d-none d-lg-flex  justify-content-center"><span className="align-self-center text-center">{this.props.cardData.date}</span></div>
          <div className="col-2 d-none d-lg-flex  justify-content-center"><span className={`align-self-center text-center ${this.props.cardData.catagoryColor}`}>{this.props.cardData.catagory}</span></div>
          <div className="col-4 col-lg-2 d-flex justify-content-center"><span className={`align-self-center text-center ${this.props.cardData.stateColor}`}>{this.props.cardData.state}</span></div>
          <div className="col-5 col-lg-2 d-flex justify-content-center"><span className="align-self-center text-center">{this.props.cardData.action}</span></div>
        </div>
      </div>
    );
  }
}

export default AppProjectCard;
