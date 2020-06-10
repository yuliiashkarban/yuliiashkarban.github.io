import React, { Component } from "react";
import PortfolioImageThumbnail from "./PortfolioImageThumbnail";

class PortfolioCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render = (props) => {
    return (
      <div className="portfolioCategory">
        <button
          type="button"
          className="collapsible"
          onClick={this.handleClick}
        >
          {this.props.category.name}
        </button>
        <div className={`collapse ${this.state.collapsed ? "" : "in"}`}>
          <div className="portfolioImages">
            {this.props.category.items.map(function (item, index) {
              return (
                <PortfolioImageThumbnail
                  key={index}
                  item={item}
                  onImageSelected={this.props.onImageSelected}
                />
              );
            }, this)}
          </div>
        </div>
      </div>
    );
  };
}

export default PortfolioCategory;
