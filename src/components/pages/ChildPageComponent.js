import React, { Component } from "react";
import "../../styles/page.css";

export default class ChildPageComponent extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  handleOnChange = (event) => {
    this.props.sendToParent(event.target.name, event.target.value);
  };
  render() {
    return (
      <>
        <div className="child-container">
          <div className="App">
            Welcome to child page, Parent Name : {this.props.parentName}
          </div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" onChange={this.handleOnChange} />
          </label>
        </div>
      </>
    );
  }
}
