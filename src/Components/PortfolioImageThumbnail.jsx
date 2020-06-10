import React, { Component } from "react";

class PortfolioImageThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: props.item.fileName,
      id: props.item.id,
    };
  }

  render = () => {
    const imageUrl = `/portfolio/thumbnails/${this.state.fileName}`;

    return (
      <div className="thumbnail" onClick={() => this.props.onImageSelected(this.state.id)}>
        <img src={imageUrl} alt="" />
      </div>
    );
  };
}

export default PortfolioImageThumbnail;
