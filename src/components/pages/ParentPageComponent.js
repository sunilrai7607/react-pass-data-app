import React, { Component } from "react";
import ChildPageComponent from "./ChildPageComponent";

export default class ParentPageComponent extends Component {
  state = {
    parentName: null,
    user: {
      firstName: null,
      lastName: null,
    },
  };
  handleOnChange = (event) => {
    this.setState({
      ...this.state.parentName,
      parentName: event.target.value,
    });
  };

  handleSentChildData = (target, value) => {
    console.log("Child value ", target, value);

    this.setState({
      user: { ...this.state.user, [target]: value },
    });
    console.log("State value ", this.state);
  };
  render() {
    return (
      <>
        <div className="parent-container">
          Parent Form
          <label>
            Parent Name:
            <input
              type="text"
              name="parentName"
              onChange={this.handleOnChange}
            />
          </label>
          <div className="App">
            <span>
              Child Name : {this.state.user.firstName}{" "}
              {this.state.user.lastName}
            </span>
          </div>
          <div>
            <ChildPageComponent
              sendToParent={this.handleSentChildData}
              parentName={this.state.parentName}
            />
          </div>
        </div>
      </>
    );
  }
}
