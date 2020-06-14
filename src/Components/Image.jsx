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

  handleOnTouchStart = (e) => {
    e.preventDefault();
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

    const items = config.categories.map((category) => category.items);
    const images = [].concat.apply([], items);
    const image = images.filter((x) => x.id === this.state.selectedImageId)[0];

    const imageUrl = `/portfolio/${image.fileName}`;

    document.body.classList.add("no-scroll");
    return (
      <div
        className="image-overflow"
        onClick={this.close}
        onTouchStart={this.handleOnTouchStart}
        style={{ top: `${window.pageYOffset}px` }}
      >
        <div className="image">
          <img src={imageUrl} alt="" />
          {image.name != "" && <h2>{image.name}</h2>}
          {image.description != "" && <p>{image.description}</p>}
        </div>
      </div>
    );
  };
}

export default Image;
