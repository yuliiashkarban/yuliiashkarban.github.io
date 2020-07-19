import React, { Component } from "react";

class TimeLine extends Component {
  renderHorizontalLine = () => {
    return (
      <svg style={{ width: "100%", height: "5px" }}>
        <line
          x1="0%"
          y1="0px"
          x2="100%"
          y2="0px"
          style={{ stroke: "rgb(128, 128, 128)", strokeWidth: "5px" }}
        ></line>
      </svg>
    );
  };


  render = () => {
    return (
      <div className="content-container ">
        <div className="timeLine">
          <div className="text">
            <div>
              <p>art, painting, drawing, graphic design</p>
            </div>
          </div>
          <div className="date">
            <p>My passions</p>
            {this.renderHorizontalLine()}
          </div>
          <div className="verticalLine">&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>

          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div className="verticalLine">&nbsp;</div>
          <div className="date">
            <div>
              <p>My interests</p>
              {this.renderHorizontalLine()}
            </div>
          </div>
          <div className="text">
            <p>music, movies, board games</p>
          </div>

          <div className="text">
            <p>traveling, cooking, photography</p>
          </div>
          <div className="date">
            <div>
              <p>My hobbies</p>
              {this.renderHorizontalLine()}
            </div>
          </div>
          <div className="verticalLine">&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      </div>
    );
  };
}

export default TimeLine;
