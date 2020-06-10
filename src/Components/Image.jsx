import React, { Component } from "react";
import config from "../portfolioConfig";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageId: null,
    };
  }

  close = () => {
    document.body.classList.remove("no-scroll");

    this.setState({
      selectedImageId: null,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState && prevState.selectedImageId !== this.props.selectedImageId) {
      this.setState({
        selectedImageId: this.props.selectedImageId,
      });
    }
  };

  render = () => {
    if (this.state.selectedImageId == null) {
      return null;
    }

    let items = config.categories.map((category) => category.items);
    let images = [].concat.apply([], items);
    let image = images.filter((x) => x.id === this.state.selectedImageId)[0];

    const imageUrl = `/portfolio/${image.fileName}`;

    document.body.classList.add("no-scroll");
    return (
      <div
        className="image-overflow"
        onClick={this.close}
        style={{ top: `${window.pageYOffset}px` }}
      >
        <img src={imageUrl} alt="" />
      </div>
    );
  };
}

export default Image;
