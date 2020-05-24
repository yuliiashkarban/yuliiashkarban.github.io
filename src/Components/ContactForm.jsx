import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleChange = (event) => {
    let newState = { ...this.state };
    newState[event.target.id] = event.target.value;
    this.setState(newState);

    if (event.target.id === "message") {
      this.adjustTextAreaHeight(event);
    }
  };

  adjustTextAreaHeight = (event) => {
    event.target.style.height = "1px";
    event.target.style.height = event.target.scrollHeight - 20 + "px";
  };

  handleSubmit = (event) => {
    console.warn("TODO: Validate inputs");
    console.warn("TODO: Submit request");

    if (event) {
      event.preventDefault();
    }

    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  onWrapperClicked = () => {
    document.getElementById("message").focus();
  };

  render = () => {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <div className="textarea-wrapper" onClick={this.onWrapperClicked}>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            onChange={this.handleChange}
            value={this.state.message}
          />
        </div>
        <input type="submit" value="Send" className="button" />
      </form>
    );
  };
}

export default ContactForm;
