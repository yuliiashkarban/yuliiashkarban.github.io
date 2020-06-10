import React, { Component } from "react";
import Image from "./../components/Image";
import PortfolioCategory from "../components/PortfolioCategory";
import portfolioConfig from "../portfolioConfig";

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleImageSelected = (id) => {
    if (id == null || id == undefined) {
      throw "Id can not be null or undefined.";
    }

    this.setState({
      selectedImageId: id,
    });
  };

  render = () => {
    return (
      <div className="content-container">
        {portfolioConfig.categories.map(function (category, index) {
          return (
            <PortfolioCategory
              key={index}
              name={category.name}
              category={category}
              onImageSelected={this.handleImageSelected.bind(this)}
            />
          );
        }, this)}
        <Image selectedImageId={this.state.selectedImageId} />
      </div>
    );
  };
}

export default PortfolioPage;
