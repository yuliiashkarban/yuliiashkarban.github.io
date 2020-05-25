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
    event.preventDefault();
    console.warn("TODO: Validate inputs");

    this.sendEmail(event.target);
  };

  sendEmail = (form) => {
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        this.setState({
          name: "",
          email: "",
          message: ""
        });
        console.warn("TODO: Show info: Email succesfully sent.");
      } else {
        console.error(
          "An error occured while sending email: " + xhr.responseText
        );
        console.warn("TODO: Show error: Error while sending email.");
        //Do not change state
      }
    };

    xhr.send(data);
  };

  onWrapperClicked = () => {
    document.getElementById("message").focus();
  };

  render = () => {
    return (
      <form
        className="contact-form"
        onSubmit={this.handleSubmit}
        action="https://formspree.io/mlepjjkd"
        method="POST"
      >
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
